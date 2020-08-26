import React from 'react'
import classNames from 'classnames'

import { getKey } from '../../helpers'
import { TimelineContext } from './context'
import { TimelineDay } from './TimelineDay'
import { TimelineHeaderRow } from './TimelineHeaderRow'

export interface TimelineDaysWithRenderContentProps {
  hasSide?: boolean
  render: (index: number, dayWidth: number, date: Date) => React.ReactElement
}

export interface TimelineDaysWithChildrenProps {
  hasSide?: boolean
  render?: never
}

export type TimelineDaysProps =
  | TimelineDaysWithRenderContentProps
  | TimelineDaysWithChildrenProps

export const TimelineDays: React.FC<TimelineDaysProps> = ({
  hasSide,
  render,
}) => {
  const classes = classNames('timeline__days', {
    'timeline__days--renderDefault': !render,
  })

  return (
    <TimelineContext.Consumer>
      {({
        state: {
          days,
          endDate: timelineEndDate,
          options: { dayWidth },
        },
      }) => (
        <TimelineHeaderRow
          className="timeline__row--short"
          data-testid="timeline-days"
          hasSide={hasSide}
          name="Days"
        >
          <div className={classes}>
            {days.map(({ date }, index) => (
              <TimelineDay
                date={date}
                dayWidth={dayWidth}
                index={index}
                key={getKey('timeline-day', date.toString())}
                render={render}
                timelineEndDate={timelineEndDate}
              />
            ))}
          </div>
        </TimelineHeaderRow>
      )}
    </TimelineContext.Consumer>
  )
}

TimelineDays.displayName = 'TimelineDays'
