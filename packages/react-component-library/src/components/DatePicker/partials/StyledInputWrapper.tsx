import styled, { css } from 'styled-components'

interface StyledInputWrapperProps {
  $isRange: boolean
}

export const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
  position: relative;
  flex-grow: 1;

  ${({ $isRange }) =>
    $isRange &&
    css`
      input {
        cursor: default;
      }
    `}
`
