import { selectors } from '@defencedigital/design-tokens'
import styled, { css } from 'styled-components'

import { StyledCheckmark } from './StyledCheckmark'

const { color, fontSize } = selectors

export interface StyledCheckboxProps {
  $isDisabled?: boolean
  $isInvalid?: boolean
  $isChecked?: boolean
}

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: inline-flex;
  position: relative;
  font-size: ${fontSize('base')};
  user-select: none;
  border: 1px solid ${color('neutral', '200')};
  border-radius: 15px;
  cursor: pointer;

  * {
    cursor: pointer;
  }

  &:focus-within,
  &:active {
    outline: none;
    border-color: ${color('action', '500')};
    box-shadow: 0 0 0 2px ${color('action', '500')},
      0 0 0 5px ${color('action', '100')};
  }

  &:hover ${StyledCheckmark}, &:active ${StyledCheckmark} {
    border: 1px solid ${color('action', '500')};
    outline: none;
    box-shadow: 0 0 0 1px ${color('action', '500')};
    transition: all 0.2s;
  }

  ${({ $isInvalid }) =>
    $isInvalid &&
    css`
      border-color: ${color('danger', '800')};
      box-shadow: 0 0 0 2px ${color('danger', '800')};
    `}

  ${({ $isChecked }) =>
    $isChecked &&
    css`
      background-color: ${color('action', '000')};
    `}

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      cursor: not-allowed;

      * {
        cursor: not-allowed;
      }

      &&& ${StyledCheckmark} {
        background-color: ${color('neutral', '200')};
        border-color: ${color('neutral', '200')};
        box-shadow: none;
      }

      background-color: ${color('neutral', '000')};
      border-color: transparent;

      &:focus,
      &:active {
        border-color: transparent;
        box-shadow: none;
      }
    `}
`
