import { styled } from 'styled-components'
import { themeColor } from '@royalnavy/design-tokens'

export const StyledContainer = styled.fieldset`
  display: inline-flex;
  height: 46px;
  background-color: ${themeColor('neutral', 'white')};
  border-radius: 15px;
  border: none;
  padding: 0;
  margin: 0;
`
