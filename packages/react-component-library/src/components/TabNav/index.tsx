import React from 'react'

import Link from '../Link'
import TabNavItem from './TabNavItem'

interface TabNavProps {
  className?: string
  LinkComponent?: any
  navItems: NavItemTypes[]
}

const TabNav: React.FC<TabNavProps> = ({
  className = '',
  LinkComponent = Link,
  navItems,
}) => (
  <nav className={`rn-tab-nav ${className}`}>
    <ol className="rn-tab-nav__tabs">
      {navItems.map(navItem => TabNavItem({ LinkComponent, navItem }))}
    </ol>
  </nav>
)

export default TabNav
