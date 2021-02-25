import styled  from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing } = selectors

export const StyledToolbarSeparator = styled.div`
  display: inline-block;
  height: 25px;
  width: ${spacing('px')};
  background-color: ${color('neutral', '100')};
`
