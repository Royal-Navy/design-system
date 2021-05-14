import styled, { css } from 'styled-components'

import { FloatingBox } from '../../../primitives'

interface StyledFloatingBoxProps {
  $isVisible: boolean
}

export const StyledFloatingBox = styled(FloatingBox)<StyledFloatingBoxProps>`
  opacity: 0;
  transition: linear opacity 0.3s;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
    `}
`
