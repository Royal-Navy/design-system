import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, spacing } = selectors

export const StyledSeparator = styled.div`
  width: 1px;
  height: 100%;
  margin-right: ${spacing('8')};
  background: ${color('neutral', '100')};
`
