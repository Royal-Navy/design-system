import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { fontSize, spacing } = selectors

export const StyledTooltip = styled.span`
  display: inline-flex;
  font-size: ${fontSize('base')};
  padding: ${spacing('6')} ${spacing('8')};
`
