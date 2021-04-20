import React from 'react'
import { getKey } from '../../helpers'

import { Link } from '../Link'
import { NavItem } from './NavItem'
import logger from '../../utils/logger'
import { ComponentWithClass } from '../../common/ComponentWithClass'

interface NavProps extends ComponentWithClass {
  /**
   * Link component to use for each navigation item (custom implementation welcome).
   */
  LinkComponent?: any
  /**
   * Collection of navigation items to display in the list (JSON).
   */
  navItems: any[]
  /**
   * Orientation of the component.
   */
  orientation?: 'vertical' | 'horizontal'
  /**
   * Size of the component.
   */
  size?: 'small' | 'regular' | 'large' | 'xlarge'
}

function renderMenu(LinkComponent: any, navItems: any[]) {
  return (
    <ul className="rn-nav__list">
      {navItems.map((item) => {
        const { active, children, label, ...rest } = item

        const hasChildren: boolean = children && children.length > 0
        let subMenu: React.ReactNode | undefined

        if (hasChildren) {
          subMenu = renderMenu(LinkComponent, children)
        }

        return (
          <NavItem key={getKey('nav-item', label)} hasChildren={hasChildren}>
            <LinkComponent
              className={`rn-nav__item ${active ? 'is-active' : ''}`}
              {...rest}
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
  logger.warn(`Component \`Nav\` is deprecated`)

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
