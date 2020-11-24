import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { StyledNavItem } from './StyledNavItem'

interface StyledTextProps {
  isOpen?: boolean
}

const { color, fontSize, spacing } = selectors

export const StyledNavItemText = styled.div<StyledTextProps>`
  display: inline-block;
  color: ${color('neutral', '100')};
  font-size: ${fontSize('m')};
  margin-left: ${spacing('2')};
  opacity: 1;
  transition: opacity 150ms linear;

  ${StyledNavItem}:hover & {
    color: ${color('neutral', 'white')};
  }

  ${({ isOpen }) =>
    !isOpen &&
    css`
      display: none;
    `}
`
