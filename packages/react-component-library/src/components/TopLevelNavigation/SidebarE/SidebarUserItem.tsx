import React from 'react'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { NavItem } from '../../../common/Nav'

export interface SidebarUserItemProps extends NavItem {
  icon?: React.ReactNode
}

const { color, spacing } = selectors

const StyledSidebarUserItem = styled.li`
  display: flex;
  align-items: center;
  margin: ${spacing('4')};
`

const StyledSidebarUserItemIcon = styled.div`
  display: inline-flex;
  margin-right: ${spacing('4')};

  ${StyledSidebarUserItem}:hover & {
    color: ${color('action', '500')};
  }
`

const StyledSidebarUserItemText = styled.div`
  ${StyledSidebarUserItem}:hover & {
    color: ${color('action', '500')};
  }
`

export const SidebarUserItem: React.FC<SidebarUserItemProps> = ({
  icon,
  link,
}) => {
  const linkElement = link as React.ReactElement

  return React.cloneElement(linkElement, {
    ...link.props,
    children: (
      <StyledSidebarUserItem>
        {icon && <StyledSidebarUserItemIcon>{icon}</StyledSidebarUserItemIcon>}
        <StyledSidebarUserItemText>
          {linkElement.props.children}
        </StyledSidebarUserItemText>
      </StyledSidebarUserItem>
    ),
  })
}

SidebarUserItem.displayName = 'SidebarUserItem'
