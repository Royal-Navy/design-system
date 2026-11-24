import { styled } from 'styled-components'
import { themeColor, spacing } from '@royalnavy/design-tokens'

export const StyledCaption = styled.caption`
  padding: ${spacing('8')} ${spacing('4')};
  text-align: left;
  background-color: ${themeColor('neutral', '000')};
  border-bottom: 1px solid ${themeColor('neutral', '200')};
`
