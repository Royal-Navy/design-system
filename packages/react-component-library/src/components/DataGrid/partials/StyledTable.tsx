import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

interface StyledTableProps {
  $hasRowSelection?: boolean
  $isFullWidth?: boolean
}

const { spacing } = selectors

export const StyledTable = styled.table<StyledTableProps>`
  table-layout: fixed;
  width: ${({ $isFullWidth }) => ($isFullWidth ? '100%' : 'auto')};
  border-collapse: collapse;

  ${({ $hasRowSelection }) =>
    $hasRowSelection &&
    `
    th:first-child, td:first-child {
      width: calc(22px + ${spacing('6')}) !important;

      > * {
        margin-top: -2px;
      }
    }
  `}
`
