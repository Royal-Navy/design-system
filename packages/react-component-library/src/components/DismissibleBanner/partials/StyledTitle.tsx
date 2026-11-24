import { themeColor, fontSize, spacing } from '@royalnavy/design-tokens'
import { styled } from 'styled-components'

export const StyledTitle = styled.h2`
  color: ${themeColor('neutral', '600')};
  font-size: ${fontSize('l')};
  font-weight: bold;
  margin-bottom: ${spacing('2')};
`
