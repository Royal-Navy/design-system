import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import { transparentize } from 'polished'

import { RANGE_SLIDER_HANDLE_COLOR } from '../constants'
import { ThresholdColor } from '../useThresholdColor'

interface StyledHandleProps {
  $isActive?: boolean
  $thresholdColor?: ThresholdColor
  $left: string
}

const { color, fontSize, spacing } = selectors

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

  &::after {
    content: attr(data-value);
    position: absolute;
    transform: translate(-50%, -155%);
    font-size: ${fontSize('xs')};
    color: ${color('neutral', '600')};
    opacity: 1;
    transition: opacity 0.15s ease-in-out;
    padding: ${spacing('2')} ${spacing('3')};
    border-radius: 12px;
    font-weight: 600;
  }

  &::before {
    content: attr(data-percent);
    position: absolute;
    transform: translate(-50%, -355%);
    font-size: ${fontSize('s')};
    color: ${color('neutral', '300')};
    opacity: 1;
    transition: opacity 0.15s ease-in-out;
    font-weight: 700;
  }

  &:nth-of-type(2n) {
    &::after {
      transform: translate(-50%, 125%);
    }

    &::before {
      transform: translate(-50%, 355%);
    }
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      box-shadow: 0px 0px 0px 7px
        ${transparentize(0.5, color('neutral', '200'))};
      outline: none;

      &::after,
      &::before {
        opacity: 1;
      }
    `}

  &:focus {
    box-shadow: 0px 0px 0px 7px ${transparentize(0.5, color('neutral', '200'))};
    outline: none;

    &::after,
    &::before {
      opacity: 1;
    }
  }

  ${({ $thresholdColor }) =>
    $thresholdColor &&
    css`
      background-color: ${$thresholdColor};

      &::after {
        color: ${$thresholdColor};
        background-color: ${transparentize(0.75, $thresholdColor)};
      }
    `}
`
