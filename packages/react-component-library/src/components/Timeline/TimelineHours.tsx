import React from 'react'
import classNames from 'classnames'

import { getKey } from '../../helpers'
import { TIMELINE_BLOCK_SIZE } from './constants'
import { TimelineContext } from './context'
import { TimelineHour } from './TimelineHour'
import { TimelineHeaderRow } from './TimelineHeaderRow'

type BlockSizeType =
  | typeof TIMELINE_BLOCK_SIZE.QUARTER_DAY
  | typeof TIMELINE_BLOCK_SIZE.HALF_DAY

export interface TimelineHoursWithRenderContentProps {
  blockSize?: BlockSizeType
  render: (width: number, time: string) => React.ReactElement
}

export interface TimelineHoursWithChildrenProps {
  blockSize?: BlockSizeType
  render?: never
}

export type TimelineHoursProps =
  | TimelineHoursWithRenderContentProps
  | TimelineHoursWithChildrenProps

export const TimelineHours: React.FC<TimelineHoursProps> = ({ render }) => {
  const classes = classNames('timeline__hours', {
    'timeline__hours--renderDefault': !render,
  })

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
                  render={render}
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
