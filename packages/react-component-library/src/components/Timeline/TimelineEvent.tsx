import React from 'react'
import { format } from 'date-fns'
import { isString } from 'lodash'

import { ACCESSIBLE_DATE_FORMAT } from './constants'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { DATE_FORMAT } from '../../constants'
import { StyledEvent } from './partials/StyledEvent'
import { StyledEventBar } from './partials/StyledEventBar'
import { StyledEventTitle } from './partials/StyledEventTitle'
import { useTimelinePosition } from './hooks/useTimelinePosition'

export interface TimelineEventWithRenderContentProps
  extends ComponentWithClass {
  barColor?: never
  children?: never
  endDate: Date
  render: (
    endDate: Date,
    startDate: Date,
    widthPx: string,
    offsetPx: string,
    maxWidthPx: string
  ) => React.ReactNode
  startDate: Date
}

export interface TimelineEventWithChildrenProps extends ComponentWithClass {
  barColor?: string
  children: React.ReactNode
  endDate: Date
  render?: never
  startDate: Date
}

export type TimelineEventProps =
  | TimelineEventWithRenderContentProps
  | TimelineEventWithChildrenProps

function renderDefault({
  barColor,
  children,
  offsetPx,
  startDate,
  widthPx,
  maxWidthPx,
  startsBeforeStart,
  endsAfterEnd,
}: {
  barColor: string
  children: React.ReactNode
  offsetPx: string
  startDate: Date
  widthPx: string
  maxWidthPx: string
  startsBeforeStart: boolean
  endsAfterEnd: boolean
}) {
  return (
    <StyledEvent
      style={{ left: offsetPx }}
      data-testid="timeline-event"
    >
      <StyledEventBar
        barColor={barColor}
        width={widthPx}
        maxWidth={maxWidthPx}
        startsBeforeStart={startsBeforeStart}
        endsAfterEnd={endsAfterEnd}
        data-testid="timeline-event-bar"
      />
      <StyledEventTitle data-testid="timeline-event-title">
        {children || `Task ${format(new Date(startDate), DATE_FORMAT.SHORT)}`}
      </StyledEventTitle>
    </StyledEvent>
  )
}

function getTitle(children: React.ReactNode, startDate: Date, endDate: Date) {
  const start = isString(children) ? `${children} begins` : `Begins`

  return `${start} on ${format(
    startDate,
    ACCESSIBLE_DATE_FORMAT
  )} and ends on ${format(endDate, ACCESSIBLE_DATE_FORMAT)}`
}

export const TimelineEvent: React.FC<TimelineEventProps> = ({
  barColor,
  children,
  endDate,
  render,
  startDate,
  ...rest
}) => {
  const {
    startsBeforeStart,
    startsAfterEnd,
    endsBeforeStart,
    endsAfterEnd,
    offset: offsetPx,
    width: widthPx,
    maxWidth: maxWidthPx,
  } = useTimelinePosition(startDate, endDate)

  if (startsAfterEnd || endsBeforeStart) return null

  const event = render
    ? render(startDate, endDate, widthPx, offsetPx, maxWidthPx)
    : renderDefault({
        barColor,
        children,
        offsetPx,
        startDate,
        widthPx,
        maxWidthPx,
        startsBeforeStart,
        endsAfterEnd,
      })

  const title = getTitle(children, startDate, endDate)

  return (
    <div data-testid="timeline-event-wrapper">
      {React.cloneElement(event as React.ReactElement, {
        title,
        'aria-label': title,
        role: 'cell',
        ...rest,
      })}
    </div>
  )
}

TimelineEvent.displayName = 'TimelineEvent'
