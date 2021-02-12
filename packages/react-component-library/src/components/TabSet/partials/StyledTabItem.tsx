import { selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

import { StyledTabSetProps } from './StyledTabSet'

const { mq, spacing } = selectors

export const StyledTabItem = styled.li<StyledTabSetProps>`
  display: inline-block;

  ${({ $isScrollable }) =>
    $isScrollable &&
    css`
      width: 100%;
      padding-left: ${spacing('2')};

      &:last-child {
        padding-right: ${spacing('2')};
      }

      ${mq({ gte: 'm' })`
        width: auto;
      `}
    `}
`
