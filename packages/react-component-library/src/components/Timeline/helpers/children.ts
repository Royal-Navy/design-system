import React from 'react'

import { TimelineDaysProps } from '../TimelineDays'
import { TimelineMonthsProps } from '../TimelineMonths'
import { TimelineRowsProps } from '../TimelineRows'
import { TimelineSideProps } from '../TimelineSide'
import { TimelineTodayMarkerProps } from '../TimelineTodayMarker'
import { TimelineWeeksProps } from '../TimelineWeeks'

type TimelineRootChildrenType = React.ReactElement<TimelineSideProps>

type TimelineHeadChildrenType =
  | React.ReactElement<TimelineTodayMarkerProps>
  | React.ReactElement<TimelineMonthsProps>
  | React.ReactElement<TimelineWeeksProps>
  | React.ReactElement<TimelineDaysProps>

type TimelineBodyChildrenType = React.ReactElement<TimelineRowsProps>

export type timelineChildrenType =
  | TimelineRootChildrenType
  | TimelineHeadChildrenType
  | TimelineBodyChildrenType

export function extractChildren(
  children: timelineChildrenType | timelineChildrenType[],
  types: React.ReactElement['type'][],
  inverse = false
) {
  return React.Children.toArray(children).filter((child: React.ReactNode) => {
    const type = (child as React.ReactElement)?.type

    return inverse ? !types.includes(type) : types.includes(type)
  })
}
