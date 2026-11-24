import { styled } from 'styled-components'
import { themeColor, fontSize } from '@royalnavy/design-tokens'

export const StyledLegend = styled.legend`
  float: left;
  padding: 0 0 14px;
  font-weight: 700;
  color: ${themeColor('neutral', '600')};
  font-size: ${fontSize('m')};
`
