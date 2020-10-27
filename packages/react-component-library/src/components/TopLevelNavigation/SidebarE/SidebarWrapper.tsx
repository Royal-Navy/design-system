import React from 'react'
import styled from 'styled-components'

import { ComponentWithClass } from '../../../common/ComponentWithClass'

const StyledSidebarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const SidebarWrapper: React.FC<ComponentWithClass> = ({
  className,
  children,
}) => {
  return (
    <StyledSidebarWrapper className={className}>
      {children}
    </StyledSidebarWrapper>
  )
}

SidebarWrapper.displayName = 'SidebarWrapper'
