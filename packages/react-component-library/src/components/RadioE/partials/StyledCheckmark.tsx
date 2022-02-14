import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color } = selectors

export const StyledCheckmark = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  height: 16px;
  width: 16px;
  border-radius: 999px;
  border: 1px solid ${color('neutral', '200')};
  outline: none;

  &::after,
  &::before {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 999px;
    position: absolute;
    display: none;
  }
`
