import React from 'react'

import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { StyledWrapper } from './partials/StyledWrapper'

export const SidebarWrapperE: React.FC<ComponentWithClass> = ({
  className,
  children,
}) => {
  return <StyledWrapper className={className}>{children}</StyledWrapper>
}

SidebarWrapperE.displayName = 'SidebarWrapper'
