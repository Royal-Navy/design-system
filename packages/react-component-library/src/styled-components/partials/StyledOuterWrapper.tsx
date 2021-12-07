import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { COMPONENT_SIZE, ComponentSizeType } from '../../components/Forms'

const { color } = selectors

export const BORDER_RADIUS = {
  [COMPONENT_SIZE.SMALL]: '10px',
  [COMPONENT_SIZE.FORMS]: '15px',
}

export const BORDER_WIDTH = {
  [COMPONENT_SIZE.SMALL]: '2px',
  [COMPONENT_SIZE.FORMS]: '3px',
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
      border: ${BORDER_WIDTH[$size]} solid transparent;
      border-radius: ${BORDER_RADIUS[$size]};
      box-shadow: 0 0 0 1px ${color('neutral', '200')};
      transition: border-color 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    `

    if ($hasFocus) {
      return css`
        ${defaults};
        border: ${BORDER_WIDTH[$size]} solid ${color('action', '500')};
        box-shadow: 0 0 0 ${BORDER_WIDTH[$size]} ${color('action', '100')};
      `
    }

    if ($isDisabled) {
      return css`
        ${defaults};
        background-color: ${color('neutral', '000')};
        border: ${BORDER_WIDTH[$size]} solid transparent;
        box-shadow: unset;

        * {
          cursor: not-allowed;
        }
      `
    }

    if ($isInvalid) {
      return css`
        ${defaults};
        border: ${BORDER_WIDTH[$size]} solid ${color('danger', '800')};
        box-shadow: unset;
      `
    }

    return defaults
  }}
`
