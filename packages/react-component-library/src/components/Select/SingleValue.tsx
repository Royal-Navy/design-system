import React from 'react'
import { components } from 'react-select'
import { selectors } from '@royalnavy/design-tokens'
import { SingleValueProps } from 'react-select/src/components/SingleValue'
import styled from 'styled-components'

import { Badge, BADGE_SIZE } from '../Badge'
import { SelectOptionWithBadgeType } from './Option'

const { fontSize, spacing } = selectors

const StyledSingleValue = styled(components.SingleValue)`
  font-size: ${fontSize('base')};
  overflow: visible;
  
  &&& {
    margin: ${spacing('3')} 0 0 0;
  }
`

const StyledBadge = styled(Badge)`
  transform: translateY(-1px);
  margin-left: ${spacing('2')};
`

export const SingleValue: React.FC<SingleValueProps<
  SelectOptionWithBadgeType
>> = ({ children, ...props }) => {
  const { badge } = props.data

  return (
    <StyledSingleValue data-testid="select-single-value" {...props}>
      <span data-testid="select-single-value-label">{children}</span>
      {badge && <StyledBadge size={BADGE_SIZE.XSMALL}>{badge}</StyledBadge>}
    </StyledSingleValue>
  )
}
