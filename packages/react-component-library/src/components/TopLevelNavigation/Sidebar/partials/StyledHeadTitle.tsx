import styled from 'styled-components'
import { fontSize } from '@royalnavy/design-tokens'

import {
  getTransitionOpacity,
  TransitionProps,
} from '../../../../styled-components'

export const StyledHeadTitle = styled.div<TransitionProps>`
  font-weight: 600;
  font-size: ${fontSize('l')};
  white-space: nowrap;
  opacity: ${({ $transitionStatus }) =>
    getTransitionOpacity($transitionStatus)};
  transition: opacity 150ms linear;
`
