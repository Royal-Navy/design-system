import React, { useContext } from 'react'
import classNames from 'classnames'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { extractChildren, timelineChildrenType } from './helpers/children'
import { StyledHeader } from './partials/StyledHeader'
import { StyledInner } from './partials/StyledInner'
import { StyledTimeline } from './partials/StyledTimeline'
import { TimelineContext } from './context'
import { TimelineDays } from './TimelineDays'
import { TimelineHours } from './TimelineHours'
import { TimelineMonths } from './TimelineMonths'
import { TimelineRows, TimelineRowsProps } from './TimelineRows'
import { TimelineTodayMarker } from './TimelineTodayMarker'
import { TimelineToolbar } from './TimelineToolbar'
import { TimelineWeekColumns } from './TimelineWeekColumns'
import { TimelineWeeks } from './TimelineWeeks'
import { useTimelineWidth } from './hooks/useTimelineWidth'

export interface ComponentNameProps extends ComponentWithClass {
  children: timelineChildrenType | timelineChildrenType[]
  hasSide: boolean
  hideScaling: boolean
  hideToolbar: boolean
  isFullWidth: boolean
}

function getRenderColumns(
  children: timelineChildrenType | timelineChildrenType[]
) {
  const rowsChildren = extractChildren(children, [TimelineRows])

  return (rowsChildren[0] as React.ReactElement<TimelineRowsProps>).props.render
}

export const TimelineGrid = ({
  children,
  className,
  hasSide,
  hideScaling,
  hideToolbar,
  isFullWidth,
  ...rest
}: ComponentNameProps) => {
  const {
    state: { currentScaleOption },
  } = useContext(TimelineContext)
  const { timelineRef } = useTimelineWidth(hasSide, isFullWidth)

  const renderColumns = getRenderColumns(children)

  const rootChildren = extractChildren(
    children,
    [
      TimelineDays,
      TimelineHours,
      TimelineMonths,
      TimelineRows,
      TimelineTodayMarker,
      TimelineWeeks,
    ],
    true
  )

  const headChildren = extractChildren(children, [
    TimelineDays,
    TimelineHours,
    TimelineWeeks,
    TimelineMonths,
    TimelineTodayMarker,
  ])

  const bodyChildren = extractChildren(children, [TimelineRows])

  return (
    <>
      {currentScaleOption && !hideToolbar && (
        <TimelineToolbar hideScaling={hideScaling} />
      )}
      <StyledTimeline
        className={classNames('timeline', className)}
        data-testid="timeline"
        ref={timelineRef}
        role="grid"
        {...rest}
      >
        {currentScaleOption && (
          <StyledInner className="timeline__inner" $hasSide={hasSide}>
            <>
              <TimelineWeekColumns render={renderColumns} />
              {rootChildren}
              <StyledHeader
                className="timeline__header"
                data-testid="timeline-header"
                role="rowgroup"
              >
                {headChildren}
              </StyledHeader>
              {bodyChildren}
            </>
          </StyledInner>
        )}
      </StyledTimeline>
    </>
  )
}

TimelineGrid.displayName = 'TimelineGrid'
