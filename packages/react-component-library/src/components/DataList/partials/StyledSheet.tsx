import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { StyledDataListProps } from './StyledDataList'

const { color } = selectors

export const StyledSheet = styled.div<StyledDataListProps>`
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
