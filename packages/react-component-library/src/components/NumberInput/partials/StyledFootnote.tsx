import { styled } from 'styled-components'
import { themeColor, fontSize } from '@royalnavy/design-tokens'

export const StyledFootnote = styled.small`
  margin: 6px 12px;
  color: ${themeColor('neutral', '400')};
  font-size: ${fontSize('s')};
`
