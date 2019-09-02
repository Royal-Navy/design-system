import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'

import { Link } from '..'
import { ScrollableNavItem } from './ScrollableNavItem'

interface ScrollableNavProps {
  className?: string
  LinkComponent?: any
  navItems: NavItemTypes[]
}

export const ScrollableNav: React.FC<ScrollableNavProps> = ({
  className = '',
  LinkComponent = Link,
  navItems,
}) => (
  <nav
    className={`rn-scrollable-nav ${className}`}
    data-testid="scrollable-nav"
  >
    <ScrollContainer className="rn-scrollable-nav__scroll-container">
      <ol className="rn-scrollable-nav__items">
        {navItems.map(navItem => ScrollableNavItem({ LinkComponent, navItem }))}
      </ol>
    </ScrollContainer>
  </nav>
)

ScrollableNav.displayName = 'ScrollableNav'
