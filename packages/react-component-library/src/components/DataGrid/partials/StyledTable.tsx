import styled, { css } from 'styled-components'
import { spacing } from '@royalnavy/design-tokens'

interface StyledTableProps {
  $hasRowSelection?: boolean
  $isFullWidth?: boolean
  $hasSubRows?: boolean
}

export const StyledTable = styled.table<StyledTableProps>`
  table-layout: fixed;
  width: ${({ $isFullWidth }) => ($isFullWidth ? '100%' : 'auto')};
  border-spacing: 0;

  ${({ $hasRowSelection }) =>
    $hasRowSelection &&
    css`
      th:first-child,
      td:first-child {
        width: calc(22px + 1.75rem);

        > * {
          margin-top: -2px;
        }
      }
    `};

  ${({ $hasRowSelection, $hasSubRows }) =>
    $hasRowSelection &&
    $hasSubRows &&
    css`
      &&& th:first-child,
      td:first-child {
        width: ${spacing('15')};
      }
    `}

  ${({ $hasRowSelection, $hasSubRows }) =>
    !$hasRowSelection &&
    $hasSubRows &&
    css`
      &&& th:first-child,
      td:first-child {
        width: 3rem;
      }
    `}
`
