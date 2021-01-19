import React from 'react'
import { selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

import { StyledLabel } from './StyledLabel'

const { color, fontSize, spacing } = selectors

export interface StyledCheckboxProps {
  $isDisabled?: boolean
  $isInvalid?: boolean
}

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: block;
  position: relative;
  padding-left: ${spacing('11')};
  font-size: ${fontSize('base')};
  user-select: none;

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      ${StyledLabel} {
        cursor: not-allowed;
        color: ${color('neutral', '200')};
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
