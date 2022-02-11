import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color } = selectors

export const StyledLegend = styled.legend`
  float: left;
  padding: 0 0 14px;
  font-weight: 700;
  color: ${color('neutral', '600')};
  font-size: 16px;
`
