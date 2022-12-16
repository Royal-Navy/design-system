import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledHeaderRow } from './partials/StyledHeaderRow'

interface TimelineHeaderRowProps extends ComponentWithClass {
  children: React.ReactElement | React.ReactElement[]
  name: string
  isShort?: boolean
}

export const TimelineHeaderRow: React.FC<TimelineHeaderRowProps> = (props) => (
  <StyledHeaderRow isHeader {...props} />
)

TimelineHeaderRow.displayName = 'TimelineHeaderRow'
