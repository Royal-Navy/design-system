import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'
import { TransitionStatus } from 'react-transition-group'

import {
  getTransitionOpacity,
  TransitionProps,
} from '../../../../styled-components'

const { color, fontSize, spacing } = selectors

export const StyledNotificationsLabel = styled.span<TransitionProps>`
  flex: 1;
  text-align: left;
  color: ${color('neutral', '100')};
  font-size: ${fontSize('m')};
  margin-left: ${spacing('4')};
  white-space: nowrap;
  display: none;
  opacity: ${({ $transitionStatus }) =>
    getTransitionOpacity($transitionStatus)};
  transition: opacity 150ms linear;
`
