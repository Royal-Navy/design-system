import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing } = selectors

export const StyledDescription = styled.p`
  color: ${color('neutral', '400')};
  padding-top: ${spacing('4')};
`
