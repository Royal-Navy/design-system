import styled, { css } from 'styled-components'
import { color } from '@royalnavy/design-tokens'

interface StyledRowProps {
  $hasHover?: boolean
  $hasFocus?: boolean
  $depth?: number
  $isLastInBranch?: boolean
}

export const StyledRow = styled.tr<StyledRowProps>`
  position: relative;

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

  ${({ $depth, $isLastInBranch }) =>
    css`
      ${$depth &&
      $depth > 0 &&
      `box-shadow: inset 4px 0 0 0 ${color('neutral', '200')};`}

      ${$isLastInBranch &&
      `box-shadow:
        inset 0 -2px 0 0 ${color('neutral', '200')},
        inset 4px 0 0 0 ${color('neutral', '200')};`}
    `}
`
