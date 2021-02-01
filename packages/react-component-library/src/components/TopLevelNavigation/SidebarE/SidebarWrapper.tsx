import React from 'react'

import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { StyledWrapper } from './partials/StyledWrapper'

export const SidebarWrapperE: React.FC<ComponentWithClass> = (props) => {
  return <StyledWrapper data-testid="sidebar-wrapper" {...props} />
}

SidebarWrapperE.displayName = 'SidebarWrapper'
