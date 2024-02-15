import React, { useRef } from 'react'
import { BasePlacement, Placement, VariationPlacement } from '@popperjs/core'
import { Transition } from 'react-transition-group'
import mergeRefs from 'react-merge-refs'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { FloatingBoxContent } from './FloatingBoxContent'
import { FloatingBoxSchemeType } from './types'
import { PositionType } from '../../common/Position'
import { StyledFloatingBox } from './partials/StyledFloatingBox'
import { StyledTarget } from './partials/StyledTarget'
import { StyledArrow } from './partials/StyledArrow'
import { useFloatingElement } from '../../hooks/useFloatingElement'
import { FLOATING_BOX_SCHEME } from './constants'
import { useExternalId } from '../../hooks/useExternalId'

export interface FloatingBoxBaseProps
  extends PositionType,
    ComponentWithClass,
    Pick<React.AriaAttributes, 'aria-label' | 'aria-labelledby'>,
    Pick<React.HTMLAttributes<HTMLDivElement>, 'id'> {
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
  targetElement?: Element | null
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

export const FloatingBox = ({
  contentId: externalContentId,
  scheme = FLOATING_BOX_SCHEME.LIGHT,
  onMouseEnter,
  onMouseLeave,
  children,
  renderTarget,
  targetElement,
  isVisible,
  placement = 'auto',
  role = 'dialog',
  ...rest
}: FloatingBoxProps) => {
  const nodeRef = useRef<HTMLDivElement>(null)
  const contentId = useExternalId('floating-box', externalContentId)
  const {
    targetElementRef,
    floatingElementRef,
    arrowElementRef,
    styles,
    attributes,
  } = useFloatingElement(placement, undefined, targetElement)

  const calculatedPlacement = attributes?.popper?.['data-popper-placement'] as
    | BasePlacement
    | VariationPlacement
    | undefined

  const basePlacement = calculatedPlacement?.split('-', 1)?.[0] as
    | BasePlacement
    | undefined

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
      <Transition nodeRef={nodeRef} in={isVisible} timeout={0} unmountOnExit>
        {(state) => (
          <StyledFloatingBox
            $transitionStatus={state}
            style={styles.popper}
            ref={mergeRefs([nodeRef, floatingElementRef])}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            role={role}
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
                $placement={basePlacement}
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
