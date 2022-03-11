import React from 'react'

import { Nav, NavItem } from '../../common/Nav'
import { StyledTabNav } from './partials/StyledTabNav'
import { StyledTabs } from '../TabSet/partials/StyledTabs'

export const TabNav: React.FC<Nav<NavItem>> = ({ children, className }) => (
  <StyledTabNav className={className}>
    <StyledTabs>{children}</StyledTabs>
  </StyledTabNav>
)
