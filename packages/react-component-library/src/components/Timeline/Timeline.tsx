import React from 'react'

import { TimelineProvider } from './context'
import { TimelineComponent } from './types'

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
import { getKey } from '../../helpers'

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
  endDate?: Date
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

function extractChildren(
  children: timelineChildrenType | timelineChildrenType[],
  names: string[],
  inverse?: boolean
) {
  return (children as []).filter((child) => {
    return inverse ? !isComponentOf(child, names) : isComponentOf(child, names)
  })
}

function extractRowData(
  rowGroups: timelineBodyChildrenType | timelineBodyChildrenType[]
) {
  return (rowGroups as []).map(
    ({ props: { children } }: timelineBodyChildrenType) => {
      const rows =
        React.Children.map(
          children,
          ({ props: { name } }: React.ReactElement<TimelineRowProps>) => ({
            name,
          })
        ) || []

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
  endDate,
  today,
  range,
}) => {
  const options: TimelineOptions = {
    dayWidth,
    rangeInMonths: range || DEFAULTS.RANGE_IN_MONTHS,
  }

  const bodyChildren = extractChildren(children, [TimelineRows.name])

  const headChildren = extractChildren(children, [
    TimelineDays.name,
    TimelineWeeks.name,
    TimelineMonths.name,
    TimelineTodayMarker.name,
  ])

  const rootChildren = extractChildren(
    children,
    [
      TimelineRows.name,
      TimelineDays.name,
      TimelineWeeks.name,
      TimelineMonths.name,
      TimelineTodayMarker.name,
    ],
    true
  ).map((child, index) => {
    if (isComponentOf(child, [TimelineSide.name])) {
      return React.cloneElement(child, {
        rowGroups: extractRowData(bodyChildren),
        headChildren,
        key: getKey('root-component', index),
      })
    }

    return child
  })

  return (
    <TimelineProvider
      startDate={startDate}
      endDate={endDate}
      today={today}
      options={options}
    >
      <div className="timeline" data-testid="timeline" role="grid">
        {rootChildren}
        <div className="timeline__inner" data-testid="timeline-inner">
          <div
            className="timeline__header"
            data-testid="timeline-header"
            role="rowgroup"
          >
            {headChildren}
          </div>
          {bodyChildren}
        </div>
      </div>
    </TimelineProvider>
  )
}

Timeline.displayName = 'Timeline'
