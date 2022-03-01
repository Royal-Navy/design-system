import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, spacing } = selectors

export const StyledLegend = styled.legend`
  font-size: inherit;
  color: ${color('neutral', '400')};
  margin: 0 0 ${spacing('3')} ${spacing('6')};
`
