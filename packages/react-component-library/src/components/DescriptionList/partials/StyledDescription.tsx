import { styled } from 'styled-components'
import { themeColor, fontSize } from '@royalnavy/design-tokens'

export const StyledDescription = styled.h2`
  color: ${themeColor('neutral', '600')};
  font-size: ${fontSize('m')};
  font-weight: 500;
  display: flex;
  align-items: center;
`
