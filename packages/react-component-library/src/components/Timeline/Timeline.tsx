import React from 'react'
import { differenceInDays } from 'date-fns'

import { TimelineProvider, TimelineContext } from './context'

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
import { getKey } from '../../helpers'
import { formatPx } from './helpers'

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
  endDate,
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
  ]).map((child, index) => {
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
      <TimelineContext.Consumer>
        {({ state: { months } }) => {
          const offset = endDate
            ? formatPx(
                dayWidth,
                differenceInDays(months[0].startDate, startDate)
              )
            : null

          return (
            <article className="timeline">
              {rootChildren}
              <div
                className="timeline__inner"
                style={{
                  marginLeft: offset,
                }}
                data-testid="timeline-inner"
              >
                <header className="timeline__header">{headChildren}</header>
                {bodyChildren}
              </div>
            </article>
          )
        }}
      </TimelineContext.Consumer>
    </TimelineProvider>
  )
}

Timeline.displayName = 'Timeline'
