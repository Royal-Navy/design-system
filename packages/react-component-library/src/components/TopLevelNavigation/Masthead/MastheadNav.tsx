import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'

import { Nav, NavItem } from '../../../common/Nav'

export const MastheadNav: React.FC<Nav<NavItem>> = ({
  children,
  className,
}) => (
  <nav className={`rn-scrollable-nav ${className}`} data-testid="masthead-nav">
    <ScrollContainer className="rn-scrollable-nav__scroll-container">
      <ol
        className="rn-scrollable-nav__items"
        data-testid="masthead-nav-list"
        role="menubar"
      >
        {children}
      </ol>
    </ScrollContainer>
  </nav>
)

MastheadNav.displayName = 'MastheadNav'
