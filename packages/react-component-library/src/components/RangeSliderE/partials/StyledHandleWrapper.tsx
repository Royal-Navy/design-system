import styled from 'styled-components'

interface StyledHandleWrapperProps {
  $left?: string
}

export const StyledHandleWrapper = styled.div<StyledHandleWrapperProps>`
  position: absolute;
  left: ${({ $left }) => $left};
  z-index: 2;
`
