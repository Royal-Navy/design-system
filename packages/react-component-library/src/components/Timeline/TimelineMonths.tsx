import React from 'react'
import { format, getDaysInMonth } from 'date-fns'

import { formatPx, getKey } from './helpers'
import { TimelineContext } from './context'
import { DATE_MONTH_FORMAT } from './constants'

export type TimelineMonthsProps = ComponentWithClass

export const TimelineMonths: React.FC<TimelineMonthsProps> = () => {
  return (
    <TimelineContext.Consumer>
      {({ state: { months, options} }) => (
        <div className="timeline__months">
          {months &&
            months.map(({ startDate }, index) => {
              const days = getDaysInMonth(startDate)

              return (
                <div
                  className="timeline__month"
                  key={getKey('timeline-month', index)}
                  style={{
                    width: formatPx(options.dayWidth, days),
                  }}
                  data-testid="timeline-month"
                >
                  <span
                    className="timeline__month-title"
                    data-testid="timeline-month-title"
                  >
                    {format(startDate, DATE_MONTH_FORMAT)}
                  </span>
                </div>
              )
            })}
        </div>
      )}
    </TimelineContext.Consumer>
  )
}

TimelineMonths.displayName = 'TimelineMonths'
