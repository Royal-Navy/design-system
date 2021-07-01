import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { zIndex } = selectors

export const StyledFloatingBox = styled.div`
  z-index: ${zIndex('dropdown', 1)};
  padding: 0.5rem;
`
