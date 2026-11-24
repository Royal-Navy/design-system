import { styled } from 'styled-components'
import { themeColor, fontSize, spacing } from '@royalnavy/design-tokens'

export const StyledDescription = styled.span`
  color: ${themeColor('neutral', '400')};
  font-size: ${fontSize('base')};
  padding-top: ${spacing('4')};
`
