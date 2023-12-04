import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing } = selectors

export const StyledTotalPages = styled.span`
  padding-left: ${spacing('3')};
  color: ${color('neutral', '400')};
`
