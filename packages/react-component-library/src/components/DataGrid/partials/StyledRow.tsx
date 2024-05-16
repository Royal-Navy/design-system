import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

interface StyledRowProps {
  $hasHover?: boolean
  $hasFocus?: boolean
}

const { color } = selectors

export const StyledRow = styled.tr<StyledRowProps>`
  &:last-child {
    border-bottom: none;

    td {
      border-bottom: unset;
    }
  }

  ${({ $hasHover }) =>
    $hasHover &&
    css`
      &:hover {
        background-color: ${color('neutral', '100')};
        cursor: pointer;
      }
    `}

  ${({ $hasFocus }) =>
    $hasFocus &&
    css`
      background-color: ${color('neutral', '100')};
    `}
`
