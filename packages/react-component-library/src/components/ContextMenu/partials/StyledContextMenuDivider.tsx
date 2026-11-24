import { styled } from 'styled-components'
import { themeColor, spacing } from '@royalnavy/design-tokens'

export const StyledContextMenuDivider = styled.li`
  height: 1px;
  background-color: ${themeColor('neutral', '100')};
  margin: ${spacing('2')} -${spacing('2')};
`
