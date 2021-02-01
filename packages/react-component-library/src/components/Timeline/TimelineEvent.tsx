import React from 'react'
import styled, { css } from 'styled-components'
import { format } from 'date-fns'
import { selectors } from '@royalnavy/design-tokens'
import { isString } from 'lodash'

import { ACCESSIBLE_DATE_FORMAT } from './constants'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { DATE_FORMAT } from '../../constants'
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
  maxWidth?: string
  barColor: string
  startsBeforeStart?: boolean
  endsAfterEnd?: boolean
}

const StyledEventBar = styled.div<StyledEventBarProps>`
  order: 1;
  position: relative;
  display: inline-block;
  border-radius: 4px;
  background-color: ${({ barColor = color('success', '500') }) => barColor};
  height: 16px;
  min-width: 1rem;
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};

  ${({ startsBeforeStart, width, barColor = color('success', '500') }) =>
    startsBeforeStart &&
    css`
      border-top-left-radius: unset;
      border-bottom-left-radius: unset;
      margin-left: 14px;
      width: calc(${width} - 14px);

      &::before {
        content: '';
        position: absolute;
        left: -14px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 8px 14px 8px 0;
        border-color: transparent ${barColor} transparent transparent;
      }

      + ${StyledEventTitle} {
        margin-left: 14px;
      }
    `}

  ${({ endsAfterEnd, maxWidth, barColor = color('success', '500') }) =>
    endsAfterEnd &&
    css`
      border-top-right-radius: unset;
      border-bottom-right-radius: unset;
      max-width: calc(${maxWidth} - 14px);

      &::after {
        content: '';
        position: absolute;
        right: -14px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 8px 0 8px 14px;
        border-color: transparent transparent transparent ${barColor};
      }
    `}

    ${({ startsBeforeStart, endsAfterEnd, maxWidth }) =>
    startsBeforeStart &&
    endsAfterEnd &&
    css`
      max-width: calc(${maxWidth} - 28px);
    `}
`

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
    <StyledTimelineEvent
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
