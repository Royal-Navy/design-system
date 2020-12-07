import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { spacing } = selectors

export const StyledOptionEndAdornment = styled.span`
  position: absolute;
  right: ${spacing('4')};
  top: 50%;
  transform: translateY(-50%);
  height: ${spacing('7')};
`
