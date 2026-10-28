import { styled } from 'styled-components'
import { color, fontSize, spacing } from '@royalnavy/design-tokens'

import {
  getTransitionOpacity,
  TransitionProps,
} from '../../../../styled-components'

export const StyledUserText = styled.div<TransitionProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 1rem);
  padding: 0 0 0 ${spacing('6')};
  white-space: nowrap;
  opacity: ${({ $transitionStatus }) =>
    getTransitionOpacity($transitionStatus)};
  transition: opacity 150ms linear;

  > div {
    display: inline-flex;
    justify-content: center;
    flex-direction: column;

    a:hover {
      text-decoration: none;
    }

    > span {
      color: ${color('neutral', 'white')};
      font-size: ${fontSize('m')};
    }

    a span {
      margin-top: ${spacing('1')};
      color: ${color('neutral', '300')};
      font-size: ${fontSize('s')};
    }
  }
`
