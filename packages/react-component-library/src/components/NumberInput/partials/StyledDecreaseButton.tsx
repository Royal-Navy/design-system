import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { StyledButton } from './StyledButton'

const { color } = selectors

export const StyledDecreaseButton = styled(StyledButton)`
  border-top: 1px solid ${color('neutral', '100')};

  &:focus {
    border-color: transparent;
  }

  ${({ $isCondensed }) =>
    $isCondensed &&
    css`
      width: 36px;

      & > svg {
        transform: scale(0.7);
      }
    `}
`
