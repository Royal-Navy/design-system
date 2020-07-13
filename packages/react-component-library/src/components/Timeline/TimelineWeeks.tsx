import React from 'react'
import classNames from 'classnames'
import { format, differenceInDays, isAfter } from 'date-fns'

import { DATE_WEEK_FORMAT } from './constants'
import { formatPx, isOdd } from './helpers'
import { withKey } from '../../helpers'
import { TimelineContext } from './context'
import { PropsWithClassName } from '../../types/PropsWithClassName'

export interface TimelineWeeksWithRenderContentProps
  extends PropsWithClassName {
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

export interface TimelineWeeksWithChildrenProps extends PropsWithClassName {
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
    <TimelineContext.Consumer>
      {({
        state: {
          months,
          weeks,
          endDate: timelineEndDate,
          options: { dayWidth },
        },
      }) => {
        const wrapperStyles = timelineEndDate
          ? {
              width: formatPx(
                dayWidth,
                differenceInDays(timelineEndDate, months[0].startDate) + 1
              ),
              overflow: 'hidden',
            }
          : null

        return (
          <div
            className="timeline__weeks"
            data-testid="timeline-weeks"
            style={wrapperStyles}
          >
            {weeks.map(({ startDate }, index) => {
              if (isAfter(startDate, timelineEndDate)) return null

              const diff = differenceInDays(
                new Date(startDate),
                new Date(months[0].startDate)
              )

              const offsetPx = formatPx(
                dayWidth,
                diff < 0 ? -Math.abs(diff) : 0
              )
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
              const child = render ? render(...args) : renderDefault(...args)

              return withKey(child, 'timeline-week', startDate.toString())
            })}
          </div>
        )
      }}
    </TimelineContext.Consumer>
  )
}

TimelineWeeks.displayName = 'TimelineWeeks'
