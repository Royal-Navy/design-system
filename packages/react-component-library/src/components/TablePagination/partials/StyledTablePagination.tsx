import { styled } from 'styled-components'
import { color, fontSize, spacing } from '@royalnavy/design-tokens'

export const StyledTablePagination = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing('10')};
  color: ${color('neutral', '400')};
  font-size: ${fontSize('base')};
  white-space: nowrap;
`
