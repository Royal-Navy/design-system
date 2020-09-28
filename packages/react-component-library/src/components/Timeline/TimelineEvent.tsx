import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import { selectors } from '@royalnavy/design-tokens'
import { isString } from 'lodash'

import { ACCESSIBLE_DATE_FORMAT, TIMELINE_BG_COLOR } from './constants'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { DATE_FORMAT } from '../../constants'
import { useTimelinePosition } from './hooks/useTimelinePosition'

export interface TimelineEventWithRenderContentProps
  extends ComponentWithClass {
  children?: never
  endDate: Date
  render: (
    endDate: Date,
    startDate: Date,
    widthPx: string,
    offsetPx: string
  ) => React.ReactNode
  startDate: Date
}

export interface TimelineEventWithChildrenProps extends ComponentWithClass {
  children: React.ReactNode
  endDate: Date
  render?: never
  startDate: Date
}

export type TimelineEventProps =
  | TimelineEventWithRenderContentProps
  | TimelineEventWithChildrenProps

const { spacing, zIndex, color, fontSize } = selectors

const StyledTimelineEvent = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 4.5rem;
  transform: translateY(-50%);
  display: inline-flex;
  flex-direction: column;
  padding: ${spacing('2')} 0;
  background-color: ${TIMELINE_BG_COLOR};
  overflow: visible;
  z-index: ${zIndex('body', 2)};
`

const StyledEventTitle = styled.span`
  font-size: ${fontSize('s')};
  font-weight: 400;
  color: ${color('neutral', '600')};
  white-space: nowrap;
`

interface StyledEventBarProps {
  width: string
}

const StyledEventBar = styled.div<StyledEventBarProps>`
  display: inline-block;
  background-color: ${color('success', '500')};
  border-radius: 4px;
  height: 16px;
  min-width: 1rem;
  width: ${({ width }) => width};
`

function renderDefault(
  children: React.ReactNode,
  offsetPx: string,
  startDate: Date,
  widthPx: string
) {
  return (
    <StyledTimelineEvent
      style={{ left: offsetPx }}
      data-testid="timeline-event"
    >
      <StyledEventTitle data-testid="timeline-event-title">
        {children || `Task ${format(new Date(startDate), DATE_FORMAT.SHORT)}`}
      </StyledEventTitle>
      <StyledEventBar width={widthPx} />
    </StyledTimelineEvent>
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
  children,
  endDate,
  render,
  startDate,
}) => {
  const {
    offset: offsetPx,
    width: widthPx,
    isBeforeStart,
    isAfterEnd,
  } = useTimelinePosition(startDate, endDate)

  if (isBeforeStart || isAfterEnd) return null

  const event = render
    ? render(startDate, endDate, widthPx, offsetPx)
    : renderDefault(children, offsetPx, startDate, widthPx)

  const title = getTitle(children, startDate, endDate)

  return (
    <div data-testid="timeline-event-wrapper">
      {React.cloneElement(event as React.ReactElement, {
        title,
        'aria-label': title,
        role: 'cell',
      })}
    </div>
  )
}

TimelineEvent.displayName = 'TimelineEvent'
