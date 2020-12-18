import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { useClickMenu, ClickType } from '../../hooks/useClickMenu'
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
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  className,
  children,
  attachedToRef,
  clickType = 'right',
  onHide,
  onShow,
}) => {
  const { position, isOpen } = useClickMenu({
    attachedToRef,
    clickType,
    onHide,
    onShow,
  })

  const hasIcons = !!React.Children.toArray(children).filter(
    (child: React.ReactNode) => (child as React.ReactElement)?.props?.icon
  ).length

  return (
    <>
      {isOpen && (
        <StyledContextMenu
          className={className}
          top={position.y}
          left={position.x}
          $hasIcons={hasIcons}
          data-testid="context-menu"
        >
          {children}
        </StyledContextMenu>
      )}
    </>
  )
}

ContextMenu.displayName = 'ContextMenu'
