import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { TIMELINE_BORDER_COLOR } from '../constants'

const { color, spacing, zIndex } = selectors

export interface StyledMonthProps {
  $hasThickBorder?: boolean
  $width: number
}

export const StyledMonth = styled.div<StyledMonthProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 4rem;
  border-bottom: ${spacing('px')} solid ${TIMELINE_BORDER_COLOR};
  width: ${({ $width }) => `${$width}px`};

  &:last-of-type {
    border-right: none;
  }

  &::after {
    position: absolute;
    right: -1px;
    top: 0;
    content: '';
    display: inline-block;
    width: 1rem;
    height: 100vh;
    border-right: ${({ $hasThickBorder }) =>
      $hasThickBorder
        ? css`
            2px solid ${color('neutral', '200')}
          `
        : css`
            ${spacing('px')} dashed ${color('neutral', '200')}
          `};
    z-index: ${zIndex('body', 1)};
  }
`
