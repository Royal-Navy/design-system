import React, { useContext } from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { getKey } from '../../helpers'
import { TimelineContext } from './context'
import { TimelineHeaderRow } from './TimelineHeaderRow'
import { TimelineMonth } from './TimelineMonth'
import { StyledMonths } from './partials/StyledMonths'

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

export const TimelineMonths: React.FC<TimelineMonthsProps> = ({
  render,
  ...rest
}) => {
  const {
    state: { currentScaleOption, days, months },
  } = useContext(TimelineContext)

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
            index={index}
            key={getKey('timeline-month', startDate.toString())}
            render={render}
            startDate={startDate}
          />
        ))}
      </StyledMonths>
    </TimelineHeaderRow>
  )
}

TimelineMonths.displayName = 'TimelineMonths'
