import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { COMPONENT_SIZE, ComponentSizeType } from '../../components/Forms'

const { color } = selectors

// Note: These are used with box shadows rather than borders, and for box
// shadows the values are taken to the inner edge of the shadow (rather
// than the outer edge for borders). To get the value that would be used
// with a normal border, the border width should be added to the radius
// value.
export const BORDER_RADIUS = {
  [COMPONENT_SIZE.SMALL]: '8px',
  [COMPONENT_SIZE.FORMS]: '12px',
}

export const BORDER_WIDTH = {
  [COMPONENT_SIZE.SMALL]: '2px',
  [COMPONENT_SIZE.FORMS]: '3px',
}

const SECONDARY_BORDER_WIDTH = {
  [COMPONENT_SIZE.SMALL]: '4px',
  [COMPONENT_SIZE.FORMS]: '6px',
}

export interface StyledOuterWrapperProps {
  $hasFocus?: boolean
  $isDisabled?: boolean
  $isInvalid?: boolean
  $size?: ComponentSizeType
}

export const StyledOuterWrapper = styled.div<StyledOuterWrapperProps>`
  ${({ $hasFocus, $isDisabled, $isInvalid, $size = COMPONENT_SIZE.FORMS }) => {
    const defaults = css`
      background-color: ${color('neutral', 'white')};
      border: none;
      border-radius: ${BORDER_RADIUS[$size]};
      box-shadow: 0 0 0 1px ${color('neutral', '200')};
      transition: border-color 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    `

    if ($hasFocus) {
      return css`
        ${defaults};
        box-shadow: 0 0 0 ${BORDER_WIDTH[$size]} ${color('action', '500')},
          0 0 0 ${SECONDARY_BORDER_WIDTH[$size]} ${color('action', '100')};
      `
    }

    if ($isDisabled) {
      return css`
        ${defaults};
        background-color: ${color('neutral', '000')};
        box-shadow: unset;

        * {
          cursor: not-allowed;
        }
      `
    }

    if ($isInvalid) {
      return css`
        ${defaults};
        box-shadow: 0 0 0 ${BORDER_WIDTH[$size]} ${color('danger', '800')};
      `
    }

    return defaults
  }}
`
