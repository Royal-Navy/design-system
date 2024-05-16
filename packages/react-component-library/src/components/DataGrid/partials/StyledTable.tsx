import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

interface StyledTableProps {
  $hasRowSelection?: boolean
  $isFullWidth?: boolean
}

const { color } = selectors

export const StyledTable = styled.table<StyledTableProps>`
  table-layout: fixed;
  width: ${({ $isFullWidth }) => ($isFullWidth ? '100%' : 'auto')};
  border-collapse: seperate;
  border-spacing: 0;
  border-radius: 4px;
  border: 1px solid ${color('neutral', '200')};

  ${({ $hasRowSelection }) =>
    $hasRowSelection &&
    `
    th:first-child, td:first-child {
      width: calc(22px + 1.75rem) !important;

      > * {
        margin-top: -2px;
      }
    }
  `};
`
