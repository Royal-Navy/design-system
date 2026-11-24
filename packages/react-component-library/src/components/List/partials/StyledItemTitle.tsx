import { themeColor, fontSize, spacing } from '@royalnavy/design-tokens'
import { styled } from 'styled-components'

export const StyledItemTitle = styled.h2`
  color: ${themeColor('neutral', '600')};
  font-size: ${fontSize('m')};
  margin-top: 0;
  margin-bottom: ${spacing('2')};
`
