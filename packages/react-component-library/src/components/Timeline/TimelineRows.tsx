import React from 'react'
import classNames from 'classnames'
import { differenceInDays, endOfWeek, max, min } from 'date-fns'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { TimelineRowProps } from '.'
import { TimelineContext } from './context'
import { withKey } from '../../helpers'
import { formatPx, isOdd } from './helpers'
import { NO_DATA_MESSAGE, WEEK_START } from './constants'

type TimelineRowsChildrenType =
  | React.ReactElement<TimelineRowProps>
  | React.ReactElement<TimelineRowProps>[]

export interface TimelineRowsProps extends ComponentWithClass {
  children: TimelineRowsChildrenType
  renderColumns?: (
    index: number,
    isOddNumber: boolean,
    offsetPx: string,
    widthPx: string
  ) => React.ReactElement
}

const noData = (
  <div className="timeline__empty" data-testid="timeline-no-data">
    <span>{NO_DATA_MESSAGE}</span>
  </div>
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

export const TimelineRows: React.FC<TimelineRowsProps> = ({
  children,
  className,
  renderColumns,
}) => {
  const hasChildren = React.Children.count(children) > 0
  const rowWeeksWrapperClasses = classNames('timeline__row-weeks-wrapper')
  const rowWeeksClasses = classNames('timeline__row-weeks', {
    'timeline__row-weeks--renderDefault': !renderColumns,
  })
  const mainClasses = classNames('timeline__main', className, {
    'timeline__main--renderDefault': !renderColumns,
  })

  return (
    <>
      {hasChildren && (
        <TimelineContext.Consumer>
          {({
            state: {
              weeks,
              days,
              options: { dayWidth },
            },
          }) => (
            <div className={rowWeeksWrapperClasses}>
              <div
                className={rowWeeksClasses}
                data-testid="timeline-columns"
                role="presentation"
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
            </div>
          )}
        </TimelineContext.Consumer>
      )}

      <div className={mainClasses} data-testid="timeline-rows" role="rowgroup">
        {hasChildren ? children : noData}
      </div>
    </>
  )
}

TimelineRows.displayName = 'TimelineRows'
