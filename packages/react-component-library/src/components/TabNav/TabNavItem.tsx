import React from 'react'

import { NavItem } from '../../common/Nav'
import { StyledTabItem } from '../TabBase/partials/StyledTabItem'
import { StyledTabNavTab } from './partials/StyledTabNavTab'

export const TabNavItem: React.FC<NavItem> = ({ isActive, link }) => (
  <StyledTabItem data-testid="tab-nav-tab">
    <StyledTabNavTab
      as="div"
      $isActive={isActive}
      data-testid="tab-nav-tab-button"
    >
      {link}
    </StyledTabNavTab>
  </StyledTabItem>
)
