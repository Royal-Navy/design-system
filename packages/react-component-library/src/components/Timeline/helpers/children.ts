import React from 'react'

import { TimelineDaysProps } from '../TimelineDays'
import { TimelineMonthsProps } from '../TimelineMonths'
import { TimelineRowsProps } from '../TimelineRows'
import { TimelineSideProps } from '../TimelineSide'
import { TimelineTodayMarkerProps } from '../TimelineTodayMarker'
import { TimelineWeeksProps } from '../TimelineWeeks'

export type timelineRootChildrenType = React.ReactElement<TimelineSideProps>

export type timelineHeadChildrenType =
  | React.ReactElement<TimelineTodayMarkerProps>
  | React.ReactElement<TimelineMonthsProps>
  | React.ReactElement<TimelineWeeksProps>
  | React.ReactElement<TimelineDaysProps>

export type timelineBodyChildrenType = React.ReactElement<TimelineRowsProps>

export type timelineChildrenType =
  | timelineRootChildrenType
  | timelineHeadChildrenType
  | timelineBodyChildrenType

export function extractChildren(
  children: timelineChildrenType | timelineChildrenType[],
  types: React.ReactElement['type'][],
  inverse?: boolean
) {
  return React.Children.toArray(children).filter((child: React.ReactNode) => {
    const type = (child as React.ReactElement)?.type

    return inverse ? !types.includes(type) : types.includes(type)
  })
}
