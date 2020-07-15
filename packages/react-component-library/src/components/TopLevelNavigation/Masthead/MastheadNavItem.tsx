import React from 'react'

import { NavItem } from '../../../types/Nav'
import { getKey } from '../../../helpers'

export const MastheadNavItem: React.FC<NavItem> = ({ isActive, link }) => (
  <li
    key={getKey('masthead-nav-item', link.toString())}
    className={`rn-scrollable-nav__item ${isActive ? 'is-active' : ''}`}
    data-testid={isActive ? 'tab-active' : 'tab'}
  >
    {link}
  </li>
)

MastheadNavItem.displayName = 'MastheadNavItem'
