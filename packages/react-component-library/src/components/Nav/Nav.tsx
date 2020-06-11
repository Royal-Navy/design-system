import React from 'react'
import { getKey } from '../../helpers'

import { Link } from '../Link'
import { NavItem } from './NavItem'

interface NavProps {
  className?: string
  LinkComponent?: any
  navItems: any[]
  orientation?: 'vertical' | 'horizontal'
  size?: 'small' | 'regular' | 'large' | 'xlarge'
}

function renderMenu(LinkComponent: any, navItems: any[]) {
  return (
    <ul className="rn-nav__list">
      {navItems.map((item) => {
        const { active, children, label } = item

        const hasChildren: boolean = children && children.length > 0
        let subMenu: React.ReactNode | undefined

        if (hasChildren) {
          subMenu = renderMenu(LinkComponent, children)
        }

        return (
          <NavItem key={getKey('nav-item', label)} hasChildren={hasChildren}>
            <LinkComponent
              className={`rn-nav__item ${active ? 'is-active' : ''}`}
              {...item}
            >
              {label}
            </LinkComponent>
            {subMenu}
          </NavItem>
        )
      })}
    </ul>
  )
}

export const Nav: React.FC<NavProps> = ({
  className = '',
  LinkComponent = Link,
  navItems,
  orientation = 'vertical',
  size = 'regular',
}) => {
  console.warn(`Component \`Nav\` is deprecated`)

  return (
    <nav
      className={`rn-nav rn-nav--${orientation} rn-nav--${size} ${className}`}
      data-testid="nav"
    >
      {renderMenu(LinkComponent, navItems)}
    </nav>
  )
}

Nav.displayName = 'Nav'
