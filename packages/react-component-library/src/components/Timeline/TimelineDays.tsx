import React, { useContext } from 'react'

import { getKey } from '../../helpers'
import { StyledDays } from './partials/StyledDays'
import { TimelineContext } from './context'
import { TimelineDay } from './TimelineDay'
import { TimelineHeaderRow } from './TimelineHeaderRow'

export interface TimelineDaysWithRenderContentProps {
  render: (index: number, dayWidth: number, date: Date) => React.ReactElement
}

export interface TimelineDaysWithChildrenProps {
  render?: never
}

export type TimelineDaysProps =
  | TimelineDaysWithRenderContentProps
  | TimelineDaysWithChildrenProps

export const TimelineDays: React.FC<TimelineDaysProps> = ({
  render,
  ...rest
}) => {
  const {
    state: { currentScaleOption, days },
  } = useContext(TimelineContext)

  return (
    <TimelineHeaderRow
      className="timeline__days"
      isShort
      name="Days"
      data-testid="timeline-days"
      {...rest}
    >
      <StyledDays>
        {days.map(({ date }, index) => (
          <TimelineDay
            date={date}
            dayWidth={currentScaleOption.widths.day}
            index={index}
            key={getKey('timeline-day', date.toString())}
            render={render}
            timelineEndDate={currentScaleOption.to}
          />
        ))}
      </StyledDays>
    </TimelineHeaderRow>
  )
}

TimelineDays.displayName = 'TimelineDays'
