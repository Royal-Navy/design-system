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
  TimelineRowProps,
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
  range?: number
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
  return (children as []).filter((child) => isComponentOf(child, names))
}

function extractRowData(
  rowGroups: timelineBodyChildrenType | timelineBodyChildrenType[]
) {
  return (rowGroups as []).map(
    ({ props: { children } }: timelineBodyChildrenType) => {
      let rows: any[] = []

      if (children) {
        const items = Array.isArray(children) ? children : [children]
        rows = items.map(
          ({ props: { name } }: React.ReactElement<TimelineRowProps>) => ({
            name,
          })
        )
      }

      return {
        // ref, // Create refs to original components? Drag + Drop etc?
        rows,
      }
    }
  )
}

export const Timeline: React.FC<TimelineProps> = ({
  children,
  dayWidth = DEFAULTS.DAY_WIDTH,
  startDate,
  today,
  range,
}) => {
  const options: TimelineOptions = {
    dayWidth,
    rangeInMonths: range || DEFAULTS.RANGE_IN_MONTHS,
  }

  const bodyChildren = extractChildrenOf<TimelineBodyComponent>(children, [
    TimelineRows.name,
  ])

  const headChildren = extractChildrenOf<TimelineHeadComponent>(children, [
    TimelineDays.name,
    TimelineWeeks.name,
    TimelineMonths.name,
    TimelineTodayMarker.name,
  ])

  const rootChildren = extractChildrenOf<TimelineRootComponent>(children, [
    TimelineSide.name,
  ]).map((child) => {
    if (isComponentOf(child, [TimelineSide.name])) {
      return React.cloneElement(child, {
        rowGroups: extractRowData(bodyChildren),
        headChildren,
      })
    }

    return child
  })

  return (
    <TimelineProvider startDate={startDate} today={today} options={options}>
      <article className="timeline">
        {rootChildren}
        <div className="timeline__inner">
          <header className="timeline__header">{headChildren}</header>
          <main className="timeline__main">{bodyChildren}</main>
        </div>
      </article>
    </TimelineProvider>
  )
}

Timeline.displayName = 'Timeline'
