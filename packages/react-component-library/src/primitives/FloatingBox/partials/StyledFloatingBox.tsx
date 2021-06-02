import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { zIndex } = selectors

interface StyledFloatingBoxProps {
  $isVisible?: boolean
}

export const StyledFloatingBox = styled.div<StyledFloatingBoxProps>`
  z-index: ${zIndex('dropdown', 1)};
  padding: 0.5rem;

  opacity: 0;
  pointer-events: none;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`
