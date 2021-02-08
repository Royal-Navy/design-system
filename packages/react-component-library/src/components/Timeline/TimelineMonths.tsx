import React from 'react'
import { IconChevronRight, IconChevronLeft } from '@royalnavy/icon-library'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { getKey } from '../../helpers'
import { TimelineContext } from './context'
import { TimelineHeaderRow } from './TimelineHeaderRow'
import { TimelineMonth } from './TimelineMonth'
import { Button } from '../Button'
import { TIMELINE_ACTIONS } from './context/types'
import { StyledMonths } from './partials/StyledMonths'
import { StyledNavigation } from './partials/StyledNavigation'

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
}) => (
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
        className="timeline__months"
        data-testid="timeline-months"
        name="Months"
        renderRowHeader={() => (
          <>
            <StyledNavigation
              className="timeline__navigation"
              data-testid="timeline-navigation"
            >
              <Button
                aria-label="Navigate left"
                variant="secondary"
                icon={<IconChevronLeft />}
                onClick={(_) => dispatch({ type: TIMELINE_ACTIONS.GET_PREV })}
                data-testid="timeline-side-button-left"
              />
              <Button
                aria-label="Navigate right"
                variant="secondary"
                icon={<IconChevronRight />}
                onClick={(_) => dispatch({ type: TIMELINE_ACTIONS.GET_NEXT })}
                data-testid="timeline-side-button-right"
              />
            </StyledNavigation>
          </>
        )}
        {...rest}
      >
        <StyledMonths>
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
        </StyledMonths>
      </TimelineHeaderRow>
    )}
  </TimelineContext.Consumer>
)

TimelineMonths.displayName = 'TimelineMonths'
