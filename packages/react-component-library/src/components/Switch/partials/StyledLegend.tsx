import { styled } from 'styled-components'
import { themeColor, spacing } from '@royalnavy/design-tokens'

export const StyledLegend = styled.legend`
  font-size: inherit;
  color: ${themeColor('neutral', '400')};
  margin: 0 0 ${spacing('3')} ${spacing('6')};
`
