import styled from 'styled-components'
import { color, fontSize } from '@royalnavy/design-tokens'

export const StyledTitle = styled.span`
  grid-area: title;
  align-self: center;
  display: block;
  color: ${color('neutral', '600')};
  font-size: ${fontSize('l')};
  font-weight: 700;
`
