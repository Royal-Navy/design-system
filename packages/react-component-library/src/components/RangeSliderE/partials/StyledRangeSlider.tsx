import styled, { css } from 'styled-components'

interface StyledRangeSliderProps {
  $isReversed?: boolean
  $isDisabled?: boolean
}

export const StyledRangeSlider = styled.div<StyledRangeSliderProps>`
  display: inline-flex;
  align-items: center;
  width: 100%;

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;

      * {
        cursor: not-allowed;
      }
    `}
`
