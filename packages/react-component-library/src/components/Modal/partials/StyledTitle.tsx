import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { color, fontSize } = selectors

export const StyledTitle = styled.span`
  display: inline-block;
  font-size: ${fontSize('l')};
  color: ${color('neutral', '500')};
`
