import React from 'react'
import classNames from 'classnames'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { TimelineProvider } from './context'
import { TimelineComponent } from './types'

import {
  TimelineDays,
  TimelineDaysProps,
  TimelineMonths,
  TimelineMonthsProps,
  TimelineRows,
  TimelineRowsProps,
  TimelineSide,
  TimelineSideProps,
  TimelineTodayMarker,
  TimelineTodayMarkerProps,
  TimelineWeeks,
  TimelineWeeksProps,
} from '.'

import { TimelineOptions } from './context/types'
import { DEFAULTS } from './constants'
import { warnIfOverwriting } from '../../helpers'

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
  hasSide?: boolean
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

function withHasSide(
  children: React.ReactElement | React.ReactElement[],
  hasSide: boolean
) {
  return React.Children.map(children, (child) => {
    warnIfOverwriting(child.props, 'hasSide', child.props.displayName)

    return React.cloneElement(child, {
      hasSide,
    })
  })
}

function hasTimelineSideComponent(
  children: timelineChildrenType | timelineChildrenType[]
) {
  const sideChildren = extractChildren(children, [TimelineSide.name])

  if (!sideChildren.length) {
    return false
  }

  console.warn('Component `TimelineSide` is deprecated')
  return true
}

export const Timeline: React.FC<TimelineProps> = ({
  children,
  dayWidth = DEFAULTS.DAY_WIDTH,
  hasSide,
  startDate,
  endDate,
  today,
  range,
}) => {
  const options: TimelineOptions = {
    dayWidth,
    rangeInMonths: range || DEFAULTS.RANGE_IN_MONTHS,
  }

  const rootChildren = extractChildren(
    children,
    [
      TimelineDays.name,
      TimelineMonths.name,
      TimelineRows.name,
      TimelineSide.name,
      TimelineTodayMarker.name,
      TimelineWeeks.name,
    ],
    true
  )

  const hasTimelineSide = hasTimelineSideComponent(children)

  const headChildren = extractChildren(children, [
    TimelineDays.name,
    TimelineWeeks.name,
    TimelineMonths.name,
    TimelineTodayMarker.name,
  ])

  const bodyChildren = extractChildren(children, [TimelineRows.name])

  const innerClasses = classNames('timeline__inner', {
    'timeline__inner--has-side': hasSide || hasTimelineSide,
  })

  return (
    <TimelineProvider
      startDate={startDate}
      endDate={endDate}
      today={today}
      options={options}
    >
      <div className="timeline" data-testid="timeline" role="grid">
        <div className={innerClasses}>
          {rootChildren}
          <div
            className="timeline__header" // Kept for backwards compatibility in downstream applications
            data-testid="timeline-header"
            role="rowgroup"
          >
            {withHasSide(headChildren, hasSide || hasTimelineSide)}
          </div>
          {React.Children.map(
            bodyChildren,
            (bodyChild: React.ReactElement<TimelineRowsProps>) => {
              return React.cloneElement(bodyChild, {
                children: withHasSide(
                  bodyChild.props.children,
                  hasSide || hasTimelineSide
                ),
              })
            }
          )}
        </div>
      </div>
    </TimelineProvider>
  )
}

Timeline.displayName = 'Timeline'
