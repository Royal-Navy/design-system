import { styled, css } from 'styled-components'
import { themeColor } from '@royalnavy/design-tokens'

import { ComponentSizeType } from '../../Forms'
import { StyledIconWrapper } from './StyledIconWrapper'

interface StyledButtonProps {
  $hasHover?: boolean
  $size?: ComponentSizeType
}

export const StyledInlineButton = styled.button<StyledButtonProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0;
  cursor: pointer;
  background: transparent;
  outline: none;
  color: ${themeColor('action', '700')};
  border: none;
  height: 100%;

  &:disabled {
    color: ${themeColor('neutral', '300')};
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }

  &:enabled:focus,
  &:enabled:hover {
    ${StyledIconWrapper} {
      background-color: ${themeColor('action', '000')};
    }
  }

  ${({ $hasHover }) =>
    $hasHover &&
    css`
      ${StyledIconWrapper} {
        background-color: ${themeColor('action', '000')};
      }
    `}

  &:enabled:active {
    ${StyledIconWrapper} {
      background-color: ${themeColor('action', '100')};
    }
  }
`
