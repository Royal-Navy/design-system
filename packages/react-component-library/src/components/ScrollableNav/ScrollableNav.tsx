import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'

import { ScrollableNavItemProps } from './ScrollableNavItem'

export interface ScrollableNavProps extends ComponentWithClass {
  children:
    | React.ReactElement<ScrollableNavItemProps>
    | React.ReactElement<ScrollableNavItemProps>[]
}

export const ScrollableNav: React.FC<ScrollableNavProps> = ({
  children,
  className,
}) => (
  <nav
    className={`rn-scrollable-nav ${className}`}
    data-testid="scrollable-nav"
  >
    <ScrollContainer className="rn-scrollable-nav__scroll-container">
      <ol className="rn-scrollable-nav__items">{children}</ol>
    </ScrollContainer>
  </nav>
)

ScrollableNav.displayName = 'ScrollableNav'
