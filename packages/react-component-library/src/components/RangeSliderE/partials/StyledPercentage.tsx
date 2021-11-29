import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { fontSize, color } = selectors

export const StyledPercentage = styled.span`
  position: absolute;
  transform: translate(-50%, -355%);
  font-size: ${fontSize('s')};
  color: ${color('neutral', '300')};
  opacity: 1;
  transition: opacity 0.15s ease-in-out;
  font-weight: 700;
`
