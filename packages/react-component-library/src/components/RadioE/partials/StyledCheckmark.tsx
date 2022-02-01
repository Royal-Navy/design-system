import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color } = selectors

export const StyledCheckmark = styled.span`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  height: 16px;
  width: 16px;
  background-color: ${color('neutral', 'white')};
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
