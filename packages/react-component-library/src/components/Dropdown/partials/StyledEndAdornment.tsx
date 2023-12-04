import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing } = selectors

export const StyledEndAdornment = styled.span`
  position: absolute;
  top: ${spacing('px')};
  right: 0;
`
