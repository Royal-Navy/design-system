import React from 'react'
import uuid from 'uuid'

import NavItem from './NavItem'

interface NavProps {
  className?: string
  navItems: any[]
  orientation?: 'vertical' | 'horizontal'
  size?: 'small' | 'regular' | 'large' | 'xlarge'
}

const Nav: React.FC<NavProps> = ({
  className = '',
  navItems,
  orientation = 'vertical',
  size = 'regular',
}) => (
  <nav className={`rn-nav rn-nav--${orientation} rn-nav--${size} ${className}`}>
    {navItems.map(item => (
      <NavItem key={uuid()} {...item} />
    ))}
  </nav>
)

export default Nav
