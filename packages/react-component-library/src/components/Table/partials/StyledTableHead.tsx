import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color } = selectors

export const StyledTableHead = styled.thead`
  border-bottom: 2px solid ${color('neutral', '100')};
`
