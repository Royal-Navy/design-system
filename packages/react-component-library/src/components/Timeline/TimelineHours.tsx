import React, { useContext } from 'react'

import { getKey, ValueOf } from '../../helpers'
import { StyledHours } from './partials/StyledHours'
import { DISPLAY_THRESHOLDS, TIMELINE_BLOCK_SIZE } from './constants'
import { TimelineContext } from './context'
import { TimelineColumnHeader } from './TimelineColumnHeader'
import { TimelineHour } from './TimelineHour'
import { TimelineHeaderRow } from './TimelineHeaderRow'

export type BlockSizeType = ValueOf<typeof TIMELINE_BLOCK_SIZE>

export interface TimelineHoursWithRenderContentProps {
  /**
   * Number of hours per block in a day.
   */
  blockSize?: BlockSizeType
  /**
   * Supply a custom presentation layer.
   */
  render: (props: { width: number; time: string }) => React.ReactElement
}

export interface TimelineHoursWithChildrenProps {
  blockSize?: BlockSizeType
  render?: never
}

export type TimelineHoursProps =
  | TimelineHoursWithRenderContentProps
  | TimelineHoursWithChildrenProps

export const TimelineHours = ({ render }: TimelineHoursProps) => {
  const { state } = useContext(TimelineContext)
  const { currentScaleOption, days, hours } = state

  if (!currentScaleOption) {
    return null
  }

  const isBelowThreshold =
    currentScaleOption.widths.hour < DISPLAY_THRESHOLDS.HOUR

  if (!hours || hours.length === 1) {
    return null
  }

  const rowChildren = isBelowThreshold ? (
    <TimelineColumnHeader name="No hours" data-testid="timeline-no-hours" />
  ) : (
    <StyledHours>
      {days.map(({ date }) => {
        return hours.map(({ hourIndex, time }) => (
          <TimelineHour
            date={date}
            key={getKey('timeline-hour', `${date.toString()}-${hourIndex}`)}
            render={render}
            time={time}
            timelineEndDate={currentScaleOption.to}
            width={currentScaleOption.widths.hour}
          />
        ))
      })}
    </StyledHours>
  )

  return (
    <TimelineHeaderRow
      className="timeline__hours"
      isShort
      name="Hours"
      data-testid="timeline-hours"
    >
      {rowChildren}
    </TimelineHeaderRow>
  )
}

TimelineHours.displayName = 'TimelineHours'
