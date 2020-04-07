import React, { useContext } from 'react'

import { DAY_WIDTH } from './constants'
import { TimelineContext } from './context'
import { useTimelinePosition } from './hooks/useTimelinePosition'

export type TodayMarkerProps = ComponentWithClass

export const TodayMarker: React.FC<TodayMarkerProps> = () => {
  const {
    state: { today },
  } = useContext(TimelineContext)

  const { offset, isBeforeStart, isAfterEnd } = useTimelinePosition(today, null)

  if (isBeforeStart || isAfterEnd) return null

  return (
    <div
      className="timeline__today-marker"
      style={{ left: `${offset * DAY_WIDTH}px` }}
      data-testid="today-marker"
    />
  )
}

TodayMarker.displayName = 'TodayMarker'
