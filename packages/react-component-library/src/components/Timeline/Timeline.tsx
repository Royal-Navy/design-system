import React from 'react'

import { getKey } from './helpers'
import { TimelineProvider } from './context'

import { NO_DATA_MESSAGE } from './constants'
import { Side, Row, TodayMarker, Months, Weeks } from '.'

export interface TimelineProps extends ComponentWithClass {
  rowData: any[]
  startDate?: Date
  today?: Date
}

export const Timeline: React.FC<TimelineProps> = ({
  rowData,
  startDate,
  today,
}) => {
  const isEmpty = !rowData || rowData.length === 0

  return (
    <TimelineProvider startDate={startDate} today={today}>
      <article className="timeline">
        <Side rowData={rowData} />
        <div className="timeline__inner">
          <header className="timeline__header">
            <TodayMarker />
            <Months />
            <Weeks />
          </header>
          <main className="timeline__main">
            {isEmpty && (
              <span className="timeline__empty" data-testid="timeline-no-data">
                {NO_DATA_MESSAGE}
              </span>
            )}

            {rowData &&
              rowData.map(({ events }, index) => {
                return (
                  <Row events={events} key={getKey('timeline-row', index)} />
                )
              })}
          </main>
        </div>
      </article>
    </TimelineProvider>
  )
}

Timeline.displayName = 'Timeline'
