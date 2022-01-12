import React, { useRef } from 'react'
import type { Placement } from '@floating-ui/core'
import { Transition } from 'react-transition-group'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { FloatingBoxContent } from './FloatingBoxContent'
import { FloatingBoxSchemeType } from './types'
import { getId } from '../../helpers'
import { PositionType } from '../../common/Position'
import { StyledFloatingBox } from './partials/StyledFloatingBox'
import { StyledTarget } from './partials/StyledTarget'
import { StyledArrow } from './partials/StyledArrow'
import { useFloatingElement } from '../../hooks/useFloatingElement'
import { FLOATING_BOX_SCHEME } from './constants'

export interface FloatingBoxProps extends PositionType, ComponentWithClass {
  role?: string
  contentId?: string
  scheme?: FloatingBoxSchemeType
  onMouseEnter?: (e: React.MouseEvent) => void
  onMouseLeave?: (e: React.MouseEvent) => void
  children?: React.ReactElement
  isVisible?: boolean
  allowedPlacements?: Placement[]
  renderTarget?: React.ReactElement
}

const TRANSITION_STYLES = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
}

export const FloatingBox: React.FC<FloatingBoxProps> = ({
  contentId = getId('floating-box'),
  scheme = FLOATING_BOX_SCHEME.LIGHT,
  onMouseEnter,
  onMouseLeave,
  children,
  renderTarget,
  isVisible,
  allowedPlacements,
  ...rest
}) => {
  const arrowElementRef = useRef(null)

  const { placement, targetElementRef, floatingElementRef, styles } =
    useFloatingElement(undefined, arrowElementRef, allowedPlacements)

  return (
    <>
      {renderTarget && (
        <StyledTarget
          ref={targetElementRef}
          data-testid="floating-box-styled-target"
        >
          {renderTarget}
        </StyledTarget>
      )}
      <Transition in={isVisible} timeout={0} unmountOnExit>
        {(state) => (
          <StyledFloatingBox
            style={{ ...styles.float, ...TRANSITION_STYLES[state] }}
            ref={floatingElementRef}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            role="dialog"
            data-testid="floating-box"
            {...rest}
          >
            <FloatingBoxContent
              contentId={contentId}
              scheme={scheme}
              data-testid="floating-box-content"
            >
              <StyledArrow
                $placement={placement}
                ref={arrowElementRef}
                style={styles.arrow}
              />
              {children}
            </FloatingBoxContent>
          </StyledFloatingBox>
        )}
      </Transition>
    </>
  )
}

FloatingBox.displayName = 'FloatingBox'
