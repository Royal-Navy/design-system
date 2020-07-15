import React from 'react'
import { format, endOfMonth, differenceInDays, min, max } from 'date-fns'
import classNames from 'classnames'

import { formatPx } from './helpers'
import { withKey } from '../../helpers'
import { TimelineContext } from './context'
import { DATE_MONTH_FORMAT } from './constants'

export interface TimelineMonthsWithRenderContentProps
  extends ComponentWithClass {
  render: (
    index: number,
    dayWidth: number,
    daysTotal: number,
    startDate: Date
  ) => React.ReactElement
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
): React.ReactElement {
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
          days,
          months,
          options: { dayWidth },
        },
      }) => {
        return (
          <div className="timeline__months" data-testid="timeline-months">
            {months &&
              months.map(({ startDate }, index) => {
                const firstDateDisplayed = max([startDate, days[0].date])
                const lastDateDisplayed = min([
                  endOfMonth(startDate),
                  days[days.length - 1].date,
                ])
                const daysTotal =
                  differenceInDays(lastDateDisplayed, firstDateDisplayed) + 1

                const child = render
                  ? render(index, dayWidth, daysTotal, startDate)
                  : renderDefault(index, dayWidth, daysTotal, startDate)

                return withKey(child, 'timeline-month', startDate.toString())
              })}
          </div>
        )
      }}
    </TimelineContext.Consumer>
  )
}

TimelineMonths.displayName = 'TimelineMonths'
