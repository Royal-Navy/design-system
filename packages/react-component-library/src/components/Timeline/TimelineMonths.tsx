import React from 'react'
import { IconChevronRight, IconChevronLeft } from '@royalnavy/icon-library'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { getKey } from '../../helpers'
import { TimelineContext } from './context'
import { TimelineHeaderRow } from './TimelineHeaderRow'
import { TimelineMonth } from './TimelineMonth'
import { Button } from '../Button'
import { TIMELINE_ACTIONS } from './context/types'

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

export const TimelineMonths: React.FC<TimelineMonthsProps> = ({ render }) => (
  <TimelineContext.Consumer>
    {({
      dispatch,
      state: {
        days,
        months,
        options: { dayWidth },
      },
    }) => (
      <TimelineHeaderRow
        data-testid="timeline-months"
        name="Months"
        renderRowHeader={(name) => (
          <>
            <div
              aria-hidden
              className="timeline__navigation"
              data-testid="timeline-navigation"
            >
              <Button
                variant="secondary"
                icon={<IconChevronLeft />}
                onClick={(_) => dispatch({ type: TIMELINE_ACTIONS.GET_PREV })}
                data-testid="timeline-side-button-left"
              />
              <Button
                variant="secondary"
                icon={<IconChevronRight />}
                onClick={(_) => dispatch({ type: TIMELINE_ACTIONS.GET_NEXT })}
                data-testid="timeline-side-button-right"
              />
            </div>
            {name}
          </>
        )}
      >
        <div className="timeline__months">
          {months.map(({ startDate }, index) => (
            <TimelineMonth
              days={days}
              dayWidth={dayWidth}
              index={index}
              key={getKey('timeline-month', startDate.toString())}
              render={render}
              startDate={startDate}
            />
          ))}
        </div>
      </TimelineHeaderRow>
    )}
  </TimelineContext.Consumer>
)

TimelineMonths.displayName = 'TimelineMonths'
