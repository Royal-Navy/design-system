import React from 'react'
import { selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

import { FLOATING_BOX_SCHEME } from '.'
import { FloatingBoxSchemeType } from './types'

const { breakpoint, color, spacing } = selectors

interface StyledFloatingBoxContentProps {
  $scheme: FloatingBoxSchemeType
}

export const StyledFloatingBoxContent = styled.div<
  StyledFloatingBoxContentProps
>`
  position: absolute;
  top: 0;
  left: 0;
  background: ${color('neutral', 'white')};
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.12);

  @media only screen and (min-width: ${breakpoint('xs').breakpoint}) {
    position: relative;
    top: auto;
    left: auto;
    height: auto;
    width: auto;
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

interface FloatingBoxContentProps {
  contentId?: string
  scheme?: FloatingBoxSchemeType
}

export const FloatingBoxContent: React.FC<FloatingBoxContentProps> = ({
  children,
  contentId,
  scheme,
}) => (
  <StyledFloatingBoxContent
    $scheme={scheme}
    id={contentId}
    data-testid="floating-box-content"
  >
    {children}
  </StyledFloatingBoxContent>
)

StyledFloatingBoxContent.displayName = 'StyledFloatingBoxContent'
