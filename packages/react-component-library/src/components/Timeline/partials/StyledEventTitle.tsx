import styled from 'styled-components'
import { color, fontSize } from '@royalnavy/design-tokens'

export const StyledEventTitle = styled.span`
  font-size: ${fontSize('s')};
  font-weight: 400;
  color: ${color('neutral', '600')};
  white-space: nowrap;
`
