import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { StyledOuterWrapper } from './StyledOuterWrapper'

const { color, spacing } = selectors

interface StyledDatePickerInputProps {
  $isDisabled?: boolean
}

export const StyledDatePickerInput = styled.div<StyledDatePickerInputProps>`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
  margin: ${spacing('6')} 0;
  padding: 0;
  border: 0;
  vertical-align: top;
  width: 100%;

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      cursor: not-allowed;

      * {
        cursor: not-allowed;
      }
    `}

  &.is-invalid {
    ${StyledOuterWrapper} {
      border-color: ${color('danger', '700')};
      box-shadow: 0 0 0 1px ${color('danger', '700')};
    }
  }

  &.is-valid {
    ${StyledOuterWrapper} {
      border-color: ${color('success', '700')};
      box-shadow: 0 0 0 1px ${color('success', '700')};
    }
  }
`
