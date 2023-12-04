import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, fontSize } = selectors

export const StyledMonthTitleSmall = styled.span`
  font-size: ${fontSize('xxs')};
  font-weight: 600;
  color: ${color('neutral', '600')};
  text-transform: uppercase;
  transform: rotate(-90deg);
  width: 4rem;
  position: absolute;
  bottom: 40px;
`
