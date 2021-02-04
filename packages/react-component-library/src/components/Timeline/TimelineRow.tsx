import React from 'react'
import classNames from 'classnames'
import { useTimelineRowContent } from './hooks/useTimelineRowContent'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledNoEvents } from './partials/StyledNoEvents'
import { StyledRow } from './partials/StyledRow'
import { StyledRowContent } from './partials/StyledRowContent'
import { StyledRowHeader } from './partials/StyledRowHeader'
import { TimelineContext, TimelineEventsProps } from '.'

export interface TimelineRowProps extends ComponentWithClass {
  children:
    | React.ReactElement<TimelineEventsProps>
    | React.ReactElement<TimelineEventsProps>[]
  name?: string
  ariaLabel?: string
  renderRowHeader?: (name: string) => React.ReactElement
  isHeader?: boolean
}

export const TimelineRow: React.FC<TimelineRowProps> = ({
  children,
  name,
  ariaLabel,
  renderRowHeader,
  isHeader,
  className,
  ...rest
}) => {
  const classes = classNames('timeline__row', className)
  const { noCells, rowContentRef } = useTimelineRowContent(isHeader, [children])

  return (
    <TimelineContext.Consumer>
      {({ hasSide }) => (
        <StyledRow
          className={classes}
          data-testid="timeline-row"
          role="row"
          {...rest}
        >
          {hasSide && (
            <StyledRowHeader
              isHeader={isHeader}
              data-testid="timeline-row-header"
              role="rowheader"
              aria-label={ariaLabel || name}
            >
              {renderRowHeader ? renderRowHeader(name) : name}
            </StyledRowHeader>
          )}
          <StyledRowContent ref={rowContentRef}>
            {noCells && <StyledNoEvents role="cell">No events</StyledNoEvents>}
            {children}
          </StyledRowContent>
        </StyledRow>
      )}
    </TimelineContext.Consumer>
  )
}

TimelineRow.displayName = 'TimelineRow'
