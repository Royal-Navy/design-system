import { styled } from 'styled-components'
import { themeColor, fontSize } from '@royalnavy/design-tokens'

export const StyledMonthTitleMedium = styled.p`
  font-size: ${fontSize('xs')};
  font-weight: 600;
  color: ${themeColor('neutral', '600')};
  text-transform: uppercase;

  & > span {
    display: block;
    text-align: center;
  }
`
