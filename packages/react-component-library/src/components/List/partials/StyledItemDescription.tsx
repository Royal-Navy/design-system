import { themeColor, fontSize } from '@royalnavy/design-tokens'
import { styled } from 'styled-components'

export const StyledItemDescription = styled.div`
  color: ${themeColor('neutral', '400')};
  font-size: ${fontSize('base')};
  font-weight: 400;
`
