import { styled } from 'styled-components'
import { themeColor, fontSize, spacing } from '@royalnavy/design-tokens'

export const StyledTime = styled.span`
  color: ${themeColor('neutral', '400')};
  font-style: italic;
  font-size: ${fontSize('base')};
  padding-top: ${spacing('2')};
`
