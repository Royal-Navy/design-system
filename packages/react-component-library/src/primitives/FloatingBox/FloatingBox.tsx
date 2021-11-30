import React from 'react'
import { Placement } from '@popperjs/core'
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

export interface FloatingBoxBaseProps extends PositionType, ComponentWithClass {
  role?: string
  contentId?: string
  scheme?: FloatingBoxSchemeType
  onMouseEnter?: (e: React.MouseEvent) => void
  onMouseLeave?: (e: React.MouseEvent) => void
  children?: React.ReactElement
  isVisible?: boolean
  placement?: Placement
}

export interface FloatingBoxWithExternalTargetProps
  extends FloatingBoxBaseProps {
  renderTarget?: never
  /**
   * External element that the floating box should attach to.
   */
  targetElement?: Element
}

export interface FloatingBoxWithEmbeddedTargetProps
  extends FloatingBoxBaseProps {
  /**
   * JSX to render, representing the element that the floating
   * box should attach to.
   */
  renderTarget?: React.ReactElement
  targetElement?: never
}

export type FloatingBoxProps =
  | FloatingBoxWithExternalTargetProps
  | FloatingBoxWithEmbeddedTargetProps

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
  targetElement,
  isVisible,
  placement = 'auto',
  ...rest
}) => {
  const {
    targetElementRef,
    floatingElementRef,
    arrowElementRef,
    styles,
    attributes,
  } = useFloatingElement(placement, undefined, targetElement)

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
            style={{ ...styles.popper, ...TRANSITION_STYLES[state] }}
            ref={floatingElementRef}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            role="dialog"
            data-testid="floating-box"
            {...attributes.popper}
            {...rest}
          >
            <FloatingBoxContent
              contentId={contentId}
              scheme={scheme}
              data-testid="floating-box-content"
            >
              <StyledArrow
                $placement={
                  attributes?.popper?.['data-popper-placement'] as Placement
                }
                ref={arrowElementRef}
                style={styles.arrow}
                {...attributes.arrow}
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
