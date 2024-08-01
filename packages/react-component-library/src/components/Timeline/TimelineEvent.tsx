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
  /**
   * The title of the event.
   */
  title?: string
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
  /**
   * The HTML title attribute associated with the event.
   */
  title?: string
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
  title,
}: {
  barColor?: string
  children: React.ReactNode
  offsetPx: string
  startDate: Date
  widthPx: string
  maxWidthPx: string
  startsBeforeStart: boolean
  endsAfterEnd: boolean
  title: string
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
      <StyledEventTitle data-testid="timeline-event-title" title={title}>
        {children || `Task ${format(new Date(startDate), DATE_FORMAT.SHORT)}`}
      </StyledEventTitle>
    </StyledEvent>
  )
}

function getTitle(
  children: React.ReactNode,
  startDate: Date,
  endDate: Date,
  title?: string
) {
  if (title) {
    return title
  }

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
  title,
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

  const eventTitle = getTitle(children, startDate, endDate, title)

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
        title: eventTitle,
      })

  return (
    <div data-testid="timeline-event-wrapper" title={title}>
      {React.cloneElement(event as React.ReactElement, {
        title: eventTitle,
        'aria-label': eventTitle,
        role: 'cell',
        ...rest,
      })}
    </div>
  )
}

TimelineEvent.displayName = 'TimelineEvent'
