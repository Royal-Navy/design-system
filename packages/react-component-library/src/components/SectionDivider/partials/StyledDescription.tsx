import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize } = selectors

export const StyledDescription = styled.p`
  color: ${color('neutral', '400')};
  font-size: ${fontSize('m')};
`
