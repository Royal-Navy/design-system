import { styled } from 'styled-components'
import { themeColor } from '@royalnavy/design-tokens'

export const StyledTableRow = styled.tr`
  border-bottom: 1px solid ${themeColor('neutral', '100')};

  &:last-child {
    border-bottom: none;
  }
`
