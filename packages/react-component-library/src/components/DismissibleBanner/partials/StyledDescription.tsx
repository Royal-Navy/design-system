import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { color, fontSize } = selectors

export const StyledDescription = styled.p`
  color: ${color('neutral', '400')};
  font-size: ${fontSize('base')};
  font-weight: 400;
`
