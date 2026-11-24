import { themeColor, fontSize } from '@royalnavy/design-tokens'
import { styled } from 'styled-components'

export const StyledDescription = styled.p`
  color: ${themeColor('neutral', '400')};
  font-size: ${fontSize('base')};
  font-weight: 400;
`
