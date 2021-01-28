import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing } = selectors

export const StyledLegend = styled.legend`
  font-size: inherit;
  color: ${color('neutral', '400')};
  margin-bottom: ${spacing('4')};
`
