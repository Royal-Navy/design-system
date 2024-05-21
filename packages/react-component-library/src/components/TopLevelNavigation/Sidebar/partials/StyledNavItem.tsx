import styled, { css } from 'styled-components'
import { color, spacing } from '@royalnavy/design-tokens'

interface StyledNavItemProps {
  isActive?: boolean
}

export const StyledNavItem = styled.div<StyledNavItemProps>`
  display: flex;
  align-items: center;
  margin: ${spacing('4')} 0;
  border-radius: 2px;

  > *:first-child {
    display: flex;
    align-items: center;
    width: 100%;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${color('action', '500')};

      &:hover {
        background-color: ${color('action', '500')};
      }
    `}

  &:hover {
    background-color: ${color('neutral', '400')};

    > * {
      text-decoration: none;
    }
  }
`
