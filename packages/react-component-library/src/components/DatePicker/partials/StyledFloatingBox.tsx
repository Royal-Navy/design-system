import styled, { css } from 'styled-components'
import { FloatingBox } from '../../../primitives'

export const StyledFloatingBox = styled<any>(FloatingBox)`
  pointer-events: none;
  opacity: 0;
  transition: opacity 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      pointer-events: all;
      opacity: 1;
    `}
`
