import { themeColor, fontSize } from '@royalnavy/design-tokens'
import { styled } from 'styled-components'

export const StyledDescription = styled.span`
  color: ${themeColor('neutral', '400')};
  font-size: ${fontSize('s')};
  line-height: 1.4;
`
