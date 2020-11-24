import React from 'react'

import { NavItem } from '../../../common/Nav'
import { StyledUserItem } from './partials/StyledUserItem'
import { StyledUserItemIcon } from './partials/StyledUserItemIcon'
import { StyledUserItemText } from './partials/StyledUserItemText'

export interface SidebarUserItemEProps extends NavItem {
  icon?: React.ReactNode
}

export const SidebarUserItemE: React.FC<SidebarUserItemEProps> = ({
  icon,
  link,
}) => {
  const linkElement = link as React.ReactElement

  return React.cloneElement(linkElement, {
    ...link.props,
    children: (
      <StyledUserItem>
        {icon && <StyledUserItemIcon>{icon}</StyledUserItemIcon>}
        <StyledUserItemText>{linkElement.props.children}</StyledUserItemText>
      </StyledUserItem>
    ),
  })
}

SidebarUserItemE.displayName = 'SidebarUserItem'
