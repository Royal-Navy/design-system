import { color, fontSize } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { NavigationCardColorType } from '../types'

interface StyledTitleProps {
  $color: NavigationCardColorType
}

/**
 * Wraps the consumer-supplied link. The descendant anchor is styled as the
 * card title and given a stretched `::after` overlay so the entire card is
 * clickable while remaining a single link in the accessibility tree.
 */
export const StyledTitle = styled.span<StyledTitleProps>`
  font-size: ${fontSize('l')};
  font-weight: 700;
  line-height: 1.3;

  a {
    color: ${color('neutral', '700')};
    text-decoration: none;
    outline: 0;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 3px;
    }

    &:hover,
    &:focus-visible {
      text-decoration: none;
    }

    &:focus-visible::after {
      box-shadow: 0 0 0 3px ${({ $color }) => color($color, '200')};
    }
  }
`
