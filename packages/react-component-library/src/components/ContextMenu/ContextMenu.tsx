import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { useRightClick } from '../../hooks/useRightClick'
import { StyledContextMenu } from './partials/StyledContextMenu'

interface ContextMenuProps extends ComponentWithClass {
  attachedToRef?: React.RefObject<HTMLElement>
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  className,
  children,
  attachedToRef,
}) => {
  const { position, isOpen } = useRightClick(attachedToRef)

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
