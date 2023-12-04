import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import {
  AppearanceTypes,
  Placement,
  TransitionState,
} from 'react-toast-notifications'

import { StyledToastLabel } from './StyledToastLabel'

interface StyledToastProps {
  $appearance: AppearanceTypes
  $placement: Placement
  $transitionDuration: number
  $transitionState: TransitionState
}

const { shadow, color, spacing } = selectors

const colors = {
  success: color('success', '500'),
  error: color('danger', '500'),
  warning: color('warning', '500'),
  info: color('action', '500'),
}

type TranslateOrigin = 'left' | 'right' | 'top' | 'bottom'

const translateOriginMap: { [placement in Placement]: TranslateOrigin } = {
  'top-left': 'left',
  'bottom-left': 'left',
  'top-right': 'right',
  'bottom-right': 'right',
  'top-center': 'top',
  'bottom-center': 'bottom',
}

const translateMap: { [origin in TranslateOrigin]: string } = {
  right: 'translate3d(120%, 0, 0)',
  left: 'translate3d(-120%, 0, 0)',
  bottom: 'translate3d(0, 120%, 0)',
  top: 'translate3d(0, -120%, 0)',
}

export const StyledToast = styled.div<StyledToastProps>`
  box-shadow: ${shadow('2')};
  display: flex;
  flex-direction: column;
  border: 1px solid ${color('neutral', '100')};
  border-radius: 4px;
  width: 340px;
  margin-bottom: ${spacing('6')};
  background-color: ${color('neutral', 'white')};
  transition: transform ${({ $transitionDuration }) => $transitionDuration}ms
      cubic-bezier(0.2, 0, 0, 1),
    opacity ${({ $transitionDuration }) => $transitionDuration}ms;

  ${({ $appearance }) => css`
    ${StyledToastLabel} > svg {
      color: ${colors[$appearance]};
    }
  `}

  ${({ $placement, $transitionState }) =>
    $transitionState === 'entering' &&
    css`
      transform: ${translateMap[translateOriginMap[$placement]]};
    `}

  ${({ $transitionState }) =>
    $transitionState === 'entered' &&
    css`
      transform: translate3d(0, 0, 0);
    `}
`
