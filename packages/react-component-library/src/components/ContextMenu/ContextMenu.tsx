import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import {
  useClickMenu,
  ClickType,
  ClickMenuPositionType,
  CLICK_MENU_POSITION,
} from '../../hooks/useClickMenu'
import { StyledContextMenu } from './partials/StyledContextMenu'

interface ContextMenuProps extends ComponentWithClass {
  /**
   * attachedToRef: A ref object for the element associated with the context menu
   */
  attachedToRef: React.RefObject<HTMLElement>
  /**
   * clickType: Should the menu display when the user uses a left or right mouse click?
   */
  clickType?: ClickType
  /**
   * onHide: Optional handler function to be called when the context menu is hidden
   */
  onHide?: () => void
  /**
   * onShow: Optional handler function to be called when the context menu is displayed
   */
  onShow?: () => void
  position?: ClickMenuPositionType
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  className,
  children,
  attachedToRef,
  clickType = 'right',
  onHide,
  onShow,
  position = CLICK_MENU_POSITION.BELOW,
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
      className={className}
      data-testid="context-menu"
      left={coordinates.x}
      ref={menuRef}
      top={coordinates.y}
    >
      {children}
    </StyledContextMenu>
  )
}

ContextMenu.displayName = 'ContextMenu'
