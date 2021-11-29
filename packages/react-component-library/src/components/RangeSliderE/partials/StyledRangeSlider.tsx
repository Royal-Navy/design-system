import styled, { css } from 'styled-components'

import { StyledPercentage } from './StyledPercentage'

interface StyledRangeSliderProps {
  $isReversed?: boolean
  $isDisabled?: boolean
  $hasPercentage?: boolean
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

  ${({ $hasPercentage }) =>
    !$hasPercentage &&
    `
      ${StyledPercentage} {
        display: none;
      }
  `}
`
