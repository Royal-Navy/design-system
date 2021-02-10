import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing } = selectors

export const StyledToolbar = styled.div`
  display: flex;
  align-items: center;
  border-bottom: ${spacing('px')} solid ${color('neutral', '100')};
`
