import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { StyledDescriptionListProps } from './StyledDescriptionList'

const { color } = selectors

export const StyledSheet = styled.div<StyledDescriptionListProps>`
  height: auto;
  z-index: 0;
  transition: 200ms all linear;

  > * + * {
    border-top: 1px solid ${color('neutral', '100')};
  }

  ${({ $isCollapsible }) =>
    $isCollapsible &&
    css`
      transform: translateY(-100%);
      background-color: ${color('neutral', 'white')};
      overflow: hidden;
    `}

  ${({ $isCollapsible, $isOpen }) =>
    $isCollapsible &&
    $isOpen &&
    css`
      transform: translateY(0%);
    `}
`
