import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing, color } = selectors

export const StyledTabNav = styled.nav`
  padding-left: ${spacing('6')};
  padding-right: ${spacing('6')};
  background: ${color('neutral', 'white')};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid ${color('neutral', '100')};
`
