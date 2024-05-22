import styled from 'styled-components'
import { color, fontSize } from '@royalnavy/design-tokens'

export const StyledLegend = styled.legend`
  float: left;
  padding: 0 0 14px;
  font-weight: 700;
  color: ${color('neutral', '600')};
  font-size: ${fontSize('m')};
`
