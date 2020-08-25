import React from 'react'

import { Nav, NavItem } from '../../common/Nav'

export const TabNav: React.FC<Nav<NavItem>> = ({ children, className }) => (
  <nav className={`rn-tab-nav ${className}`}>
    <ol className="rn-tab-nav__tabs">{children}</ol>
  </nav>
)
