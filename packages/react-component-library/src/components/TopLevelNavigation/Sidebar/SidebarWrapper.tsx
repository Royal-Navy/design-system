import React from 'react'

import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { StyledWrapper } from './partials'
import { SidebarProvider } from './context'

export const SidebarWrapper = (props: ComponentWithClass) => {
  return (
    <SidebarProvider>
      <StyledWrapper data-testid="sidebar-wrapper" {...props} />
    </SidebarProvider>
  )
}

SidebarWrapper.displayName = 'SidebarWrapper'
