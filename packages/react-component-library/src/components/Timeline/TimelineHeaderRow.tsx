import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledHeaderRow } from './partials/StyledHeaderRow'

interface TimelineHeaderRowProps extends ComponentWithClass {
  children: React.ReactElement | React.ReactElement[]
  name: string
  isShort?: boolean
}

export const TimelineHeaderRow = ({
  isShort,
  ...rest
}: TimelineHeaderRowProps) => (
  <StyledHeaderRow isHeader $isShort={isShort} {...rest} />
)

TimelineHeaderRow.displayName = 'TimelineHeaderRow'
