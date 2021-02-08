import React, { useContext } from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledTodayMarker } from './partials/StyledTodayMarker'
import { StyledTodayMarkerWrapper } from './partials/StyledTodayMarkerWrapper'
import { TimelineContext } from './context'
import { useTimelinePosition } from './hooks'

export interface TimelineTodayMarkerWithRenderContentProps
  extends ComponentWithClass {
  render: (today: Date, offset: string) => React.ReactNode
}

export interface TimelineTodayMarkerWithChildrenProps
  extends ComponentWithClass {
  render?: never
}

export type TimelineTodayMarkerProps =
  | TimelineTodayMarkerWithRenderContentProps
  | TimelineTodayMarkerWithChildrenProps

function renderDefault({ offset }: { offset: string }) {
  return (
    <StyledTodayMarker
      data-testid="timeline-today-marker"
      style={{ left: offset }}
    />
  )
}

export const TimelineTodayMarker: React.FC<TimelineTodayMarkerProps> = ({
  render,
  ...rest
}) => {
  const {
    state: { today },
  } = useContext(TimelineContext)

  const { offset, startsBeforeStart, startsAfterEnd } = useTimelinePosition(
    today,
    null
  )

  if (startsBeforeStart || startsAfterEnd) return null

  return (
    <StyledTodayMarkerWrapper
      data-testid="timeline-today-marker-wrapper"
      role="presentation"
      {...rest}
    >
      {render ? render(today, offset) : renderDefault({ offset })}
    </StyledTodayMarkerWrapper>
  )
}

TimelineTodayMarker.displayName = 'TimelineTodayMarker'
