import React from 'react'
import classNames from 'classnames'
import { differenceInDays } from 'date-fns'

import { TimelineRowProps } from '.'
import { TimelineContext } from './context'
import { withKey } from '../../helpers'
import { formatPx, isOdd } from './helpers'
import { NO_DATA_MESSAGE } from './constants'

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
        <div className={rowClasses} data-testid="timeline-columns">
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

                const offsetPx = formatPx(
                  dayWidth,
                  diff < 0 ? -Math.abs(diff) : 0
                )

                const widthPx = formatPx(dayWidth, 7)

                const isOddNumber = isOdd(index)

                const column = renderColumns
                  ? renderColumns(index, isOddNumber, offsetPx, widthPx)
                  : renderDefaultColumns(index, isOddNumber, offsetPx, widthPx)

                return withKey(column, 'timeline-column', startDate.toString())
              })
            }}
          </TimelineContext.Consumer>
        </div>
      )}

      {hasChildren ? children : noData}
    </main>
  )
}

TimelineRows.displayName = 'TimelineRows'
