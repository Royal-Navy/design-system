import React from 'react'

import { Nav, NavItem } from '../../common/Nav'
import { StyledTabNav } from './partials/StyledTabNav'
import { StyledList } from './partials/StyledList'

export const TabNav: React.FC<Nav<NavItem>> = ({ children, className }) => (
  <StyledTabNav className={className}>
    <StyledList>{children}</StyledList>
  </StyledTabNav>
)
