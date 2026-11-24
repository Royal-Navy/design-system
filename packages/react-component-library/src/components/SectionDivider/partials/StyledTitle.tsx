import { styled } from 'styled-components'
import { themeColor, fontSize } from '@royalnavy/design-tokens'

export const StyledTitle = styled.span`
  grid-area: title;
  align-self: center;
  display: block;
  color: ${themeColor('neutral', '600')};
  font-size: ${fontSize('l')};
  font-weight: 700;
`
