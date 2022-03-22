import React from 'react'

import { NavItem } from '../../common/Nav'
import { StyledTabItem } from '../TabBase/partials/StyledTabItem'
import { StyledTab } from '../TabBase/partials/StyledTab'

export const TabNavItem: React.FC<NavItem> = ({ isActive, link, ...rest }) => (
  <StyledTabItem data-testid="tab-nav-tab" {...rest}>
    <StyledTab $isActive={isActive} data-testid="tab-nav-tab-button">
      <div>{link}</div>
    </StyledTab>
  </StyledTabItem>
)
