import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { StyledDataListProps } from './StyledDataList'

const { animation, color } = selectors

export const StyledSheet = styled.div<StyledDataListProps>`
  > * + * {
    border-top: 1px solid ${color('neutral', '100')};
  }

  ${({ $isCollapsible }) =>
    $isCollapsible &&
    css`
      transform: scale(1, 0);
      transform-origin: 0 0;
      height: 0;
      overflow: hidden;
      transition: all ${animation('default')};
      background-color: ${color('neutral', 'white')};
    `}

  ${({ $isCollapsible, $isOpen }) =>
    $isCollapsible &&
    $isOpen &&
    css`
      transform: scale(1, 1);
      height: auto;
    `}
`
