import React from 'react'

import { TimelineProvider } from './context'
import { Side, TodayMarker, Months, Weeks, RowProps } from '.'
import { RowsProps } from './Rows'

export interface TimelineProps extends ComponentWithClass {
  children: React.ReactElement<RowsProps>
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
        <Side>{children}</Side>
        <div className="timeline__inner">
          <header className="timeline__header">
            <TodayMarker />
            <Months />
            <Weeks />
          </header>
          <main className="timeline__main">
            {children}
          </main>
        </div>
      </article>
    </TimelineProvider>
  )
}

Timeline.displayName = 'Timeline'
