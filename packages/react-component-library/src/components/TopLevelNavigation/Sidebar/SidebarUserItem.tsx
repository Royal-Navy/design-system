import React from 'react'
import {
  StyledUserItem,
  StyledUserItemIcon,
  StyledUserItemText,
} from './partials'
import { SidebarUserItemProps } from './types'

export const SidebarUserItem = ({ icon, link }: SidebarUserItemProps) => {
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

SidebarUserItem.displayName = 'SidebarUserItem'
