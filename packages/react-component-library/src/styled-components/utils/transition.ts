import { TransitionStatus } from 'react-transition-group'

export interface TransitionProps {
  $transitionStatus: TransitionStatus
}

export function getTransitionOpacity(
  transitionStatus: TransitionStatus
): string {
  return transitionStatus === 'entered' ? '1' : '0'
}
