import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize, spacing } = selectors

export const StyledToastDescription = styled.span`
  color: ${color('neutral', '400')};
  font-size: ${fontSize('base')};
  padding-top: ${spacing('4')};
`
