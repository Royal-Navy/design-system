import styled from 'styled-components'
import { color, fontSize, spacing } from '@royalnavy/design-tokens'

export const StyledTime = styled.span`
  color: ${color('neutral', '400')};
  font-style: italic;
  font-size: ${fontSize('base')};
  padding-top: ${spacing('2')};
`
