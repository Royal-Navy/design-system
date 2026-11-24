import { themeColor, fontSize } from '@royalnavy/design-tokens'
import { styled } from 'styled-components'

export const StyledTitle = styled.span`
  display: inline-block;
  font-size: ${fontSize('l')};
  color: ${themeColor('neutral', '500')};
`
