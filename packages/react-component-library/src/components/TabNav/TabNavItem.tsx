import React from 'react'

import { NavItem } from '../../common/Nav'
import { StyledTabItem } from '../TabBase/partials/StyledTabItem'
import { StyledTabNavTab } from './partials/StyledTabNavTab'

export const TabNavItem: React.FC<NavItem> = ({ isActive, link, ...rest }) => (
  <StyledTabItem data-testid="tab-nav-tab" {...rest}>
    <StyledTabNavTab
      as="div"
      $isActive={isActive}
      data-testid="tab-nav-tab-button"
    >
      {link}
    </StyledTabNavTab>
  </StyledTabItem>
)
