import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { animation, color, fontSize, spacing } = selectors

interface StyledButtonProps {
  $isActive: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  padding: ${spacing('2')} ${spacing('4')};
  background: none;
  font-weight: 500;
  font-size: ${fontSize('base')};
  color: ${color('neutral', '400')};
  border: 1px solid transparent;
  border-radius: 4px;
  outline: none;
  transition: all ${animation('default')};

  &:hover {
    background-color: ${color('neutral', '100')};
    color: ${color('neutral', '500')};
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: ${color('neutral', '400')};
      color: ${color('neutral', 'white')};
    `}
`
