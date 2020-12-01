import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing, color } = selectors

export const StyledNav = styled.nav`
  height: 100%;
  padding: ${spacing('1')} ${spacing('6')};
  color: ${color('neutral', 'white')};
`
