import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { TimelineRow } from './TimelineRow'

interface TimelineHeaderRowProps extends ComponentWithClass {
  children: React.ReactElement | React.ReactElement[]
  hasSide: boolean
  name: string
  renderRowHeader?: (name: string) => React.ReactElement
}

export const TimelineHeaderRow: React.FC<TimelineHeaderRowProps> = (props) => (
  <TimelineRow rowHeaderClassName="timeline__row-header--header" {...props} />
)

TimelineHeaderRow.displayName = 'TimelineHeaderRow'
