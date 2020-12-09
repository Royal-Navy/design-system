import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import { differenceInDays, endOfWeek, max, min } from 'date-fns'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { TimelineNoData } from './TimelineNoData'
import { TimelineRowProps } from '.'
import { TimelineContext } from './context'
import { withKey } from '../../helpers'
import { formatPx, isOdd } from './helpers'
import {
  WEEK_START,
  TIMELINE_BG_COLOR,
  TIMELINE_ALT_BG_COLOR,
} from './constants'

type TimelineRowsChildrenType =
  | React.ReactElement<TimelineRowProps>
  | React.ReactElement<TimelineRowProps>[]

export interface TimelineRowsProps extends ComponentWithClass {
  children: TimelineRowsChildrenType
  renderColumns?: (
    index: number,
    isOddNumber: boolean,
    offsetPx: string,
    widthPx: string
  ) => React.ReactElement
}

interface StyledTimelineRowWeekProps {
  isOddNumber: boolean
  marginLeft: string
  width: string
}

const StyledTimelineRowWeek = styled.div<StyledTimelineRowWeekProps>`
  display: inline-block;
  height: 100vh;
  background-color: ${({ isOddNumber }) =>
    isOddNumber ?  TIMELINE_ALT_BG_COLOR : TIMELINE_BG_COLOR};
  margin-left: ${({ marginLeft }) => marginLeft};
  width: ${({ width }) => width};
`

function renderDefaultColumns(
  index: number,
  isOddNumber: boolean,
  offsetPx: string,
  widthPx: string
) {
  return (
    <StyledTimelineRowWeek
      isOddNumber={isOddNumber}
      marginLeft={offsetPx}
      width={widthPx}
    />
  )
}

interface DefaultStyles {
  defaultStyles: boolean
}

const StyledTimelineMain = styled.div<DefaultStyles>`
  ${({ defaultStyles }) =>
    defaultStyles &&
    `
      width: auto;
      height: auto;
      min-height: 4rem;
    `}
`

const StyledTimelineRowWeeksWrapper = styled.div`
  position: relative;
`

const StyledTimelineRowWeeks = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
`

export const TimelineRows: React.FC<TimelineRowsProps> = ({
  children,
  className,
  renderColumns,
}) => {
  const hasChildren = React.Children.count(children) > 0
  const mainClasses = classNames('timeline__main', className)

  return (
    <>
      {hasChildren && (
        <TimelineContext.Consumer>
          {({
            state: {
              weeks,
              days,
              options: { dayWidth },
            },
          }) => (
            <StyledTimelineRowWeeksWrapper>
              <StyledTimelineRowWeeks
                role="presentation"
                data-testid="timeline-columns"
              >
                {weeks.map(({ startDate }, index) => {
                  const lastDateDisplayed = min([
                    endOfWeek(startDate, { weekStartsOn: WEEK_START }),
                    days[days.length - 1].date,
                  ])
                  const offsetInDays = differenceInDays(
                    startDate,
                    max([startDate, days[0].date])
                  )
                  const offsetPx = formatPx(dayWidth, offsetInDays)
                  const widthPx = formatPx(
                    dayWidth,
                    differenceInDays(lastDateDisplayed, startDate) + 1
                  )

                  const isOddNumber = isOdd(index)

                  const column = renderColumns
                    ? renderColumns(index, isOddNumber, offsetPx, widthPx)
                    : renderDefaultColumns(
                        index,
                        isOddNumber,
                        offsetPx,
                        widthPx
                      )

                  return withKey(
                    column,
                    'timeline-column',
                    startDate.toString()
                  )
                })}
              </StyledTimelineRowWeeks>
            </StyledTimelineRowWeeksWrapper>
          )}
        </TimelineContext.Consumer>
      )}

      <StyledTimelineMain
        className={mainClasses}
        defaultStyles={!renderColumns}
        role="rowgroup"
        data-testid="timeline-rows"
      >
        {hasChildren ? children : <TimelineNoData />}
      </StyledTimelineMain>
    </>
  )
}

TimelineRows.displayName = 'TimelineRows'
