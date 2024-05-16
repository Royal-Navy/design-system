import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing } = selectors

export const StyledCaption = styled.caption`
  padding: ${spacing('8')} ${spacing('4')};
  text-align: left;
`
