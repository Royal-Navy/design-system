import { selectors } from '@defencedigital/design-tokens'
import styled, { css } from 'styled-components'

import { StyledCheckboxProps } from './StyledCheckbox'
import { StyledCheckmark } from './StyledCheckmark'

const { color } = selectors

export const StyledInput = styled.input<StyledCheckboxProps>`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ ${StyledCheckmark} {
    background-color: ${color('action', '500')};
    border: 1px solid ${color('action', '500')};
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
