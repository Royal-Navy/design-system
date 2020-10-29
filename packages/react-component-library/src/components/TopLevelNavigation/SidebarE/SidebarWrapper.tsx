import React from 'react'
import styled from 'styled-components'

import { ComponentWithClass } from '../../../common/ComponentWithClass'

const StyledSidebarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const SidebarWrapperE: React.FC<ComponentWithClass> = ({
  className,
  children,
}) => {
  return (
    <StyledSidebarWrapper className={className}>
      {children}
    </StyledSidebarWrapper>
  )
}

SidebarWrapperE.displayName = 'SidebarWrapper'
