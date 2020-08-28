import React from 'react'
import classNames from 'classnames'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { TimelineContext, TimelineEventsProps } from '.'

export interface TimelineRowProps extends ComponentWithClass {
  children:
    | React.ReactElement<TimelineEventsProps>
    | React.ReactElement<TimelineEventsProps>[]
  name?: string
  renderRowHeader?: (name: string) => React.ReactElement
  rowHeaderClassName?: string
}

export const TimelineRow: React.FC<TimelineRowProps> = ({
  children,
  className,
  name,
  renderRowHeader,
  rowHeaderClassName,
  ...rest
}) => {
  const classes = classNames('timeline__row', className)
  const rowHeaderClasses = classNames(
    'timeline__row-header',
    rowHeaderClassName
  )

  return (
    <TimelineContext.Consumer>
      {({ hasSide }) => (
        <div
          className={classes}
          data-testid="timeline-row"
          role="row"
          {...rest}
        >
          {hasSide && (
            <div
              className={rowHeaderClasses}
              data-testid="timeline-row-header"
              role="rowheader"
            >
              {renderRowHeader ? renderRowHeader(name) : name}
            </div>
          )}
          <div className="timeline__row-content">{children}</div>
        </div>
      )}
    </TimelineContext.Consumer>
  )
}

TimelineRow.displayName = 'TimelineRow'
