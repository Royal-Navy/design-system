import { color, fontSize, spacing } from '@royalnavy/design-tokens'
import { styled, css } from 'styled-components'

import { CheckboxRootProps } from '../../CheckboxRadioBase/CheckboxRadioBaseProps'
import {
  CONTAINER_BORDER_RADIUS,
  CONTAINER_PADDING_LEFT,
  getContainerFocusStyles,
} from '../../CheckboxRadioBase/constants'

export const StyledCheckbox = styled.div<CheckboxRootProps>`
  display: inline-flex;
  position: relative;
  padding: ${({ $hasContainer, $size }) =>
    `0 0 0 ${$hasContainer ? CONTAINER_PADDING_LEFT[$size] : spacing('12')}`};
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

  ${({ $hasContainer, $size }) =>
    $hasContainer &&
    css`
      border: 1px solid ${color('neutral', '200')};
      border-radius: ${CONTAINER_BORDER_RADIUS[$size]};

      ${getContainerFocusStyles($size)}
    `}

  ${({ $hasLabel }) =>
    !$hasLabel &&
    css`
      height: 20px;
      width: 20px;
      padding: unset;
    `}

  ${({ $isDisabled, $hasContainer }) =>
    $isDisabled &&
    css`
      cursor: not-allowed;

      * {
        cursor: not-allowed;
      }

      border-color: transparent;

      ${$hasContainer &&
      css`
        background-color: ${color('neutral', '000')};
      `}

      &:focus,
      &:active {
        border-color: transparent;
        box-shadow: none;
      }
    `}
`
