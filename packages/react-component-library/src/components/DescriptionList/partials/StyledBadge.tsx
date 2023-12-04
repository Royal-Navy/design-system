import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { Badge } from '../../Badge'
import { StyledDescriptionListProps } from './StyledDescriptionList'

const { spacing } = selectors

export const StyledBadge = styled(Badge)<StyledDescriptionListProps>`
  display: none;

  ${({ $isCollapsible }) =>
    $isCollapsible &&
    css`
      display: inline-block;
      margin-left: ${spacing('4')};
    `}
`
