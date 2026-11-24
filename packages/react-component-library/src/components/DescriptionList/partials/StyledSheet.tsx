import { styled, css } from 'styled-components'
import { themeColor } from '@royalnavy/design-tokens'

import { StyledDescriptionListProps } from './StyledDescriptionList'

export const StyledSheet = styled.div<StyledDescriptionListProps>`
  height: auto;
  z-index: 0;
  transition: 200ms all linear;

  > * + * {
    border-top: 1px solid ${themeColor('neutral', '100')};
  }

  ${({ $isCollapsible }) =>
    $isCollapsible &&
    css`
      transform: translateY(-100%);
      background-color: ${themeColor('neutral', 'white')};
      overflow: hidden;
    `}

  ${({ $isCollapsible, $isOpen }) =>
    $isCollapsible &&
    $isOpen &&
    css`
      transform: translateY(0%);
    `}
`
