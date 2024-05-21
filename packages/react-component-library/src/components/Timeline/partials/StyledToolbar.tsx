import styled from 'styled-components'
import { color, spacing } from '@royalnavy/design-tokens'

export const StyledToolbar = styled.div`
  display: flex;
  align-items: center;
  border-bottom: ${spacing('px')} solid ${color('neutral', '100')};
  background-color: ${color('neutral', 'white')};
`
