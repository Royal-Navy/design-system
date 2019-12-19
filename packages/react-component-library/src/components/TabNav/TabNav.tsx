import React from 'react'

import { TabNavItemProps } from './TabNavItem'

interface TabNavProps extends ComponentWithClass {
  children: React.ReactElement<TabNavItemProps> | React.ReactElement<TabNavItemProps>[]
  className?: string
}

export const TabNav: React.FC<TabNavProps> = ({ children, className }) => (
  <nav className={`rn-tab-nav ${className}`}>
    <ol className="rn-tab-nav__tabs">{children}</ol>
  </nav>
)
