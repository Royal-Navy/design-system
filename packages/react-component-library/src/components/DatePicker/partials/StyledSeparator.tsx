import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color } = selectors

export const StyledSeparator = styled.div`
  width: 1px;
  align-self: stretch;
  background: ${color('neutral', '200')};
`
