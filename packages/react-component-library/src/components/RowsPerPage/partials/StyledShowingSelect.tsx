import { styled } from 'styled-components'
import { themeColor, fontSize } from '@royalnavy/design-tokens'

export const StyledShowingText = styled.span`
  color: ${themeColor('neutral', '400')};
  font-size: ${fontSize('base')};
  white-space: nowrap;
`
