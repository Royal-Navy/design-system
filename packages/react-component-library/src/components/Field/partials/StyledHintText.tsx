import styled from 'styled-components'
import { color, fontSize } from '@royalnavy/design-tokens'

export const StyledHintText = styled.span`
  display: inline-block;
  font-size: ${fontSize('s')};
  color: ${color('neutral', '400')};
  margin: 6px 0 0 12px;
`
