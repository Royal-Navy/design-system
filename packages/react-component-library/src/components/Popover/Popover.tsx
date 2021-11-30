import React from 'react'
import { Placement } from '@popperjs/core'

import {
  FLOATING_BOX_PLACEMENT,
  FLOATING_BOX_SCHEME,
  FloatingBox,
  FloatingBoxProps,
  FloatingBoxSchemeType,
} from '../../primitives/FloatingBox'
import { getId } from '../../helpers'
import { POPOVER_CLOSE_DELAY } from './constants'
import { useHideShow } from '../../hooks/useHideShow'

export interface PopoverProps
  extends Omit<
    FloatingBoxProps,
    'onMouseEnter' | 'onMouseLeave' | 'renderTarget' | 'targetElement'
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
   * Where to place the Popover relative to the target element.
   */
  placement?: Placement
  /**
   * Type of component to display (style varies accordingly).
   */
  scheme?: FloatingBoxSchemeType
}

export const Popover: React.FC<PopoverProps> = ({
  children,
  closeDelay = POPOVER_CLOSE_DELAY,
  content,
  isClick,
  scheme = FLOATING_BOX_SCHEME.LIGHT,
  placement = FLOATING_BOX_PLACEMENT.RIGHT,
  ...rest
}) => {
  const { floatingBoxChildrenRef, isVisible, mouseEvents } = useHideShow(
    isClick,
    closeDelay
  )

  const contentId = getId('popover-content')

  const PopoverTarget = () => {
    return React.Children.map(children, (item: React.ReactElement) =>
      React.cloneElement(item, {
        ...mouseEvents,
      })
    )[0]
  }

  return (
    <FloatingBox
      isVisible={isVisible}
      renderTarget={<PopoverTarget />}
      scheme={scheme}
      aria-describedby={contentId}
      contentId={contentId}
      data-testid="popover"
      placement={placement}
      {...rest}
    >
      <div data-testid="popover-content" ref={floatingBoxChildrenRef}>
        {content}
      </div>
    </FloatingBox>
  )
}

Popover.displayName = 'Popover'
