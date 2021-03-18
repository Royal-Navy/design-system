import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { animation, color, spacing } = selectors

interface StyledButtonProps {
  $isDisabled: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  padding: ${spacing('2')} ${spacing('4')};
  outline: none;
  transition: all ${animation('default')};

  background-color: ${color('neutral', '000')};
  color: ${({ $isDisabled }) => color('neutral', $isDisabled ? '200' : '400')};
  border: 1px solid transparent;
  border-radius: 4px;
  height: 33px;
  width: 33px;

  &:hover {
    ${({ $isDisabled }) =>
      !$isDisabled &&
      css`
        background-color: ${color('neutral', '100')};
      `}
  }

  & > svg {
    position: relative;
    top: 2px;
    left: -1px;
  }
`
