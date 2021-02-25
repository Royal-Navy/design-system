import React from 'react'
import { differenceInDays, endOfWeek, max, min } from 'date-fns'

import { formatPx, isOdd } from './helpers'
import { StyledWeekColumn } from './partials/StyledWeekColumn'
import { StyledWeekColumnsWrapper } from './partials/StyledWeekColumnsWrapper'
import { StyledWeekColumns } from './partials/StyledWeekColumns'
import { TimelineContext } from './context'
import { WEEK_START } from './constants'
import { withKey } from '../../helpers'

function renderDefaultColumns(
  index: number,
  isOddNumber: boolean,
  offsetPx: string,
  widthPx: string
) {
  return (
    <StyledWeekColumn
      isOddNumber={isOddNumber}
      marginLeft={offsetPx}
      width={widthPx}
    />
  )
}

interface TimelineWeekColumnProps {
  renderColumns?: (
    index: number,
    isOddNumber: boolean,
    offsetPx: string,
    widthPx: string
  ) => React.ReactElement
}

export const TimelineWeekColumns: React.FC<TimelineWeekColumnProps> = ({
  renderColumns,
}) => (
  <TimelineContext.Consumer>
    {({ state: { days, options, weeks } }) => (
      <StyledWeekColumnsWrapper>
        <StyledWeekColumns role="presentation" data-testid="timeline-columns">
          {weeks.map(({ startDate }, index) => {
            const lastDateDisplayed = min([
              endOfWeek(startDate, { weekStartsOn: WEEK_START }),
              days[days.length - 1].date,
            ])
            const offsetInDays = differenceInDays(
              startDate,
              max([startDate, days[0].date])
            )
            const offsetPx = formatPx(options.scale.widths.day, offsetInDays)
            const widthPx = formatPx(
              options.scale.widths.day,
              differenceInDays(lastDateDisplayed, startDate) + 1
            )

            const isOddNumber = isOdd(index)

            const column = renderColumns
              ? renderColumns(index, isOddNumber, offsetPx, widthPx)
              : renderDefaultColumns(index, isOddNumber, offsetPx, widthPx)

            return withKey(column, 'timeline-column', startDate.toString())
          })}
        </StyledWeekColumns>
      </StyledWeekColumnsWrapper>
    )}
  </TimelineContext.Consumer>
)

TimelineWeekColumns.displayName = 'TimelineRowWeeks'
