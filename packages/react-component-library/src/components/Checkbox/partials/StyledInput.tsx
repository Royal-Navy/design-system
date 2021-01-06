import React from 'react'
import { selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

import { StyledCheckboxProps } from './StyledCheckbox'
import { StyledCheckmark } from './StyledCheckmark'

const { color } = selectors

const CHECKBOX_ANIMATION_TIMING = '0.2s'
const CHECKBOX_FOCUS_WIDTH = '1px'

export const StyledInput = styled.input<StyledCheckboxProps>`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:hover ~ ${StyledCheckmark}, &:active ~ ${StyledCheckmark} {
    border: 1px solid ${color('action', '500')};
    outline: none;
    box-shadow: 0 0 0 ${CHECKBOX_FOCUS_WIDTH} ${color('action', '500')};
    transition: all ${CHECKBOX_ANIMATION_TIMING};
  }

  &:checked ~ ${StyledCheckmark} {
    background-color: ${color('action', '600')};
    border: 1px solid ${color('action', '600')};
    text-align: center;
  }

  &:checked ~ ${StyledCheckmark}:after {
    display: block;
  }

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      ~ ${StyledCheckmark} {
        background-color: ${color('neutral', '000')};
        border: 1px solid ${color('neutral', '100')};
      }

      &:hover ~ ${StyledCheckmark}, input:active ~ ${StyledCheckmark} {
        border: 1px solid ${color('neutral', '100')};
        box-shadow: none;
        cursor: not-allowed;
      }
    `}
`
