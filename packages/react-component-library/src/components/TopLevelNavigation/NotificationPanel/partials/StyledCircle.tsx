import styled from 'styled-components'
import { color } from '@royalnavy/design-tokens'

export const StyledCircle = styled.span`
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background: ${color('neutral', '300')};
  margin: 0 4px 2px 4px;
`
