import React from 'react'

import { Nav, NavItem } from '../../common/Nav'
import { StyledTabNav } from './partials/StyledTabNav'
import { StyledTabs } from '../TabBase/partials/StyledTabs'

export const TabNav: React.FC<Nav<NavItem>> = ({ children, ...rest }) => (
  <StyledTabNav {...rest}>
    <StyledTabs>{children}</StyledTabs>
  </StyledTabNav>
)
