import React from 'react'
import { format, getDaysInMonth } from 'date-fns'
import classNames from 'classnames'

import { formatPx, getKey } from './helpers'
import { TimelineContext } from './context'
import { DATE_MONTH_FORMAT } from './constants'

export interface TimelineMonthsWithRenderContentProps
  extends ComponentWithClass {
  render: (
    index: number,
    dayWidth: number,
    daysTotal: number,
    startDate: Date
  ) => React.ReactNode
}

export interface TimelineMonthsWithChildrenProps extends ComponentWithClass {
  render?: never
}

export type TimelineMonthsProps =
  | TimelineMonthsWithRenderContentProps
  | TimelineMonthsWithChildrenProps

function renderDefault(
  index: number,
  dayWidth: number,
  daysTotal: number,
  startDate: Date
) {
  const wrapperClasses = classNames(
    'timeline__month',
    'timeline__month--renderDefault'
  )

  const titleClasses = classNames(
    'timeline__month-title',
    'timeline__month-title--renderDefault'
  )

  return (
    <div
      className={wrapperClasses}
      key={getKey('timeline-month', index)}
      style={{
        width: formatPx(dayWidth, daysTotal),
      }}
      data-testid="timeline-month"
    >
      <span className={titleClasses}>
        {format(startDate, DATE_MONTH_FORMAT)}
      </span>
    </div>
  )
}

export const TimelineMonths: React.FC<TimelineMonthsProps> = ({ render }) => {
  return (
    <TimelineContext.Consumer>
      {({
        state: {
          months,
          options: { dayWidth },
        },
      }) => (
        <div className="timeline__months" data-testid="timeline-months">
          {months &&
            months.map(({ startDate }, index) => {
              const daysTotal = getDaysInMonth(startDate)

              return render
                ? render(index, dayWidth, daysTotal, startDate)
                : renderDefault(index, dayWidth, daysTotal, startDate)
            })}
        </div>
      )}
    </TimelineContext.Consumer>
  )
}

TimelineMonths.displayName = 'TimelineMonths'
