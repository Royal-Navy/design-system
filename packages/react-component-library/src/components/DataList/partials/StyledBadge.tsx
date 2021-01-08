import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { Badge } from '../../Badge'
import { StyledDataListProps } from './StyledDataList'

const { spacing } = selectors

export const StyledBadge = styled(Badge)<StyledDataListProps>`
  display: none;

  ${({ $isCollapsible }) =>
    $isCollapsible &&
    css`
      display: inline-block;
      margin-left: ${spacing('4')};
    `}
`
