import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { getKey } from '../../helpers'
import { TimelineContext } from './context'
import { TimelineHeaderRow } from './TimelineHeaderRow'
import { TimelineWeek } from './TimelineWeek'

export interface TimelineWeeksWithRenderContentProps
  extends ComponentWithClass {
  hasSide?: boolean
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

export interface TimelineWeeksWithChildrenProps extends ComponentWithClass {
  hasSide?: boolean
  render?: never
}

export type TimelineWeeksProps =
  | TimelineWeeksWithRenderContentProps
  | TimelineWeeksWithChildrenProps

export const TimelineWeeks: React.FC<TimelineWeeksProps> = ({
  hasSide,
  render,
}) => {
  return (
    <TimelineContext.Consumer>
      {({
        state: {
          days,
          weeks,
          options: { dayWidth },
        },
      }) => (
        <TimelineHeaderRow
          className="timeline__row--short"
          data-testid="timeline-weeks"
          hasSide={hasSide}
          name="Weeks"
        >
          <div className="timeline__weeks">
            {weeks.map(({ startDate }, index) => (
              <TimelineWeek
                days={days}
                dayWidth={dayWidth}
                index={index}
                key={getKey('timeline-week', startDate.toString())}
                render={render}
                startDate={startDate}
              />
            ))}
          </div>
        </TimelineHeaderRow>
      )}
    </TimelineContext.Consumer>
  )
}

TimelineWeeks.displayName = 'TimelineWeeks'
