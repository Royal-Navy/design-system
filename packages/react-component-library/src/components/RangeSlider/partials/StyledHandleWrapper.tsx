import styled, { css } from 'styled-components'

interface StyledHandleWrapperProps {
  $left?: string
  $hasFocus?: boolean
}

export const StyledHandleWrapper = styled.div<StyledHandleWrapperProps>`
  position: absolute;
  left: ${({ $left }) => $left};
  z-index: 1;

  ${({ $hasFocus }) =>
    $hasFocus &&
    css`
      z-index: 2;
    `}
`
