import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { StyledCheckmark } from './StyledCheckmark'
import { StyledLabel } from './StyledLabel'
import { StyledInput } from './StyledInput'

interface StyledRadioProps {
  $isDisabled?: boolean
  $isInvalid?: boolean
}

const RADIO_FOCUS_WIDTH = '0.1rem'

const { spacing, fontSize, color, animation } = selectors

export const StyledRadio = styled.div<StyledRadioProps>`
  display: block;
  position: relative;
  padding-left: ${spacing('11')};
  cursor: pointer;
  font-size: ${fontSize('base')};
  user-select: none;

  /* Active state, light blue outline */
  ${StyledInput}:hover ~ ${StyledCheckmark},
  ${StyledInput}:active ~ ${StyledCheckmark} {
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
    background: ${color('action', '600')};
    border: 3px solid ${color('neutral', 'white')};
  }

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      ${StyledLabel} {
        cursor: not-allowed;
        color: ${color('neutral', '200')};
      }

      ${StyledInput} ~ ${StyledCheckmark} {
        background-color: ${color('neutral', '000')};
        border: 1px solid ${color('neutral', '100')};
      }

      ${StyledInput}:hover ~ ${StyledCheckmark},
      ${StyledInput}:active ~ .rn-radio__checkmark {
        border: 1px solid ${color('neutral', '100')};
        box-shadow: none;
        cursor: not-allowed;
      }
    `}

  ${({ $isInvalid }) =>
    $isInvalid &&
    css`
      ${StyledLabel} {
        color: ${color('danger', '700')};
      }
    `}
`
