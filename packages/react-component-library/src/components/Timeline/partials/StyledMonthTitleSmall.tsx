import { styled } from 'styled-components'
import { themeColor, fontSize } from '@royalnavy/design-tokens'

export const StyledMonthTitleSmall = styled.span`
  font-size: ${fontSize('xxs')};
  font-weight: 600;
  color: ${themeColor('neutral', '600')};
  text-transform: uppercase;
  transform: rotate(-90deg);
  width: 4rem;
  position: absolute;
  bottom: 40px;
`
