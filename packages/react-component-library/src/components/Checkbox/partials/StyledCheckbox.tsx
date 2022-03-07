import { selectors } from '@defencedigital/design-tokens'
import styled, { css } from 'styled-components'

const { color, fontSize, spacing } = selectors

export interface StyledCheckboxProps {
  $hasContainer?: boolean
  $isDisabled?: boolean
  $isInvalid?: boolean
  $isChecked?: boolean
}

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: inline-flex;
  position: relative;
  padding: ${({ $hasContainer }) =>
    $hasContainer ? `0 0 0 ${spacing('13')}` : `0 0 0 ${spacing('12')}`};
  font-size: ${fontSize('base')};
  user-select: none;
  cursor: pointer;

  * {
    cursor: pointer;
  }

  ${({ $isInvalid }) =>
    $isInvalid &&
    css`
      border-color: ${color('danger', '800')};
      box-shadow: 0 0 0 2px ${color('danger', '800')};
    `}

  ${({ $hasContainer, $isChecked }) =>
    $hasContainer &&
    $isChecked &&
    css`
      background-color: ${color('action', '000')};
    `}

  ${({ $hasContainer }) =>
    $hasContainer &&
    css`
      border: 1px solid ${color('neutral', '200')};
      border-radius: 15px;

      &:focus-within,
      &:active {
        outline: none;
        border-color: ${color('action', '500')};
        box-shadow: 0 0 0 2px ${color('action', '500')},
          0 0 0 5px ${color('action', '100')};
      }
    `}

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      cursor: not-allowed;

      * {
        cursor: not-allowed;
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
