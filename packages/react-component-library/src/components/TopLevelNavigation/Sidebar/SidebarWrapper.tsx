import React from 'react'

import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { StyledWrapper } from './partials/StyledWrapper'

export const SidebarWrapper = (props: ComponentWithClass) => {
  return <StyledWrapper data-testid="sidebar-wrapper" {...props} />
}

SidebarWrapper.displayName = 'SidebarWrapper'
