import styled  from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize, spacing, zIndex } = selectors

export const StyledWeekTitle = styled.span`
  font-weight: 600;
  font-size: ${fontSize('m')};
  color: ${color('neutral', '400')};
  background-color: inherit;
  z-index: ${zIndex('body', 2)};
  margin-left: ${spacing('4')};
`
