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
  /**
   * The color of the bar.
   */
  barColor?: never
  /**
   * Supply children to be rendered.
   */
  children?: never
  /**
   * The end date of the event.
   */
  endDate: Date
  /**
   * Supply a custom presentation layer.
   */
  render: (props: {
    startDate: Date
    endDate: Date
    widthPx: string
    offsetPx: string
    maxWidthPx: string
    startsBeforeStart: boolean
    endsAfterEnd: boolean
  }) => React.ReactNode
  /**
   * The start date of the event.
   */
  startDate: Date
}

export interface TimelineEventWithChildrenProps extends ComponentWithClass {
  /**
   * The color of the bar.
   */
  barColor?: string
  /**
   * Supply children to be rendered.
   */
  children: React.ReactNode
  /**
   * The end date of the event.
   */
  endDate: Date
  /**
   * Supply a custom presentation layer.
   */
  render?: never
  /**
   * The start date of the event.
   */
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
  barColor?: string
  children: React.ReactNode
  offsetPx: string
  startDate: Date
  widthPx: string
  maxWidthPx: string
  startsBeforeStart: boolean
  endsAfterEnd: boolean
}) {
  return (
    <StyledEvent $leftPx={offsetPx} data-testid="timeline-event">
      <StyledEventBar
        $barColor={barColor}
        $width={widthPx}
        $maxWidth={maxWidthPx}
        $startsBeforeStart={startsBeforeStart}
        $endsAfterEnd={endsAfterEnd}
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

export const TimelineEvent = ({
  barColor,
  children,
  endDate,
  render,
  startDate,
  ...rest
}: TimelineEventProps) => {
  const {
    startsBeforeStart,
    startsAfterEnd,
    endsBeforeStart,
    endsAfterEnd,
    offset: offsetPx,
    width: widthPx,
    maxWidth: maxWidthPx,
  } = useTimelinePosition(startDate, endDate)

  if (startsAfterEnd || endsBeforeStart) {
    return null
  }

  const event = render
    ? render({
        startDate,
        endDate,
        widthPx,
        offsetPx,
        maxWidthPx,
        startsBeforeStart,
        endsAfterEnd,
      })
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
