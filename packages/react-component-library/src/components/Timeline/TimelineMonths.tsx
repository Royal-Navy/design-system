import React, { useContext, memo } from 'react'
import { differenceInDays, endOfMonth, min as minDate, max } from 'date-fns'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { getKey } from '../../helpers'
import { TimelineContext } from './context'
import { TimelineHeaderRow } from './TimelineHeaderRow'
import { MONTH_SIZE, TimelineMonth } from './TimelineMonth'
import { StyledMonths } from './partials/StyledMonths'

export interface TimelineMonthsWithRenderContentProps
  extends ComponentWithClass {
  /**
   * Supply a custom presentation layer.
   */
  render: (props: {
    index: number
    dayWidth: number
    daysTotal: number
    startDate: Date
  }) => React.ReactElement
}

export interface TimelineMonthsWithChildrenProps extends ComponentWithClass {
  render?: never
}

export type TimelineMonthsProps =
  | TimelineMonthsWithRenderContentProps
  | TimelineMonthsWithChildrenProps

const MONTH_SMALL_THRESHOLD = 30
const MONTH_MEDIUM_THRESHOLD = 160

function getSize(monthWidths: { daysTotal: number; monthWidth: number }[]) {
  const smallest = Math.min(...monthWidths.map(({ monthWidth }) => monthWidth))

  if (smallest < MONTH_SMALL_THRESHOLD) {
    return MONTH_SIZE.SMALL
  }

  if (smallest < MONTH_MEDIUM_THRESHOLD) {
    return MONTH_SIZE.MEDIUM
  }

  return MONTH_SIZE.LARGE
}

export const TimelineMonths = memo<TimelineMonthsProps>(
  ({ render, ...rest }) => {
    const {
      state: { currentScaleOption, days, months },
    } = useContext(TimelineContext)

    if (!currentScaleOption) {
      return null
    }

    const monthWidths = months.map(({ startDate }) => {
      const firstDateDisplayed = max([startDate, days[0].date])
      const lastDateDisplayed = minDate([
        endOfMonth(startDate),
        days[days.length - 1].date,
      ])
      const daysTotal =
        differenceInDays(lastDateDisplayed, firstDateDisplayed) + 1

      const monthWidth = currentScaleOption.widths.day * daysTotal

      return {
        daysTotal,
        monthWidth,
      }
    })

    const size = getSize(monthWidths)

    return (
      <TimelineHeaderRow
        className="timeline__months"
        data-testid="timeline-months"
        name="Months"
        {...rest}
      >
        <StyledMonths>
          {months.map(({ startDate }, index) => (
            <TimelineMonth
              days={days}
              dayWidth={currentScaleOption.widths.day}
              daysTotal={monthWidths[index].daysTotal}
              index={index}
              key={getKey('timeline-month', startDate.toString())}
              render={render}
              size={size}
              startDate={startDate}
            />
          ))}
        </StyledMonths>
      </TimelineHeaderRow>
    )
  }
)

TimelineMonths.displayName = 'TimelineMonths'
