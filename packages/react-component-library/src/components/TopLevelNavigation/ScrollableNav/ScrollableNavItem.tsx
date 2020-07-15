import React from 'react'
import { getKey } from '../../../helpers'
import { NavItem } from '../../../types/Nav'

export const ScrollableNavItem: React.FC<NavItem> = ({ isActive, link }) => (
  <li
    key={getKey('scrollable-nav-item', link.toString())}
    className={`rn-scrollable-nav__item ${isActive ? 'is-active' : ''}`}
    data-testid={isActive ? 'tab-active' : 'tab'}
  >
    {link}
  </li>
)

ScrollableNavItem.displayName = 'ScrollableNavItem'
