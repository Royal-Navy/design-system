import React from 'react'

import { TimelineProvider } from './context'

import {
  TimelineRootComponent,
  TimelineHeadComponent,
  TimelineBodyComponent,
  TimelineComponent,
} from './types'

import {
  TimelineSide,
  TimelineDays,
  TimelineWeeks,
  TimelineMonths,
  TimelineTodayMarker,
  TimelineRows,
  TimelineRowsProps,
  TimelineTodayMarkerProps,
  TimelineMonthsProps,
  TimelineWeeksProps,
  TimelineDaysProps,
  TimelineSideProps,
} from '.'

import { TimelineOptions } from './context/types'
import { DEFAULTS } from './constants'

type timelineRootChildrenType = React.ReactElement<TimelineSideProps>

type timelineHeadChildrenType =
  | React.ReactElement<TimelineTodayMarkerProps>
  | React.ReactElement<TimelineMonthsProps>
  | React.ReactElement<TimelineWeeksProps>
  | React.ReactElement<TimelineDaysProps>

type timelineBodyChildrenType = React.ReactElement<TimelineRowsProps>

type timelineChildrenType =
  | timelineRootChildrenType
  | timelineHeadChildrenType
  | timelineBodyChildrenType

export interface TimelineProps extends ComponentWithClass {
  children: timelineChildrenType | timelineChildrenType[]
  dayWidth?: number
  startDate?: Date
  today?: Date
}

function isComponentOf<T extends TimelineComponent>(
  item: T,
  names: string[]
): item is T {
  const typeName: string | null = (item as T)?.type?.name

  return names.includes(typeName)
}

function extractChildrenOf<T>(
  children: timelineChildrenType | timelineChildrenType[],
  names: string[]
) {
  return (children as []).filter(child => isComponentOf(child, names))
}

export const Timeline: React.FC<TimelineProps> = ({
  children,
  dayWidth = DEFAULTS.DAY_WIDTH,
  startDate,
  today,
}) => {
  const options: TimelineOptions = {
    dayWidth,
    rangeInMonths: DEFAULTS.RANGE_IN_MONTHS,
  }

  const rootChildren = extractChildrenOf<TimelineRootComponent>(children, [
    TimelineSide.name,
  ])

  const headerChildren = extractChildrenOf<TimelineHeadComponent>(children, [
    TimelineDays.name,
    TimelineWeeks.name,
    TimelineMonths.name,
    TimelineTodayMarker.name,
  ])

  const bodyChildren = extractChildrenOf<TimelineBodyComponent>(children, [
    TimelineRows.name,
  ])

  return (
    <TimelineProvider startDate={startDate} today={today} options={options}>
      <article className="timeline">
        {rootChildren}
        <div className="timeline__inner">
          <header className="timeline__header">{headerChildren}</header>
          <main className="timeline__main">{bodyChildren}</main>
        </div>
      </article>
    </TimelineProvider>
  )
}

Timeline.displayName = 'Timeline'
