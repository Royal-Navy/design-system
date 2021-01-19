import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize, spacing } = selectors

export const StyledToastTime = styled.span`
  color: ${color('neutral', '400')};
  font-style: italic;
  font-size: ${fontSize('base')};
  padding-top: ${spacing('2')};
`
