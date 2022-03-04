import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { StyledCheckmark } from './StyledCheckmark'
import { StyledInput } from './StyledInput'

interface StyledRadioProps {
  $hasContainer: boolean
  $isDisabled?: boolean
  $isInvalid?: boolean
  $isChecked?: boolean
}

const RADIO_ACTIVE_BORDER_WIDTH = '2px'

const { spacing, fontSize, color, animation } = selectors

const BackgroundColor = css<StyledRadioProps>`
  ${({ $isDisabled, $hasContainer, $isChecked }) => {
    if ($isDisabled) {
      return color('neutral', '000')
    }

    if ($hasContainer && $isChecked) {
      return color('action', '000')
    }

    return color('neutral', 'white')
  }}
`

const CheckmarkActiveBorderColor = css<StyledRadioProps>`
  ${({ $isDisabled }) =>
    $isDisabled ? color('neutral', '200') : color('action', '500')}
`

const CheckmarkCheckedFillColor = css<StyledRadioProps>`
  ${({ $isDisabled }) =>
    $isDisabled ? color('neutral', '200') : color('action', '500')}
`

function getCheckmarkCheckedSelector($hasContainer: boolean) {
  if ($hasContainer) {
    return css`
      ${StyledInput}:checked ~ ${StyledCheckmark}
    `
  }

  return css`
    ${StyledInput}:checked ~ ${StyledCheckmark}, ${StyledInput}:focus-within ~ ${StyledCheckmark}
  `
}

export const StyledRadio = styled.div<StyledRadioProps>`
  display: inline-flex;
  position: relative;
  padding-left: ${spacing('11')};
  cursor: pointer;
  font-size: ${fontSize('base')};
  user-select: none;
  background: ${BackgroundColor};

  * {
    cursor: pointer;
  }

  ${StyledCheckmark} {
    background: ${BackgroundColor};

    &::before {
      display: block;
      box-shadow: 0 0 0 0 transparent;
      transition: all ${animation('default')};
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

  /* Checkmark checked state */

  ${({ $hasContainer }) => getCheckmarkCheckedSelector($hasContainer)} {
    /* Blue border (grey if disabled) */
    &::before {
      box-shadow: 0 0 0 ${RADIO_ACTIVE_BORDER_WIDTH}
        ${CheckmarkActiveBorderColor};
    }

    /* Central blue dot (grey dot if disabled) */
    &::after {
      display: block;
      background: ${CheckmarkCheckedFillColor};
      border: 2px solid ${BackgroundColor};
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
