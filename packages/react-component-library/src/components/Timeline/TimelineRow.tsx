import React from 'react'
import classNames from 'classnames'

import { PropsWithClassName } from '../../types/PropsWithClassName'
import { TimelineEventsProps } from '.'

export interface TimelineRowProps extends PropsWithClassName {
  children:
    | React.ReactElement<TimelineEventsProps>
    | React.ReactElement<TimelineEventsProps>[]
  name: string
}

export const TimelineRow: React.FC<TimelineRowProps> = ({
  children,
  className,
}) => {
  const classes = classNames('timeline__row', className)

  return (
    <div className={classes} data-testid="timeline-row">
      {children}
    </div>
  )
}

TimelineRow.displayName = 'TimelineRow'
