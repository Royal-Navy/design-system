import React from 'react'

import { NavItem } from '../../common/Nav'
import { StyledTabItem } from '../TabSet/partials/StyledTabItem'
import { StyledTab } from '../TabSet/partials/StyledTab'

export const TabNavItem: React.FC<NavItem> = ({ isActive, link }) => (
  <StyledTabItem data-testid="tab-nav-tab">
    <StyledTab $isActive={isActive} data-testid="tab-nav-tab-button">
      <div>{link}</div>
    </StyledTab>
  </StyledTabItem>
)
