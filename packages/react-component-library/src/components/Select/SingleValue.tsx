import React from 'react'
import { SingleValueProps } from 'react-select/src/components/SingleValue'

import { BADGE_SIZE } from '../Badge'
import { StyledBadge } from './partials/StyledBadge'
import { SelectOptionWithBadgeType } from './Option'
import { StyledSingleValue } from './partials/StyledSingleValue'

export const SingleValue: React.FC<
  SingleValueProps<SelectOptionWithBadgeType>
> = ({ children, ...props }) => {
  const { badge } = props.data

  return (
    <StyledSingleValue data-testid="select-single-value" {...props}>
      <span data-testid="select-single-value-label">{children}</span>
      {badge && <StyledBadge size={BADGE_SIZE.XSMALL}>{badge}</StyledBadge>}
    </StyledSingleValue>
  )
}
