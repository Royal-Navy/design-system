import React, { useContext } from 'react'

import { TimelineContext } from './context'
import { useTimelinePosition } from './hooks/useTimelinePosition'

export type TimelineTodayMarkerProps = ComponentWithClass

export const TimelineTodayMarker: React.FC<TimelineTodayMarkerProps> = () => {
  const {
    state: { today },
  } = useContext(TimelineContext)

  const { offset, isBeforeStart, isAfterEnd } = useTimelinePosition(today, null)

  if (isBeforeStart || isAfterEnd) return null

  return (
    <div
      className="timeline__today-marker"
      style={{ left: offset }}
      data-testid="timeline-today-marker"
    />
  )
}

TimelineTodayMarker.displayName = 'TimelineTodayMarker'
