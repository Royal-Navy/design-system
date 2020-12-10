import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { fontSize } = selectors

export const StyledOptionLabel = styled.span`
  font-size: ${fontSize('base')};
  font-weight: 500;
`
