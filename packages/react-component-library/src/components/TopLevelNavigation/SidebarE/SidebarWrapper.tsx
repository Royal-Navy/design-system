import React from 'react'
import styled from 'styled-components'

const StyledSidebarWrapper = styled.div``

export const SidebarWrapper: React.FC = ({ children }) => {
  return <StyledSidebarWrapper>{children}</StyledSidebarWrapper>
}

SidebarWrapper.displayName = 'SidebarWrapper'
