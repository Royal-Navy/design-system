import { styled } from 'styled-components'
import { themeColor, fontSize, spacing } from '@royalnavy/design-tokens'

export const StyledTablePagination = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing('10')};
  color: ${themeColor('neutral', '400')};
  font-size: ${fontSize('base')};
  white-space: nowrap;
`
