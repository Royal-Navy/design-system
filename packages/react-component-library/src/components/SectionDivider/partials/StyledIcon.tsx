import styled from 'styled-components'
import { color } from '@royalnavy/design-tokens'

export const StyledIcon = styled.span`
  grid-area: icon;
  display: flex;
  align-items: center;
  align-self: center;
  margin-right: 8px;
  color: ${color('neutral', '600')};
`
