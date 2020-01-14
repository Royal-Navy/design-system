import React from 'react'

import { Nav } from '../../types/Nav'

export const TabNav: React.FC<Nav> = ({ children, className }) => (
  <nav className={`rn-tab-nav ${className}`}>
    <ol className="rn-tab-nav__tabs">{children}</ol>
  </nav>
)
