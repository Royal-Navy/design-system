import styled, { css } from 'styled-components'
import { fontSize, spacing } from '@royalnavy/design-tokens'

interface StyledTableColumnProps {
  $isSortable?: boolean
}

export const StyledTableColumn = styled.th<StyledTableColumnProps>`
  padding: ${spacing('8')} ${spacing('4')};
  text-align: left;
  font-size: ${fontSize('s')};
  font-weight: 600;
  text-transform: uppercase;

  ${({ $isSortable }) =>
    $isSortable &&
    css`
      cursor: pointer;
    `}

  & svg {
    position: relative;
    top: 2px;
    left: ${spacing('2')};
    width: ${spacing('6')};
    height: ${spacing('6')};
  }
`
