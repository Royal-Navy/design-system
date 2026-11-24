import { themeColor, shadow } from '@royalnavy/design-tokens'
import { styled } from 'styled-components'

export const StyledCardFrame = styled.div`
  border-radius: 3px;
  background-color: ${themeColor('neutral', 'white')};
  border: 1px solid ${themeColor('neutral', '100')};
  box-shadow: ${shadow('1')};
`
