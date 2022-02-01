import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { StyledCheckmark } from './StyledCheckmark'
import { StyledInput } from './StyledInput'

interface StyledRadioProps {
  $isDisabled?: boolean
  $isInvalid?: boolean
  $isChecked?: boolean
}

const RADIO_ACTIVE_BORDER_WIDTH = '2px'

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

  ${StyledCheckmark}::before {
    display: block;
    box-shadow: 0 0 0 0 transparent;
    transition: all ${animation('default')};
  }

  /* Checkmark hover and active states, blue border */

  &:hover ${StyledCheckmark}, ${StyledInput}:active ~ ${StyledCheckmark} {
    &::before {
      box-shadow: 0 0 0 ${RADIO_ACTIVE_BORDER_WIDTH} ${color('action', '500')};
    }
  }

  /* Checkmark checked state */

  ${StyledInput}:checked ~ ${StyledCheckmark} {
    background-color: ${color('neutral', 'white')};

    /* Blue border */
    &::before {
      box-shadow: 0 0 0 ${RADIO_ACTIVE_BORDER_WIDTH} ${color('action', '500')};
    }

    /* Central blue dot */
    &::after {
      display: block;
      background: ${color('action', '500')};
      border: 2px solid ${color('neutral', 'white')};
    }
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

      &:hover ${StyledCheckmark}, ${StyledInput}:active ~ ${StyledCheckmark} {
        border: 1px solid ${color('neutral', '100')};
        cursor: not-allowed;

        &::before {
          box-shadow: none;
        }
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
