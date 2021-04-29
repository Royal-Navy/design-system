import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import {
  useClickMenu,
  ClickType,
  ClickMenuPositionType,
  CLICK_BUTTON,
  CLICK_MENU_POSITION,
} from '../../hooks/useClickMenu'
import { StyledContextMenu } from './partials/StyledContextMenu'

export interface ContextMenuProps extends ComponentWithClass {
  /**
   * A ref object for the element associated with the component.
   */
  attachedToRef: React.RefObject<HTMLElement>
  /**
   * Should the menu display when the user uses a left or right mouse click.
   */
  clickType?: ClickType
  /**
   * Optional handler function to be invoked when the component is hidden.
   */
  onHide?: () => void
  /**
   * Optional handler function to be invoked when the component is displayed.
   */
  onShow?: () => void
  /**
   * Where to display the component relative to the target element.
   */
  position?: ClickMenuPositionType
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  attachedToRef,
  children,
  clickType = CLICK_BUTTON.RIGHT,
  onHide,
  onShow,
  position = CLICK_MENU_POSITION.RIGHT_BELOW,
  ...rest
}) => {
  const { coordinates, isOpen, menuRef } = useClickMenu<HTMLOListElement>({
    attachedToRef,
    clickType,
    onHide,
    onShow,
    position,
  })

  const hasIcons = !!React.Children.toArray(children).filter(
    (child: React.ReactNode) => (child as React.ReactElement)?.props?.icon
  ).length

  return (
    <StyledContextMenu
      $hasIcons={hasIcons}
      $isOpen={isOpen}
      data-testid="context-menu"
      left={coordinates.x}
      ref={menuRef}
      top={coordinates.y}
      {...rest}
    >
      {children}
    </StyledContextMenu>
  )
}

ContextMenu.displayName = 'ContextMenu'
