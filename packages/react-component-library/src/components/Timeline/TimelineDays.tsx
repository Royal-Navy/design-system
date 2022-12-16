import React, { memo, useContext } from 'react'

import { getKey } from '../../helpers'
import { StyledDays } from './partials/StyledDays'
import { TimelineContext } from './context'
import { TimelineDay } from './TimelineDay'
import { TimelineHeaderRow } from './TimelineHeaderRow'
import { DISPLAY_THRESHOLDS } from './constants'
import { TimelineColumnHeader } from './TimelineColumnHeader'

export interface TimelineDaysWithRenderContentProps {
  /**
   * Supply a custom presentation layer.
   */
  render: (props: {
    index: number
    dayWidth: number
    date: Date
  }) => React.ReactElement
}

export interface TimelineDaysWithChildrenProps {
  render?: never
}

export type TimelineDaysProps =
  | TimelineDaysWithRenderContentProps
  | TimelineDaysWithChildrenProps

export const TimelineDays: React.FC<TimelineDaysProps> = memo(
  ({ render, ...rest }) => {
    const {
      state: { currentScaleOption, days },
    } = useContext(TimelineContext)

    if (!currentScaleOption) {
      return null
    }

    const isBelowThreshold =
      currentScaleOption.widths.day < DISPLAY_THRESHOLDS.DAY

    const rowChildren = isBelowThreshold ? (
      <TimelineColumnHeader data-testid="timeline-no-days" name="No days" />
    ) : (
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
    )

    return (
      <TimelineHeaderRow
        className="timeline__days"
        isShort
        name="Days"
        data-testid="timeline-days"
        {...rest}
      >
        {rowChildren}
      </TimelineHeaderRow>
    )
  }
)

TimelineDays.displayName = 'TimelineDays'
