import styled from 'styled-components'
import { color } from '@royalnavy/design-tokens'

export const StyledTableRow = styled.tr`
  border-bottom: 1px solid ${color('neutral', '100')};

  &:last-child {
    border-bottom: none;
  }
`
