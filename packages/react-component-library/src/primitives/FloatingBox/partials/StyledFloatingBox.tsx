import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import {
  getTransitionOpacity,
  TransitionProps,
} from '../../../styled-components'

const { zIndex } = selectors

export const StyledFloatingBox = styled.div<TransitionProps>`
  z-index: ${zIndex('dropdown', 1)};
  opacity: ${({ $transitionStatus }) =>
    getTransitionOpacity($transitionStatus)};
  padding: 0.5rem;
`
