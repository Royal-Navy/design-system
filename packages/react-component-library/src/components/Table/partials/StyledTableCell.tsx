import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing, fontSize, color } = selectors

export const StyledTableCell = styled.td`
  padding: ${spacing('4')} ${spacing('4')};
  font-size: ${fontSize('s')};
  color: ${color('neutral', '500')};
`
