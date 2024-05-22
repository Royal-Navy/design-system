import { color, spacing } from '@royalnavy/design-tokens'
import styled from 'styled-components'

export const StyledList = styled.ol`
  border: ${spacing('px')} solid ${color('neutral', '100')};
  border-radius: 4px;
  list-style-type: none;
  margin: 0;
  padding: 0;
`
