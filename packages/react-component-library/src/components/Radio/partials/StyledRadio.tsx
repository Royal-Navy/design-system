import { styled, css } from 'styled-components'
import { color, fontSize, spacing } from '@royalnavy/design-tokens'

import { CheckboxRootProps } from '../../CheckboxRadioBase/CheckboxRadioBaseProps'
import { StyledCheckmark } from './StyledCheckmark'
import { StyledInput } from '../../CheckboxRadioBase/partials/StyledInput'
import {
  CONTAINER_BORDER_RADIUS,
  CONTAINER_PADDING_LEFT,
  getContainerFocusStyles,
} from '../../CheckboxRadioBase/constants'

const RADIO_ACTIVE_BORDER_WIDTH = '2px'

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
  padding: ${({ $hasContainer, $size }) =>
    `0 0 0 ${$hasContainer ? CONTAINER_PADDING_LEFT[$size] : spacing('12')}`};
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

  ${({ $hasContainer, $size }) =>
    $hasContainer &&
    css`
      border: 1px solid ${color('neutral', '200')};
      border-radius: ${CONTAINER_BORDER_RADIUS[$size]};

      ${getContainerFocusStyles($size)}
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
    css<CheckboxRootProps>`
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
