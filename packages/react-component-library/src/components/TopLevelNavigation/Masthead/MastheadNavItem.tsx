import React from 'react'

import { NavItem } from '../../../common/Nav'
import { getKey } from '../../../helpers'

export const MastheadNavItem: React.FC<NavItem> = ({ isActive, link }) => (
  <li
    key={getKey('masthead-nav-item', link.toString())}
    className={`rn-scrollable-nav__item ${isActive ? 'is-active' : ''}`}
    data-testid="masthead-nav-item"
    role="none"
  >
    {React.cloneElement(link as React.ReactElement, {
      role: 'menuitem',
    })}
  </li>
)

MastheadNavItem.displayName = 'MastheadNavItem'
