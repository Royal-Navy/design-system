import styled from 'styled-components'
import { fontSize, spacing } from '@royalnavy/design-tokens'

export const StyledTooltip = styled.span`
  display: inline-flex;
  font-size: ${fontSize('base')};
  padding: ${spacing('6')} ${spacing('8')};
`
