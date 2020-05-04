import React from 'react'
import classNames from 'classnames'
import { format, differenceInDays } from 'date-fns'

import { DATE_WEEK_FORMAT } from './constants'
import { formatPx, getKey, isOdd } from './helpers'
import { TimelineContext } from './context'

export interface TimelineWeeksWithRenderContentProps
  extends ComponentWithClass {
  render: (
    index: number,
    isOddNumber: boolean,
    offsetPx: string,
    widthPx: string,
    dayWidth: number,
    daysTotal: number,
    startDate: Date
  ) => React.ReactNode
}

export interface TimelineWeeksWithChildrenProps extends ComponentWithClass {
  render?: never
}

export type TimelineWeeksProps =
  | TimelineWeeksWithRenderContentProps
  | TimelineWeeksWithChildrenProps

function renderDefault(
  index: number,
  isOddNumber: boolean,
  offsetPx: string,
  widthPx: string,
  dayWidth: number,
  daysTotal: number,
  startDate: Date
) {
  const wrapperClasses = classNames(
    'timeline__week',
    'timeline__week--renderDefault',
    {
      'timeline__week--alt': isOddNumber,
    }
  )

  const titleClasses = classNames(
    'timeline__week-title',
    'timeline__week-title--renderDefault'
  )

  return (
    <div
      className={wrapperClasses}
      key={getKey('timeline-week', index)}
      style={{
        marginLeft: offsetPx,
        width: widthPx,
      }}
      data-testid="timeline-week"
    >
      <span className={titleClasses}>
        {format(startDate, DATE_WEEK_FORMAT)}
      </span>
    </div>
  )
}

export const TimelineWeeks: React.FC<TimelineWeeksProps> = ({ render }) => {
  return (
    <div className="timeline__weeks" data-testid="timeline-weeks">
      <TimelineContext.Consumer>
        {({
          state: {
            months,
            weeks,
            options: { dayWidth },
          },
        }) => {
          return weeks.map(({ startDate }, index) => {
            const diff = differenceInDays(
              new Date(startDate),
              new Date(months[0].startDate)
            )

            const offsetPx = formatPx(dayWidth, diff < 0 ? -Math.abs(diff) : 0)
            const widthPx = formatPx(dayWidth, 7)

            const isOddNumber = isOdd(index)

            const args = [
              index,
              isOddNumber,
              offsetPx,
              widthPx,
              dayWidth,
              7,
              startDate,
            ]

            // @ts-ignore
            return render ? render(...args) : renderDefault(...args)
          })
        }}
      </TimelineContext.Consumer>
    </div>
  )
}

TimelineWeeks.displayName = 'TimelineWeeks'
