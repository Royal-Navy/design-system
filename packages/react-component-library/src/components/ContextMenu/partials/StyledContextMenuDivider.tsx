import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, spacing } = selectors

export const StyledContextMenuDivider = styled.li`
  height: 1px;
  background-color: ${color('neutral', '100')};
  margin: ${spacing('2')} -${spacing('2')};
`
