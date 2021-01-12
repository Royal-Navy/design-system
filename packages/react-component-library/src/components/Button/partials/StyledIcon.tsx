import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing } = selectors

export const StyledIcon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: ${spacing('3')};
`
