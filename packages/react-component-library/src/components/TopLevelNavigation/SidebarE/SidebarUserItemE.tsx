import React from 'react'

import { NavItem } from '../../../common/Nav'
import { StyledUserItem } from './partials/StyledUserItem'
import { StyledUserItemIcon } from './partials/StyledUserItemIcon'
import { StyledUserItemText } from './partials/StyledUserItemText'

export interface SidebarUserItemEProps extends NavItem {
  /**
   * Optional icon to display to the left of the user navigation item.
   */
  icon?: React.ReactNode
}

export const SidebarUserItemE: React.FC<SidebarUserItemEProps> = ({
  icon,
  link,
}) => {
  const linkElement = link as React.ReactElement

  return (
    <StyledUserItem>
      {React.cloneElement(linkElement, {
        ...link.props,
        children: (
          <>
            {icon && <StyledUserItemIcon>{icon}</StyledUserItemIcon>}
            <StyledUserItemText>
              {linkElement.props.children}
            </StyledUserItemText>
          </>
        ),
      })}
    </StyledUserItem>
  )
}

SidebarUserItemE.displayName = 'SidebarUserItemE'
