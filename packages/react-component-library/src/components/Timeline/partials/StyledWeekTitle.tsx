import { styled } from 'styled-components'
import { themeColor, fontSize, spacing, zIndex } from '@royalnavy/design-tokens'

export const StyledWeekTitle = styled.span`
  font-weight: 600;
  font-size: ${fontSize('m')};
  color: ${themeColor('neutral', '400')};
  background-color: inherit;
  z-index: ${zIndex('body', 2)};
  margin-left: ${spacing('4')};
`
