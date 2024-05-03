import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { spacing } = selectors

export const StyledWeight = styled.div`
  font-family: Menlo, Consolas, 'Liberation Mono', monospace !important;
  min-width: ${spacing('13')};
`
