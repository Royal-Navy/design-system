import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import {
  getTransitionOpacity,
  TransitionProps,
} from '../../../../styled-components'

const { fontSize } = selectors

export const StyledHeadTitle = styled.div<TransitionProps>`
  font-weight: 600;
  font-size: ${fontSize('l')};
  white-space: nowrap;
  opacity: ${({ $transitionStatus }) =>
    getTransitionOpacity($transitionStatus)};
  transition: opacity 150ms linear;
`
