import styled from 'styled-components'
import { color, zIndex } from '@royalnavy/design-tokens'

import {
  getTransitionOpacity,
  TransitionProps,
} from '../../../../styled-components'

export const StyledHandle = styled.button<TransitionProps>`
  position: absolute;
  top: 1.15rem;
  right: -1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${color('action', '500')};
  border-radius: 9999px;
  width: 2rem;
  height: 2rem;
  border: none;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  opacity: ${({ $transitionStatus }) =>
    getTransitionOpacity($transitionStatus)};
  transition: 100ms opacity linear;
  z-index: ${zIndex('sidebar', 2)};

  &:hover {
    cursor: pointer;
  }

  > svg {
    color: ${color('neutral', 'white')};
  }
`
