import styled from 'styled-components'
import { color, fontSize } from '@royalnavy/design-tokens'

export const StyledDescription = styled.p`
  grid-area: description;
  color: ${color('neutral', '400')};
  font-size: ${fontSize('m')};
`
