import styled, { css } from 'styled-components'
import { fontSize, colorValue } from '@royalnavy/design-tokens'

import {
  getTransitionOpacity,
  TransitionProps,
} from '../../../../styled-components'
import { StyledNavItem } from './StyledNavItem'

interface StyledTextProps extends TransitionProps {
  $isOpen?: boolean
}

export const StyledNavItemText = styled.div<StyledTextProps>`
  display: inline-block;
  color: ${colorValue('neutral', '100')};
  font-size: ${fontSize('m')};
  opacity: ${({ $transitionStatus }) =>
    getTransitionOpacity($transitionStatus)};
  transition: opacity 150ms linear;
  padding: 0.25rem 0.5rem;

  ${StyledNavItem}:hover & {
    color: ${colorValue('neutral', 'white')};
  }

  ${({ $isOpen }) =>
    !$isOpen &&
    css`
      display: none;
    `}
`
