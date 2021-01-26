import React from 'react'

import { NavItem } from '../../../common/Nav'
import { getKey } from '../../../helpers'
import { StyledScrollableNavItem } from './partials/StyledScrollableNavItem'

export const MastheadNavItem: React.FC<NavItem> = ({ isActive, link }) => (
  <StyledScrollableNavItem
    $isActive={isActive}
    key={getKey('masthead-nav-item', link.toString())}
    data-testid="masthead-nav-item"
    role="none"
  >
    {React.cloneElement(link as React.ReactElement, {
      role: 'menuitem',
    })}
  </StyledScrollableNavItem>
)

MastheadNavItem.displayName = 'MastheadNavItem'
