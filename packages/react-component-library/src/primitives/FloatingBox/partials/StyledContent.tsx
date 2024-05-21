import styled, { css } from 'styled-components'
import { color, mq, spacing } from '@royalnavy/design-tokens'

import { FloatingBoxSchemeType } from '../types'
import { FLOATING_BOX_SCHEME } from '../constants'
import { StyledArrow } from './StyledArrow'

interface StyledContentProps {
  $scheme: FloatingBoxSchemeType
}

const schemeStyleMap = {
  [FLOATING_BOX_SCHEME.LIGHT]: css`
    background: ${color('neutral', 'white')};
    border: ${color('neutral', '100')} solid ${spacing('px')};

    ${StyledArrow} {
      &::before {
        border-color: ${color('neutral', '100')} transparent;
      }

      &::after {
        border-color: ${color('neutral', 'white')} transparent;
      }
    }
  `,

  [FLOATING_BOX_SCHEME.DARK]: css`
    background: ${color('neutral', '700')};
    border: ${color('neutral', '700')} solid ${spacing('px')};
    color: ${color('neutral', 'white')};

    ${StyledArrow} {
      &::before {
        border-color: transparent;
      }

      &::after {
        border-color: ${color('neutral', '700')} transparent;
      }
    }
  `,
}

export const StyledContent = styled.div<StyledContentProps>`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background: ${color('neutral', 'white')};
  box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.12);

  ${({ $scheme }) => $scheme && schemeStyleMap[$scheme]}

  ${mq({ gte: 'xs' })`
    position: relative;
    top: auto;
    left: auto;
    padding: 0;
    border-radius: 3px;
  `}
`
