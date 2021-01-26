import React from 'react'

import { Nav, NavItem } from '../../../common/Nav'
import { StyledScrollableNavItems } from './partials/StyledScrollableNavItems'
import { StyledScrollableNav } from './partials/StyledScrollableNav'

export const MastheadNav: React.FC<Nav<NavItem>> = ({ children, ...rest }) => (
  <StyledScrollableNav data-testid="masthead-nav" {...rest}>
    <StyledScrollableNavItems data-testid="masthead-nav-list" role="menubar">
      {children}
    </StyledScrollableNavItems>
  </StyledScrollableNav>
)

MastheadNav.displayName = 'MastheadNav'
