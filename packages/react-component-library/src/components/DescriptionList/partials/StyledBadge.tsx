import styled, { css } from 'styled-components'
import { spacing } from '@royalnavy/design-tokens'

import { Badge } from '../../Badge'
import { StyledDescriptionListProps } from './StyledDescriptionList'

export const StyledBadge = styled(Badge)<StyledDescriptionListProps>`
  display: none;

  ${({ $isCollapsible }) =>
    $isCollapsible &&
    css`
      display: inline-block;
      margin-left: ${spacing('4')};
    `}
`
