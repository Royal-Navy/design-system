import React from 'react'
import { storiesOf } from '@storybook/react'
import { format } from 'date-fns'

import {
  Timeline,
  TimelineEvent,
  TimelineEvents,
  TimelineRow,
  TimelineRows,
  TimelineTodayMarker,
  TimelineMonths,
  TimelineWeeks,
  TimelineDays,
  TimelineSide,
} from '.'

const stories = storiesOf('Timeline', module)

stories.add('No data', () => (
  <Timeline>
    <TimelineSide />
    <TimelineTodayMarker />
    <TimelineMonths />
    <TimelineWeeks />
    <TimelineDays />
    <TimelineRows>{}</TimelineRows>
  </Timeline>
))

stories.add('With data', () => (
  <Timeline startDate={new Date(2020, 4, 0)} today={new Date(2020, 3, 15)}>
    <TimelineSide />
    <TimelineTodayMarker />
    <TimelineMonths />
    <TimelineWeeks />
    <TimelineDays />
    <TimelineRows>
      <TimelineRow name="Row 1">
        <TimelineEvents>
          <TimelineEvent
            startDate={new Date(2020, 3, 14)}
            endDate={new Date(2020, 3, 18)}
          >
            Event 1
          </TimelineEvent>
        </TimelineEvents>
      </TimelineRow>
      <TimelineRow name="Row 2">
        <TimelineEvents>
          <TimelineEvent
            startDate={new Date(2020, 3, 3)}
            endDate={new Date(2020, 3, 8)}
          >
            Event 2
          </TimelineEvent>
        </TimelineEvents>
      </TimelineRow>
    </TimelineRows>
  </Timeline>
))

stories.add('With custom months', () => {
  const CustomTimelineMonth = (
    index: number,
    dayWidth: number,
    daysTotal: number,
    startDate: Date
  ) => {
    return (
      <span
        style={{
          display: 'inline-block',
          width: `${dayWidth * daysTotal}px`,
          backgroundColor: 'black',
          color: 'white',
          borderLeft: '1px solid white',
          paddingLeft: '.5rem',
        }}
      >
        {format(startDate, 'MMMM yyyy')}
      </span>
    )
  }

  return (
    <Timeline startDate={new Date(2020, 4, 0)} today={new Date(2020, 3, 15)}>
      <TimelineSide />
      <TimelineTodayMarker />
      <TimelineMonths render={CustomTimelineMonth} />
      <TimelineWeeks />
      <TimelineDays />
      <TimelineRows>{}</TimelineRows>
    </Timeline>
  )
})

stories.add('With custom weeks', () => {
  const CustomTimelineWeek = (
    index: number,
    isOddNumber: boolean,
    offsetPx: string,
    widthPx: string,
    dayWidth: number,
    daysTotal: number,
    startDate: Date
  ) => {
    return (
      <span
        style={{
          display: 'inline-block',
          marginLeft: offsetPx,
          width: widthPx,
          backgroundColor: `${isOddNumber ? 'black' : 'white'}`,
          color: `${isOddNumber ? 'white' : 'black'}`,
          borderTop: '1px solid black',
          borderBottom: '1px solid black',
          paddingLeft: '.5rem',
        }}
      >
        {format(startDate, 'dd/MM')}
      </span>
    )
  }

  return (
    <Timeline startDate={new Date(2020, 4, 0)} today={new Date(2020, 3, 15)}>
      <TimelineSide />
      <TimelineTodayMarker />
      <TimelineMonths />
      <TimelineWeeks render={CustomTimelineWeek} />
      <TimelineDays />
      <TimelineRows>{}</TimelineRows>
    </Timeline>
  )
})

stories.add('With custom days', () => {
  const CustomTimelineDays = (index: number, dayWidth: number, date: Date) => {
    return (
      <span
        style={{
          display: 'inline-block',
          width: `${dayWidth}px`,
          backgroundColor: 'black',
          color: 'white',
        }}
      >
        {format(date, 'dd')}
      </span>
    )
  }

  return (
    <Timeline startDate={new Date(2020, 4, 0)} today={new Date(2020, 3, 15)}>
      <TimelineSide />
      <TimelineTodayMarker />
      <TimelineMonths />
      <TimelineWeeks />
      <TimelineDays render={CustomTimelineDays} />
      <TimelineRows>{}</TimelineRows>
    </Timeline>
  )
})

stories.add('With custom today marker', () => {
  const CustomTodayMarker = (date: Date, offset: string) => {
    return (
      <span
        className="rn_text-s"
        style={{
          position: 'absolute',
          left: offset,
          height: '100vh',
          width: '2px',
          background: 'black',
          overflow: 'visible',
          whiteSpace: 'nowrap',
          textIndent: '1rem',
          zIndex: 1,
        }}
      >
        {date.toString()}
      </span>
    )
  }

  return (
    <Timeline startDate={new Date(2020, 4, 0)} today={new Date(2020, 3, 15)}>
      <TimelineSide />
      <TimelineTodayMarker render={CustomTodayMarker} />
      <TimelineMonths />
      <TimelineWeeks />
      <TimelineDays />
      <TimelineRows>{}</TimelineRows>
    </Timeline>
  )
})

stories.add('With custom event content', () => {
  const render = (text: string) => {
    return () => (
      <div style={{ backgroundColor: 'black', color: 'white' }}>
        <span>{text}</span>
      </div>
    )
  }

  return (
    <Timeline startDate={new Date(2020, 4, 0)} today={new Date(2020, 3, 15)}>
      <TimelineSide />
      <TimelineTodayMarker />
      <TimelineMonths />
      <TimelineWeeks />
      <TimelineDays />
      <TimelineRows>
        <TimelineRow name="Row 1">
          <TimelineEvents>
            <TimelineEvent
              startDate={new Date(2020, 3, 16)}
              endDate={new Date(2020, 3, 20)}
              render={render('Custom 1')}
            />
            <TimelineEvent
              startDate={new Date(2020, 3, 25)}
              endDate={new Date(2020, 3, 28)}
            >
              Event 2
            </TimelineEvent>
          </TimelineEvents>
        </TimelineRow>
        <TimelineRow name="Row 2">
          <TimelineEvents>
            <TimelineEvent
              startDate={new Date(2020, 3, 15)}
              endDate={new Date(2020, 3, 19)}
              render={render('Custom 3')}
            />
            <TimelineEvent
              startDate={new Date(2020, 3, 22)}
              endDate={new Date(2020, 3, 24)}
            >
              Event 4
            </TimelineEvent>
          </TimelineEvents>
        </TimelineRow>
      </TimelineRows>
    </Timeline>
  )
})

stories.add('With custom day width', () => {
  return (
    <Timeline
      startDate={new Date(2020, 4, 0)}
      today={new Date(2020, 3, 15)}
      dayWidth={75}
    >
      <TimelineSide />
      <TimelineTodayMarker />
      <TimelineMonths />
      <TimelineWeeks />
      <TimelineDays />
      <TimelineRows>
        <TimelineRow name="Row 1">
          <TimelineEvents>
            <TimelineEvent
              startDate={new Date(2020, 3, 25)}
              endDate={new Date(2020, 3, 28)}
            >
              Event 2
            </TimelineEvent>
          </TimelineEvents>
        </TimelineRow>
        <TimelineRow name="Row 2">
          <TimelineEvents>
            <TimelineEvent
              startDate={new Date(2020, 3, 22)}
              endDate={new Date(2020, 3, 24)}
            >
              Event 4
            </TimelineEvent>
          </TimelineEvents>
        </TimelineRow>
      </TimelineRows>
    </Timeline>
  )
})
