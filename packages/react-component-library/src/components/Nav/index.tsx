import React from 'react'
import uuid from 'uuid'

import { Link } from '../index'
import NavItem from './NavItem'
import packageJson from '../../../package.json'

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
      {navItems.map(item => {
        const { active, children, label } = item

        const hasChildren: boolean = children && children.length > 0
        let subMenu: object | undefined

        if (hasChildren) {
          subMenu = renderMenu(LinkComponent, children)
        }

        return (
          <NavItem key={uuid()} hasChildren={hasChildren}>
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

const Nav: React.FC<NavProps> = ({
  className = '',
  LinkComponent = Link,
  navItems,
  orientation = 'vertical',
  size = 'regular',
}) => {
  console.warn(`Component \`Nav\` is deprecated in ${packageJson.name}`)

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

export default Nav
