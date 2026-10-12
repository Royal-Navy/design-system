import styled from 'styled-components'
import { fontSize, spacing, colorValue } from '@royalnavy/design-tokens'

import {
  getTransitionOpacity,
  TransitionProps,
} from '../../../../styled-components'

export const StyledNotificationsLabel = styled.span<TransitionProps>`
  flex: 1;
  text-align: left;
  color: ${colorValue('neutral', '100')};
  font-size: ${fontSize('m')};
  margin-left: ${spacing('4')};
  white-space: nowrap;
  display: none;
  opacity: ${({ $transitionStatus }) =>
    getTransitionOpacity($transitionStatus)};
  transition: opacity 150ms linear;
`
