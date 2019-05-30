import React from 'react'
import uuid from 'uuid'

import NavItem from './NavItem'

interface NavProps {
  className?: string
  navItems: any[]
  orientation?: 'vertical' | 'horizontal'
  size?: 'small' | 'regular' | 'large' | 'xlarge'
}

function renderMenu(navItems: any[]) {
  return (
    <ul className="rn-nav__list">
      {navItems.map(item => {
        let subMenu

        if (item.children && item.children.length > 0) {
          subMenu = renderMenu(item.children)
        }

        return (
          <li key={uuid()} className="rn-nav__list-item">
            <NavItem key={uuid()} {...item} />
            {subMenu}
          </li>
        )
      })}
    </ul>
  )
}

const Nav: React.FC<NavProps> = ({
  className = '',
  navItems,
  orientation = 'vertical',
  size = 'regular',
}) => (
  <nav className={`rn-nav rn-nav--${orientation} rn-nav--${size} ${className}`}>
    {renderMenu(navItems)}
  </nav>
)

export default Nav
