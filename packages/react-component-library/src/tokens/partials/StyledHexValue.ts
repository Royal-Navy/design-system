import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { spacing } = selectors

export const StyledHexValue = styled.div`
  min-width: ${spacing('15')};
  font-family: Menlo, Consolas, 'Liberation Mono', monospace !important;
`
