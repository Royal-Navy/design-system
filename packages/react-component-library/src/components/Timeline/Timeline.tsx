import React from 'react'

import { TimelineProvider } from './context'

import {
  TimelineDays,
  TimelineMonths,
  TimelineRowsProps,
  TimelineSide,
  TimelineTodayMarker,
  TimelineWeeks,
} from '.'
import { TimelineOptions } from './context/types'
import { DEFAULTS } from './constants'

export interface TimelineProps extends ComponentWithClass {
  children: React.ReactElement<TimelineRowsProps>
  dayWidth?: number,
  startDate?: Date
  today?: Date
}

export const Timeline: React.FC<TimelineProps> = ({
  children,
  dayWidth = DEFAULTS.DAY_WIDTH,
  startDate,
  today,
}) => {
  const options: TimelineOptions = {
    dayWidth,
    rangeInMonths: DEFAULTS.RANGE_IN_MONTHS,
  }

  return (
    <TimelineProvider startDate={startDate} today={today} options={options}>
      <article className="timeline">
        <TimelineSide>{children}</TimelineSide>
        <div className="timeline__inner">
          <header className="timeline__header">
            <TimelineTodayMarker />
            <TimelineMonths />
            <TimelineWeeks />
            <TimelineDays />
          </header>
          <main className="timeline__main">{children}</main>
        </div>
      </article>
    </TimelineProvider>
  )
}

Timeline.displayName = 'Timeline'
