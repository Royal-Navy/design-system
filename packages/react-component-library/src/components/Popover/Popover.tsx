import React from 'react'
import { Placement } from '@popperjs/core'

import {
  FLOATING_BOX_PLACEMENT,
  FLOATING_BOX_SCHEME,
  FloatingBox,
  FloatingBoxProps,
  FloatingBoxSchemeType,
} from '../../primitives/FloatingBox'
import { POPOVER_CLOSE_DELAY } from './constants'
import { HideShowMouseEvents, useHideShow } from '../../hooks/useHideShow'
import { useExternalId } from '../../hooks/useExternalId'

export interface PopoverProps
  extends Omit<
    FloatingBoxProps,
    | 'onMouseEnter'
    | 'onMouseLeave'
    | 'renderTarget'
    | 'targetElement'
    | 'targetRef'
  > {
  /**
   * JSX target element to attach the Popover to.
   */
  children: React.ReactElement
  /**
   * Number of milliseconds (ms) before the component closes after mouse leave.
   */
  closeDelay?: number
  /**
   * Arbitrary JSX content to display within the component.
   */
  content: React.ReactElement
  /**
   * Toggles whether the Popover displays on click instead of mouse over.
   */
  isClick?: boolean
  /**
   * Controls whether the Popover is visible. Leave undefined to let the
   * Popover manage this itself.
   */
  isVisible?: boolean
  /**
   * Called when the Popover requests to be shown or hidden. When
   * controlling the Popover, apply the change to `isVisible` in the same
   * update, as with any controlled React input.
   */
  onVisibleChange?: (isVisible: boolean) => void
  /**
   * Where to place the Popover relative to the target element.
   */
  placement?: Placement
  /**
   * Type of component to display (style varies accordingly).
   */
  scheme?: FloatingBoxSchemeType
}

function getMouseEvents(
  isClick: boolean,
  item: React.ReactElement,
  mouseEvents: HideShowMouseEvents
) {
  if (mouseEvents.onClick) {
    return mouseEvents
  }

  return {
    onMouseEnter: () => {
      if (item.props.onMouseEnter) {
        item.props.onMouseEnter()
      }

      if (mouseEvents.onMouseEnter) {
        mouseEvents.onMouseEnter()
      }
    },
    onMouseLeave: () => {
      if (item.props.onMouseLeave) {
        item.props.onMouseLeave()
      }

      if (mouseEvents.onMouseLeave) {
        mouseEvents.onMouseLeave()
      }
    },
  }
}

export const Popover = ({
  children,
  closeDelay = POPOVER_CLOSE_DELAY,
  content,
  isClick = false,
  isVisible: controlledIsVisible,
  onVisibleChange,
  scheme = FLOATING_BOX_SCHEME.LIGHT,
  placement = FLOATING_BOX_PLACEMENT.RIGHT,
  'aria-label': ariaLabel,
  ...rest
}: PopoverProps) => {
  const { floatingBoxChildrenRef, isVisible, mouseEvents, targetRef } =
    useHideShow(isClick, closeDelay, false, {
      isVisible: controlledIsVisible,
      onVisibleChange,
    })

  const contentId = useExternalId('popover-content')

  const target = React.Children.map(children, (item: React.ReactElement) =>
    React.cloneElement(item, {
      ...getMouseEvents(isClick, item, mouseEvents),
    })
  )[0]

  return (
    <FloatingBox
      isVisible={isVisible}
      renderTarget={target}
      scheme={scheme}
      aria-describedby={contentId}
      aria-label={ariaLabel || 'Popover'}
      contentId={contentId}
      data-testid="popover"
      placement={placement}
      {...rest}
      targetRef={targetRef}
    >
      <div data-testid="popover-content" ref={floatingBoxChildrenRef}>
        {content}
      </div>
    </FloatingBox>
  )
}

Popover.displayName = 'Popover'
