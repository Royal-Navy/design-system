import React from 'react'
import classNames from 'classnames'

import { getKey } from '../../helpers'
import { TimelineContext } from './context'
import { TimelineHour } from './TimelineHour'
import { TimelineHeaderRow } from './TimelineHeaderRow'

export interface TimelineHoursWithChildrenProps {
  blockSize?: number
}

export type TimelineHoursProps = TimelineHoursWithChildrenProps

export const TimelineHours: React.FC<TimelineHoursProps> = () => {
  const classes = classNames('timeline__hours')

  return (
    <TimelineContext.Consumer>
      {({
        state: {
          days,
          hours,
          endDate: timelineEndDate,
          options: { unitWidth },
        },
      }) => (
        <TimelineHeaderRow
          className="timeline__row--short"
          data-testid="timeline-hours"
          name="Hours"
        >
          <div className={classes}>
            {days.map(({ date }) => {
              return hours.map(({ hourIndex, time }) => (
                <TimelineHour
                  date={date}
                  key={getKey(
                    'timeline-hour',
                    `${date.toString()}-${hourIndex}`
                  )}
                  time={time}
                  timelineEndDate={timelineEndDate}
                  width={unitWidth}
                />
              ))
            })}
          </div>
        </TimelineHeaderRow>
      )}
    </TimelineContext.Consumer>
  )
}

TimelineHours.displayName = 'TimelineHours'
