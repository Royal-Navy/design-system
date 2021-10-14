import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, fontSize } = selectors

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
