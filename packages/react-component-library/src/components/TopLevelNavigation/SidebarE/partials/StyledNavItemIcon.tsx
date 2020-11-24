import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { StyledNavItem } from './StyledNavItem'

interface StyledNavItemIconProps {
  isOpen?: boolean
}

const { color } = selectors

export const StyledNavItemIcon = styled.div<StyledNavItemIconProps>`
  display: inline-flex;
  align-items: center;
  width: 100%;
  padding: 0.55rem;

  svg {
    width: 18px;
    height: 18px;
    color: ${color('neutral', '100')};

    ${StyledNavItem}:hover & {
      color: ${color('neutral', 'white')};
    }
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      width: auto;
    `}
`
