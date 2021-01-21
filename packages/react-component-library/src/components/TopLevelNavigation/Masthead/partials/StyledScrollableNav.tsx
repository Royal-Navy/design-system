import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { color } = selectors

export const StyledScrollableNav = styled.nav`
  background: ${color('neutral', 'white')};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid ${color('neutral', '100')};
`
