import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'
import { transparentize } from 'polished'

import { RANGE_SLIDER_HANDLE_COLOR } from '../constants'
import { ThresholdColor } from '../useThresholdColor'
import { StyledValue } from './StyledValue'

interface StyledHandleProps {
  $isActive?: boolean
  $thresholdColor?: ThresholdColor
  $left: string
}

const { color } = selectors

export const StyledHandle = styled.div.attrs<any>(({ $left }) => ({
  style: {
    left: $left,
  },
}))<any>`
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 14px;
  height: 14px;
  margin-left: 1px;
  border: none;
  border-radius: 9999px;
  background-color: ${RANGE_SLIDER_HANDLE_COLOR};
  text-align: center;
  box-shadow: 0px 0px 0px 0px ${transparentize(0.5, color('neutral', '200'))};
  transition: box-shadow 0.15s ease-in-out;
  cursor: pointer;

  &:nth-of-type(2n) {
    ${StyledValue} {
      transform: translate(-50%, 125%);
    }
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      box-shadow: 0px 0px 0px 7px
        ${transparentize(0.5, color('neutral', '200'))};
      outline: none;

      ${StyledValue} {
        opacity: 1;
      }
    `}

  &:focus {
    box-shadow: 0px 0px 0px 7px ${transparentize(0.5, color('neutral', '200'))};
    outline: none;

    ${StyledValue} {
      opacity: 1;
    }
  }

  ${({ $thresholdColor }) =>
    $thresholdColor &&
    css`
      background-color: ${$thresholdColor};

      ${StyledValue} {
        color: ${$thresholdColor};
        background-color: ${transparentize(0.75, $thresholdColor)};
      }
    `}
`
