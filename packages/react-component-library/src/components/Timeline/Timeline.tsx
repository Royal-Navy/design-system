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

export interface TimelineProps extends ComponentWithClass {
  children: React.ReactElement<TimelineRowsProps>
  startDate?: Date
  today?: Date
}

export const Timeline: React.FC<TimelineProps> = ({
  children,
  startDate,
  today,
}) => {
  return (
    <TimelineProvider startDate={startDate} today={today}>
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
