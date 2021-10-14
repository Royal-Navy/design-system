import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color } = selectors

export const StyledTableRow = styled.tr`
  border-bottom: 1px solid ${color('neutral', '100')};

  &:last-child {
    border-bottom: none;
  }
`
