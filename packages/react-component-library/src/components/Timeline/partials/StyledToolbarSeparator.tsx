import { styled } from 'styled-components'
import { themeColor, spacing } from '@royalnavy/design-tokens'

export const StyledToolbarSeparator = styled.div`
  display: inline-block;
  height: 25px;
  width: ${spacing('px')};
  background-color: ${themeColor('neutral', '100')};
`
