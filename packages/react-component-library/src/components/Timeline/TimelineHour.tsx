import React from 'react'
import { isAfter } from 'date-fns'

import { StyledHour } from './partials/StyledHour'
import { StyledHourTitle } from './partials/StyledHourTitle'

interface TimelineHourProps {
  date: Date
  render: (width: number, time: string) => React.ReactElement
  time: string
  timelineEndDate: Date
  width: number
}

function renderDefault({ width, time }: { width: number; time: string }) {
  return (
    <StyledHour $width={width} data-testid="timeline-hour">
      <StyledHourTitle data-testid="timeline-hour-title">
        {time}
      </StyledHourTitle>
    </StyledHour>
  )
}

export const TimelineHour: React.FC<TimelineHourProps> = ({
  date,
  render,
  time,
  timelineEndDate,
  width,
  ...rest
}) => {
  if (isAfter(date, timelineEndDate)) return null

  const child = render ? render(width, time) : renderDefault({ width, time })

  return React.cloneElement(child, {
    role: 'columnheader',
    ...rest,
  })
}

TimelineHour.displayName = 'TimelineHour'
