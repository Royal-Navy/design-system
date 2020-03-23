import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { NavItem } from '../../types/Nav'

export const ScrollableNavItem: React.FC<NavItem> = ({ isActive, link }) => (
  <li
    key={uuidv4()}
    className={`rn-scrollable-nav__item ${isActive ? 'is-active' : ''}`}
    data-testid={isActive ? 'tab-active' : 'tab'}
  >
    {link}
  </li>
)

ScrollableNavItem.displayName = 'ScrollableNavItem'
