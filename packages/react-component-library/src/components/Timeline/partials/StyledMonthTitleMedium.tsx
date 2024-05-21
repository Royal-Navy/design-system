import styled from 'styled-components'
import { color, fontSize } from '@royalnavy/design-tokens'

export const StyledMonthTitleMedium = styled.p`
  font-size: ${fontSize('xs')};
  font-weight: 600;
  color: ${color('neutral', '600')};
  text-transform: uppercase;

  & > span {
    display: block;
    text-align: center;
  }
`
