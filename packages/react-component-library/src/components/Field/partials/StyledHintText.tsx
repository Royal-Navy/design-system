import { styled } from 'styled-components'
import { themeColor, fontSize } from '@royalnavy/design-tokens'

export const StyledHintText = styled.span`
  display: inline-block;
  font-size: ${fontSize('s')};
  color: ${themeColor('neutral', '400')};
  margin: 6px 0 0 12px;
`
