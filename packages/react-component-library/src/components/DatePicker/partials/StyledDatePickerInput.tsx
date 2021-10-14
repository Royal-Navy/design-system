import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { spacing } = selectors

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
  min-width: 16rem;

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      cursor: not-allowed;

      * {
        cursor: not-allowed;
      }
    `}
`
