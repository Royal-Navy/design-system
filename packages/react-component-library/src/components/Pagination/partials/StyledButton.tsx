import { styled, css } from 'styled-components'
import {
  animation,
  themeColor,
  colorByMode,
  isDarkColorMode,
  spacing,
  Theme,
} from '@royalnavy/design-tokens'

interface StyledButtonProps {
  $isDisabled: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  padding: ${spacing('2')} ${spacing('4')};
  outline: none;
  transition: all ${animation('default')};

  background-color: ${({ theme }) =>
    isDarkColorMode(theme as Theme)
      ? 'transparent'
      : themeColor('neutral', '000')};
  color: ${({ $isDisabled, theme }) =>
    colorByMode(
      'neutral',
      $isDisabled ? '200' : '400',
      $isDisabled ? '300' : '600',
      theme as Theme
    )};
  border: 1px solid transparent;
  border-radius: 4px;
  height: 33px;
  width: 33px;

  &:hover {
    ${({ $isDisabled }) =>
      !$isDisabled &&
      css`
        background-color: ${themeColor('neutral', '100')};
      `}
  }

  & > svg {
    position: relative;
    top: 2px;
    left: -1px;
  }
`
