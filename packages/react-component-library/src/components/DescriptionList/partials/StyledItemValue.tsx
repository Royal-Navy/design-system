import { styled } from 'styled-components'
import { themeColor, fontSize } from '@royalnavy/design-tokens'

export const StyledItemValue = styled.dd`
  color: ${themeColor('neutral', '600')};
  font-weight: 600;
  font-size: ${fontSize('base')};
`
