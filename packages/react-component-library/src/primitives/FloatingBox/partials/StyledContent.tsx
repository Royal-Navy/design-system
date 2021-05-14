import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import { FloatingBoxSchemeType } from '../types'
import { FLOATING_BOX_SCHEME } from '../constants'

const { breakpoint, color, spacing } = selectors

interface StyledContentProps {
  $scheme: FloatingBoxSchemeType
}

export const StyledContent = styled.div<StyledContentProps>`
  position: absolute;
  top: 0;
  left: 0;
  background: ${color('neutral', 'white')};
  margin: 0;
  padding: 0;
  box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.12);

  @media only screen and (min-width: ${breakpoint('xs').breakpoint}) {
    position: relative;
    top: auto;
    left: auto;
    padding: 0;
    border-radius: 3px;

    ${({ $scheme }) =>
      $scheme === FLOATING_BOX_SCHEME.LIGHT &&
      css`
        background: ${color('neutral', 'white')};
        border: ${color('neutral', '100')} solid ${spacing('px')};
      `}

    ${({ $scheme }) =>
      $scheme === FLOATING_BOX_SCHEME.DARK &&
      css`
        background: ${color('neutral', '700')};
        border: ${color('neutral', '700')} solid ${spacing('px')};
        color: ${color('neutral', 'white')};
      `}

    &:before {
      border-style: solid;
      content: '';
      display: block;
      position: absolute;
      width: 0;
      z-index: 0;
    }

    &:after {
      border-style: solid;
      content: '';
      display: block;
      position: absolute;
      width: 0;
      z-index: 1;
    }
  }
`
