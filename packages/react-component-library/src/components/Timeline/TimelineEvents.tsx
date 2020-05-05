import React from 'react'

import { TimelineEventProps } from '.'

export interface TimelineEventsProps extends ComponentWithClass {
  children:
    | React.ReactElement<TimelineEventProps>
    | React.ReactElement<TimelineEventProps>[]
}

export const TimelineEvents: React.FC<TimelineEventsProps> = props => {
  const { children, ...rest } = props

  return <div {...rest}>{children}</div>
}

TimelineEvents.displayName = 'TimelineEvents'
