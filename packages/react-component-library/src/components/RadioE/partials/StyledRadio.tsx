import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { StyledCheckmark } from './StyledCheckmark'
import { StyledInput } from './StyledInput'

interface StyledRadioProps {
  $isDisabled?: boolean
  $isInvalid?: boolean
  $isChecked?: boolean
}

const RADIO_FOCUS_WIDTH = '0.1rem'

const { spacing, fontSize, color, animation } = selectors

export const StyledRadio = styled.div<StyledRadioProps>`
  display: inline-flex;
  position: relative;
  padding-left: ${spacing('11')};
  cursor: pointer;
  font-size: ${fontSize('base')};
  user-select: none;

  * {
    cursor: pointer;
  }

  border: 1px solid ${color('neutral', '200')};
  border-radius: 15px;

  &:focus-within,
  &:active {
    outline: none;
    border-color: ${color('action', '500')};
    box-shadow: 0 0 0 2px ${color('action', '500')},
      0 0 0 5px ${color('action', '100')};
  }

  /* Active state, light blue outline */

  &:hover ${StyledCheckmark}, ${StyledInput}:active ~ ${StyledCheckmark} {
    border: 1px solid ${color('action', '500')};
    outline: none;
    box-shadow: 0 0 0 ${RADIO_FOCUS_WIDTH} ${color('action', '500')};
    transition: all ${animation('default')};
  }

  /* Checked state, blue border */

  ${StyledInput}:checked ~ ${StyledCheckmark} {
    background-color: ${color('neutral', 'white')};
    border: 1px solid ${color('action', '500')};
    box-shadow: 0 0 0 ${RADIO_FOCUS_WIDTH} ${color('action', '500')};
  }

  ${StyledInput}:checked ~ ${StyledCheckmark}:after {
    display: block;
  }

  /* Checkmark, blue dot */

  ${StyledCheckmark}::after {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 999px;
    background: ${color('action', '500')};
    border: 2px solid ${color('neutral', 'white')};
  }

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      cursor: not-allowed;

      * {
        cursor: not-allowed;
      }

      ${StyledInput} ~ ${StyledCheckmark} {
        background-color: ${color('neutral', '200')};
        border: 1px solid ${color('neutral', '100')};
      }

      &:hover ${StyledCheckmark}, ${StyledInput}:active ~ .rn-radio__checkmark {
        border: 1px solid ${color('neutral', '100')};
        box-shadow: none;
        cursor: not-allowed;
      }

      background-color: ${color('neutral', '000')};
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
