import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { FloatingBoxPositionType, FloatingBoxSchemeType } from '../types'
import { FLOATING_BOX_ARROW_POSITION, FLOATING_BOX_SCHEME } from '../constants'
import { StyledContent } from './StyledContent'

const { breakpoint, color } = selectors

interface StyledFloatingBoxProps {
  $position: FloatingBoxPositionType
  $scheme: FloatingBoxSchemeType
}

function getContentBefore(
  $position: FloatingBoxPositionType,
  $scheme: FloatingBoxSchemeType
) {
  const borderColor =
    $scheme === FLOATING_BOX_SCHEME.LIGHT
      ? color('neutral', '100')
      : color('neutral', '700')

  if (
    $position === FLOATING_BOX_ARROW_POSITION.TOP_LEFT ||
    $position === FLOATING_BOX_ARROW_POSITION.TOP_RIGHT
  ) {
    return css`
      border-width: 0 5px 5px;
      margin-left: -5px;
      top: -6px;

      border-color: ${borderColor} transparent;
    `
  }

  if (
    $position === FLOATING_BOX_ARROW_POSITION.RIGHT_TOP ||
    $position === FLOATING_BOX_ARROW_POSITION.RIGHT_BOTTOM
  ) {
    return css`
      border-width: 5px 0 5px 5px;
      right: -6px;
      margin-top: -5px;

      border-color: transparent ${borderColor};
    `
  }

  if (
    $position === FLOATING_BOX_ARROW_POSITION.BOTTOM_LEFT ||
    $position === FLOATING_BOX_ARROW_POSITION.BOTTOM_RIGHT
  ) {
    return css`
      border-width: 5px 5px 0;
      bottom: -6px;
      margin-left: -5px;

      border-color: ${borderColor} transparent;
    `
  }

  if (
    $position === FLOATING_BOX_ARROW_POSITION.LEFT_TOP ||
    $position === FLOATING_BOX_ARROW_POSITION.LEFT_BOTTOM
  ) {
    return css`
      border-width: 5px 5px 5px 0;
      left: -6px;
      margin-top: -5px;

      border-color: transparent ${borderColor};
    `
  }

  return null
}

function getContentAfter(
  $position: FloatingBoxPositionType,
  $scheme: FloatingBoxSchemeType
) {
  const borderColor =
    $scheme === FLOATING_BOX_SCHEME.LIGHT
      ? color('neutral', 'white')
      : color('neutral', '700')

  if (
    $position === FLOATING_BOX_ARROW_POSITION.TOP_LEFT ||
    $position === FLOATING_BOX_ARROW_POSITION.TOP_RIGHT
  ) {
    return css`
      border-width: 0 5px 5px;
      margin-left: -5px;
      top: -5px;

      border-color: ${borderColor} transparent;
    `
  }

  if (
    $position === FLOATING_BOX_ARROW_POSITION.RIGHT_TOP ||
    $position === FLOATING_BOX_ARROW_POSITION.RIGHT_BOTTOM
  ) {
    return css`
      border-width: 5px 0 5px 5px;
      right: -5px;
      margin-top: -5px;

      border-color: transparent ${borderColor};
    `
  }

  if (
    $position === FLOATING_BOX_ARROW_POSITION.BOTTOM_LEFT ||
    $position === FLOATING_BOX_ARROW_POSITION.BOTTOM_RIGHT
  ) {
    return css`
      border-width: 5px 5px 0;
      bottom: -5px;
      margin-left: -5px;

      border-color: ${borderColor} transparent;
    `
  }

  if (
    $position === FLOATING_BOX_ARROW_POSITION.LEFT_BOTTOM ||
    $position === FLOATING_BOX_ARROW_POSITION.LEFT_TOP
  ) {
    return css`
      border-width: 5px 5px 5px 0;
      left: -5px;
      margin-top: -5px;

      border-color: transparent ${borderColor};
    `
  }

  return null
}

function getContentTweaks($position: FloatingBoxPositionType) {
  if (
    $position === FLOATING_BOX_ARROW_POSITION.LEFT_BOTTOM ||
    $position === FLOATING_BOX_ARROW_POSITION.RIGHT_BOTTOM
  ) {
    return css`
      top: auto;
      bottom: 15px;
    `
  }

  if (
    $position === FLOATING_BOX_ARROW_POSITION.LEFT_TOP ||
    $position === FLOATING_BOX_ARROW_POSITION.RIGHT_TOP
  ) {
    return css`
      top: 15px;
    `
  }

  if (
    $position === FLOATING_BOX_ARROW_POSITION.TOP_LEFT ||
    $position === FLOATING_BOX_ARROW_POSITION.BOTTOM_LEFT
  ) {
    return css`
      left: 15px;
    `
  }

  if (
    $position === FLOATING_BOX_ARROW_POSITION.TOP_RIGHT ||
    $position === FLOATING_BOX_ARROW_POSITION.BOTTOM_RIGHT
  ) {
    return css`
      left: auto;
      right: 15px;
    `
  }

  return null
}

export const StyledFloatingBox = styled.div<StyledFloatingBoxProps>`
  @media only screen and (min-width: ${breakpoint('xs').breakpoint}) {
    ${({ $position, $scheme }) =>
      css`
        ${StyledContent}:before {
          ${getContentBefore($position, $scheme)};
        }

        ${StyledContent}:after {
          ${getContentAfter($position, $scheme)}
        }

        ${StyledContent}:before, ${StyledContent}:after {
          ${getContentTweaks($position)}
        }
      `}
  }
`
