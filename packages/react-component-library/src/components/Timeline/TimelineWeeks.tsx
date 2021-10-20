import React, { memo, useContext } from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { getKey } from '../../helpers'
import { StyledWeeks } from './partials/StyledWeeks'
import { TimelineContext } from './context'
import { TimelineHeaderRow } from './TimelineHeaderRow'
import { TimelineWeek } from './TimelineWeek'
import { DISPLAY_THRESHOLDS } from './constants'
import { TimelineColumnHeader } from './TimelineColumnHeader'

export interface TimelineWeeksWithRenderContentProps
  extends ComponentWithClass {
  /**
   * Supply a custom presentation layer.
   */
  render: (
    index: number,
    isOddNumber: boolean,
    offsetPx: string,
    widthPx: string,
    dayWidth: number,
    daysTotal: number,
    startDate: Date
  ) => React.ReactElement
}

export interface TimelineWeeksWithChildrenProps extends ComponentWithClass {
  render?: never
}

export type TimelineWeeksProps =
  | TimelineWeeksWithRenderContentProps
  | TimelineWeeksWithChildrenProps

export const TimelineWeeks: React.FC<TimelineWeeksProps> = memo(({
  render,
  ...rest
}) => {
  const {
    state: { currentScaleOption, days, weeks },
  } = useContext(TimelineContext)

  const isBelowThreshold =
    currentScaleOption.widths.day * 7 < DISPLAY_THRESHOLDS.WEEK

  const rowChildren = isBelowThreshold ? (
    <TimelineColumnHeader
      aria-label="No weeks"
      data-testid="timeline-no-weeks"
    />
  ) : (
    <StyledWeeks>
      {weeks.map(({ startDate }, index) => (
        <TimelineWeek
          days={days}
          dayWidth={currentScaleOption.widths.day}
          index={index}
          key={getKey('timeline-week', startDate.toString())}
          render={render}
          startDate={startDate}
        />
      ))}
    </StyledWeeks>
  )

  return (
    <TimelineHeaderRow
      className="timeline__weeks"
      isShort
      name="Weeks"
      data-testid="timeline-weeks"
      {...rest}
    >
      {rowChildren}
    </TimelineHeaderRow>
  )
})

TimelineWeeks.displayName = 'TimelineWeeks'
