import styled from 'styled-components'
import { color, spacing } from '@royalnavy/design-tokens'

export const StyledToolbarSeparator = styled.div`
  display: inline-block;
  height: 25px;
  width: ${spacing('px')};
  background-color: ${color('neutral', '100')};
`
