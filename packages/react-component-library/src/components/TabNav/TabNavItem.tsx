import React from 'react'
import { getKey } from '../../helpers'

import { NavItem } from '../../common/Nav'
import { StyledTabNavItem } from './partials/StyledTabNavItem'

export const TabNavItem: React.FC<NavItem> = ({ isActive, link }) => {
  return (
    <StyledTabNavItem
      key={getKey('tab-nav-item', link.toString())}
      $isActive={isActive}
      data-testid={isActive ? 'tab-active' : 'tab'}
    >
      {link}
    </StyledTabNavItem>
  )
}
