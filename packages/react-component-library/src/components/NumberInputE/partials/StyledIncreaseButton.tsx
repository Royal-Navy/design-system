import styled, { css } from 'styled-components'

import { StyledButton } from './StyledButton'
import { StyledDecreaseButton } from './StyledDecreaseButton'

export const StyledIncreaseButton = styled(StyledButton)`
  & > svg {
    transform: rotate(180deg);
  }

  ${({ $isCondensed }) =>
    $isCondensed &&
    css`
      width: 36px;

      & > svg {
        transform: rotate(180deg) scale(0.7);
      }
    `}

  &:focus + ${StyledDecreaseButton} {
    border-color: transparent;
  }
`
