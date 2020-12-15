import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { useClickMenu, ClickType } from '../../hooks/useClickMenu'
import { StyledContextMenu } from './partials/StyledContextMenu'

interface ContextMenuProps extends ComponentWithClass {
  attachedToRef?: React.RefObject<HTMLElement>
  clickType?: ClickType
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  className,
  children,
  attachedToRef,
  clickType = 'right',
}) => {
  const { position, isOpen } = useClickMenu(attachedToRef, clickType)

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
