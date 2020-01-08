import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'

import { Nav } from '../../types/Nav'

export const ScrollableNav: React.FC<Nav> = ({
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
