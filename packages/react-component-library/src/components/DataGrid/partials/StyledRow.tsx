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
        background-color: ${color('action', '200')};
        cursor: pointer;
      }
    `}

  ${({ $hasFocus }) =>
    $hasFocus &&
    css`
      background-color: ${color('action', '100')};
    `}
`
