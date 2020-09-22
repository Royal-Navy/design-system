import React from 'react'
import { IconChevronRight, IconChevronLeft } from '@royalnavy/icon-library'
import styled from 'styled-components'
import { Spacing4 } from '@royalnavy/design-tokens'

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

const StyledNavigation = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;

  button {
    &:first-of-type {
      margin-right: ${Spacing4};
    }

    span:first-of-type {
      display: none;
    }

    .rn-btn__icon {
      margin-left: 0;
    }
  }
`

const StyledTimelineMonths = styled.div`
  white-space: nowrap;
`

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
            <StyledNavigation data-testid="timeline-navigation">
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
            {name}
          </>
        )}
      >
        <StyledTimelineMonths>
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
        </StyledTimelineMonths>
      </TimelineHeaderRow>
    )}
  </TimelineContext.Consumer>
)

TimelineMonths.displayName = 'TimelineMonths'
