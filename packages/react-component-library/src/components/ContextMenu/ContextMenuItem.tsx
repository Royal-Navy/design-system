import React from 'react'

import { NavItem } from '../../common/Nav'
import { StyledContextMenuItem } from './partials/StyledContextMenuItem'
import { StyledIcon } from './partials/StyledIcon'
import { StyledText } from './partials/StyledText'

export interface ContextMenuItemProps extends NavItem {
  /**
   * Optional icon to display beside the component text.
   */
  icon?: React.ReactNode
}

export const ContextMenuItem: React.FC<ContextMenuItemProps> = ({
  icon,
  link,
}) => {
  const linkElement = link as React.ReactElement

  const item = React.cloneElement(linkElement, {
    ...link.props,
    children: (
      <>
        {icon && <StyledIcon>{icon}</StyledIcon>}
        <StyledText hasIcon={!!icon} data-testid="context-menu-item-text">
          {linkElement.props.children}
        </StyledText>
      </>
    ),
  })

  return <StyledContextMenuItem role="menuitem">{item}</StyledContextMenuItem>
}

ContextMenuItem.displayName = 'ContextMenuItem'
