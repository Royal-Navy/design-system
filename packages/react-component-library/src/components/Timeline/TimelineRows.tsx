import React from 'react'
import classNames from 'classnames'
import { differenceInDays, endOfWeek, max, min } from 'date-fns'

import { TimelineRowProps } from '.'
import { TimelineContext } from './context'
import { withKey } from '../../helpers'
import { formatPx, isOdd } from './helpers'
import { NO_DATA_MESSAGE, WEEK_START } from './constants'

export interface TimelineRowsProps extends ComponentWithClass {
  children:
    | React.ReactElement<TimelineRowProps>
    | React.ReactElement<TimelineRowProps>[]
  renderColumns?: (
    index: number,
    isOddNumber: boolean,
    offsetPx: string,
    widthPx: string
  ) => React.ReactElement
}

const noData = (
  <span className="timeline__empty" data-testid="timeline-no-data">
    {NO_DATA_MESSAGE}
  </span>
)

function renderDefaultColumns(
  index: number,
  isOddNumber: boolean,
  offsetPx: string,
  widthPx: string
) {
  const classes = classNames(
    'timeline__row-week',
    'timeline__row-week--renderDefault',
    {
      'timeline__row-week--alt': isOddNumber,
    }
  )

  return (
    <div
      className={classes}
      style={{
        marginLeft: offsetPx,
        width: widthPx,
      }}
    />
  )
}

function isPopulated<T>(itemOrArray: T) {
  if (!itemOrArray) {
    return false
  }

  if (!Array.isArray(itemOrArray)) {
    return true
  }

  return !!itemOrArray.length
}

export const TimelineRows: React.FC<TimelineRowsProps> = ({
  children,
  className,
  renderColumns,
}) => {
  const hasChildren = isPopulated(children)

  const mainClasses = classNames('timeline__main', className, {
    'timeline__main--renderDefault': !renderColumns,
  })

  const rowClasses = classNames('timeline__row-weeks', {
    'timeline__row-weeks--renderDefault': !renderColumns,
  })

  return (
    <main className={mainClasses}>
      {hasChildren && (
        <TimelineContext.Consumer>
          {({
            state: {
              weeks,
              days,
              options: { dayWidth },
            },
          }) => {
            return (
              <div
                className={rowClasses}
                data-testid="timeline-columns"
              >
                {weeks.map(({ startDate }, index) => {
                  const lastDateDisplayed = min([
                    endOfWeek(startDate, { weekStartsOn: WEEK_START }),
                    days[days.length - 1].date,
                  ])
                  const offsetInDays = differenceInDays(
                    startDate,
                    max([startDate, days[0].date])
                  )
                  const offsetPx = formatPx(dayWidth, offsetInDays)
                  const widthPx = formatPx(
                    dayWidth,
                    differenceInDays(lastDateDisplayed, startDate) + 1
                  )

                  const isOddNumber = isOdd(index)

                  const column = renderColumns
                    ? renderColumns(index, isOddNumber, offsetPx, widthPx)
                    : renderDefaultColumns(
                        index,
                        isOddNumber,
                        offsetPx,
                        widthPx
                      )

                  return withKey(
                    column,
                    'timeline-column',
                    startDate.toString()
                  )
                })}
              </div>
            )
          }}
        </TimelineContext.Consumer>
      )}

      {hasChildren ? children : noData}
    </main>
  )
}

TimelineRows.displayName = 'TimelineRows'
