import { styled } from 'styled-components'
import { themeColor, fontSize } from '@royalnavy/design-tokens'

export const StyledEventTitle = styled.span`
  font-size: ${fontSize('s')};
  font-weight: 400;
  color: ${themeColor('neutral', '600')};
  white-space: nowrap;
`
