import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { TimelineEventProps } from '.'

export interface TimelineEventsProps extends ComponentWithClass {
  children:
    | React.ReactElement<TimelineEventProps>
    | React.ReactElement<TimelineEventProps>[]
}

export const TimelineEvents: React.FC<TimelineEventsProps> = (props) => {
  const { children, ...rest } = props

  return (
    <div data-testid="timeline-events" {...rest}>
      {children}
    </div>
  )
}

TimelineEvents.displayName = 'TimelineEvents'
