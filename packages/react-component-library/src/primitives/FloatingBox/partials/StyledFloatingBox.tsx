import styled from 'styled-components'
import { zIndex } from '@royalnavy/design-tokens'

import {
  getTransitionOpacity,
  TransitionProps,
} from '../../../styled-components'

export const StyledFloatingBox = styled.div<TransitionProps>`
  z-index: ${zIndex('dropdown', 1)};
  opacity: ${({ $transitionStatus }) =>
    getTransitionOpacity($transitionStatus)};
  padding: 0.5rem;
`
