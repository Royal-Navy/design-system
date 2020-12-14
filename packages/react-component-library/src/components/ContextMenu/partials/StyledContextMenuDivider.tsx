import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing } = selectors

export const StyledContextMenuDivider = styled.div`
  height: 1px;
  background-color: ${color('neutral', '100')};
  margin: ${spacing('2')} -${spacing('2')};
`
