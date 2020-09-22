import React from 'react'
import styled from 'styled-components'
import { format, differenceInDays, endOfWeek, max, min } from 'date-fns'
import {
  SpacingPx,
  TypographyM,
  ColorNeutral400,
  Spacing4,
  ZindexBody,
} from '@royalnavy/design-tokens'

import {
  ACCESSIBLE_DATE_FORMAT,
  DATE_WEEK_FORMAT,
  WEEK_START,
  TIMELINE_BG_COLOR,
  TIMELINE_ALT_BG_COLOR,
  TIMELINE_BORDER_COLOR,
} from './constants'
import { formatPx, isOdd } from './helpers'
import { TimelineDay } from './context/types'

interface TimelineWeekProps {
  days: TimelineDay[]
  dayWidth: number
  index: number
  render: (
    index: number,
    isOddNumber: boolean,
    offsetPx: string,
    widthPx: string,
    dayWidth: number,
    daysTotal: number,
    startDate: Date
  ) => React.ReactElement
  startDate: Date
}

interface StyledTimelineWeekProps {
  isOddNumber: boolean
  marginLeft: string
  width: string
}

const StyledTimelineWeek = styled.div<StyledTimelineWeekProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  background-color: ${({ isOddNumber }) =>
    isOddNumber ? TIMELINE_ALT_BG_COLOR : TIMELINE_BG_COLOR};
  border-top: ${SpacingPx} solid ${TIMELINE_BORDER_COLOR};
  border-bottom: ${SpacingPx} solid ${TIMELINE_BORDER_COLOR};
  justify-content: unset;
  margin-left: ${({ marginLeft }) => marginLeft};
  width: ${({ width }) => width};
`

const StyledTitle = styled.span`
  font-weight: 600;
  font-size: ${TypographyM};
  color: ${ColorNeutral400};
  background-color: inherit;
  z-index: ${Number(ZindexBody) + 2};
  margin-left: ${Spacing4};
`

function renderDefault(
  index: number,
  isOddNumber: boolean,
  offsetPx: string,
  widthPx: string,
  dayWidth: number,
  daysTotal: number,
  startDate: Date
) {
  return (
    <StyledTimelineWeek
      isOddNumber={isOddNumber}
      marginLeft={offsetPx}
      width={widthPx}
      data-testid="timeline-week"
    >
      <StyledTitle>{format(startDate, DATE_WEEK_FORMAT)}</StyledTitle>
    </StyledTimelineWeek>
  )
}

export const TimelineWeek: React.FC<TimelineWeekProps> = ({
  days,
  dayWidth,
  index,
  render,
  startDate,
  ...rest
}) => {
  const lastDateDisplayed = min([
    endOfWeek(startDate, { weekStartsOn: WEEK_START }),
    days[days.length - 1].date,
  ])
  const daysTotal = differenceInDays(lastDateDisplayed, startDate) + 1
  const offsetInDays = differenceInDays(
    startDate,
    max([startDate, days[0].date])
  )
  const offsetPx = formatPx(dayWidth, offsetInDays)
  const widthPx = formatPx(dayWidth, daysTotal)

  const isOddNumber = isOdd(index)

  const args = [
    index,
    isOddNumber,
    offsetPx,
    widthPx,
    dayWidth,
    daysTotal,
    startDate,
  ]

  // @ts-ignore
  const child = render ? render(...args) : renderDefault(...args)

  const title = `Week beginning ${format(startDate, ACCESSIBLE_DATE_FORMAT)}`

  return React.cloneElement(child, {
    title,
    'aria-label': title,
    role: 'columnheader',
    ...rest,
  })
}

TimelineWeek.displayName = 'TimelineWeek'
