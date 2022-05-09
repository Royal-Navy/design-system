import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { CheckboxRootProps } from '../../CheckboxRadioBase'
import { StyledCheckmark } from './StyledCheckmark'
import { StyledInput } from '../../CheckboxRadioBase/partials/StyledInput'

const RADIO_ACTIVE_BORDER_WIDTH = '2px'

const { spacing, fontSize, color } = selectors

const BackgroundColor = css<CheckboxRootProps>`
  ${({ $isDisabled, $hasContainer, $isChecked }) => {
    if (!$hasContainer) {
      return 'transparent'
    }

    if ($isDisabled) {
      return color('neutral', '000')
    }

    if ($isChecked) {
      return color('action', '000')
    }

    return color('neutral', 'white')
  }}
`

const CheckmarkBackgroundColor = css<CheckboxRootProps>`
  ${({ $isDisabled, $hasContainer }) => {
    if ($hasContainer) {
      return BackgroundColor
    }

    return color('neutral', $isDisabled ? '000' : 'white')
  }}
`

const CheckmarkCheckedFillColor = css<CheckboxRootProps>`
  ${({ $isDisabled, $hasContainer }) =>
    $isDisabled
      ? color('neutral', $hasContainer ? '200' : '100')
      : color('action', '500')}
`

export const StyledRadio = styled.div<CheckboxRootProps>`
  display: inline-flex;
  position: relative;
  padding: ${({ $hasContainer }) =>
    $hasContainer ? `0 0 0 ${spacing('13')}` : `0 0 0 ${spacing('12')}`};
  cursor: pointer;
  font-size: ${fontSize('base')};
  user-select: none;
  background: ${BackgroundColor};

  * {
    cursor: pointer;
  }

  ${StyledCheckmark} {
    &::before {
      display: block;
      background: ${CheckmarkBackgroundColor};
      box-shadow: 0 0 0 0 transparent;
    }
  }

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

  /* Checkmark hover and active states, blue border */

  ${({ $isDisabled }) =>
    !$isDisabled &&
    css`
      &:hover ${StyledCheckmark}, ${StyledInput}:active ~ ${StyledCheckmark} {
        &::before {
          box-shadow: 0 0 0 ${RADIO_ACTIVE_BORDER_WIDTH}
            ${color('action', '500')};
        }
      }
    `}

  ${({ $hasContainer }) =>
    !$hasContainer &&
    css`
      ${StyledInput}:focus ~ ${StyledCheckmark}::before {
        box-shadow: 0 0 0 ${RADIO_ACTIVE_BORDER_WIDTH}
          ${CheckmarkCheckedFillColor};
      }
    `}

  /* Checkmark checked state */

  ${StyledInput}:checked ~ ${StyledCheckmark} {
    /* Blue border (grey if disabled) */
    &::before {
      box-shadow: 0 0 0 ${RADIO_ACTIVE_BORDER_WIDTH}
        ${CheckmarkCheckedFillColor};
    }

    &::after {
      display: block;
      background: ${CheckmarkCheckedFillColor};
      border: 2px solid ${CheckmarkBackgroundColor};
    }
  }

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      cursor: not-allowed;

      * {
        cursor: not-allowed;
      }

      border-color: transparent;

      &:focus-within,
      &:active {
        border-color: transparent;
        box-shadow: none;
      }
    `}

  ${({ $isInvalid }) =>
    $isInvalid &&
    css`
      border-color: ${color('danger', '800')};
      box-shadow: 0 0 0 2px ${color('danger', '800')};
    `}
`
