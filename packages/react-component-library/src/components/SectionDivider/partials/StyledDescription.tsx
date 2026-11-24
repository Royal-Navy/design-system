import { styled } from 'styled-components'
import { themeColor, fontSize } from '@royalnavy/design-tokens'

export const StyledDescription = styled.p`
  grid-area: description;
  color: ${themeColor('neutral', '400')};
  font-size: ${fontSize('m')};
`
