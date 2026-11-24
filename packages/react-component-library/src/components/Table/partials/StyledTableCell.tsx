import { styled } from 'styled-components'
import { themeColor, fontSize, spacing } from '@royalnavy/design-tokens'

export const StyledTableCell = styled.td`
  padding: ${spacing('4')} ${spacing('4')};
  font-size: ${fontSize('s')};
  color: ${themeColor('neutral', '500')};
`
