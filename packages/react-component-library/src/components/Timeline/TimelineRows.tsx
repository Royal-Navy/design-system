import React from 'react'
import classNames from 'classnames'
import { differenceInDays, endOfWeek, max, min } from 'date-fns'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { TimelineNoData } from './TimelineNoData'
import { TimelineRowProps } from '.'
import { TimelineContext } from './context'
import { withKey } from '../../helpers'
import { formatPx, isOdd } from './helpers'
import { WEEK_START } from './constants'
import { StyledRows } from './partials/StyledRows'
import { StyledRowWeek } from './partials/StyledRowWeek'
import { StyledRowWeeksWrapper } from './partials/StyledRowWeeksWrapper'
import { StyledRowWeeks } from './partials/StyledRowWeeks'

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

function renderDefaultColumns(
  index: number,
  isOddNumber: boolean,
  offsetPx: string,
  widthPx: string
) {
  return (
    <StyledRowWeek
      isOddNumber={isOddNumber}
      marginLeft={offsetPx}
      width={widthPx}
    />
  )
}

export const TimelineRows: React.FC<TimelineRowsProps> = ({
  children,
  className,
  renderColumns,
  ...rest
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
            <StyledRowWeeksWrapper>
              <StyledRowWeeks
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
              </StyledRowWeeks>
            </StyledRowWeeksWrapper>
          )}
        </TimelineContext.Consumer>
      )}

      <StyledRows
        className={mainClasses}
        defaultStyles={!renderColumns}
        role="rowgroup"
        data-testid="timeline-rows"
        {...rest}
      >
        {hasChildren ? children : <TimelineNoData />}
      </StyledRows>
    </>
  )
}

TimelineRows.displayName = 'TimelineRows'
