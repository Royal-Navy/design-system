import { selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

import { StyledTabSetProps } from './StyledTabSet'

const { mq, spacing } = selectors

interface StyledTabItemProps extends StyledTabSetProps {
  $isFullWidth: boolean
}

export const StyledTabItem = styled.li<StyledTabItemProps>`
  display: inline-block;

  ${({ $isFullWidth }) =>
    $isFullWidth &&
    css`
      flex: 1;
    `}

  ${({ $isScrollable }) =>
    $isScrollable &&
    css`
      padding-left: ${spacing('2')};

      &:last-child {
        padding-right: ${spacing('2')};
      }

      ${mq({ gte: 'm' })`
        width: auto;
      `}
    `}
`
