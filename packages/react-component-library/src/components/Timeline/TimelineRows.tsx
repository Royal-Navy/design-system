import React from 'react'
import classNames from 'classnames'

import { TimelineRowProps } from '.'
import { getKey } from './helpers'
import { NO_DATA_MESSAGE } from './constants'

export interface TimelineRowsProps extends ComponentWithClass {
  children: React.ReactElement<TimelineRowProps> | React.ReactElement<TimelineRowProps>[]
}

const noData = (
  <span className="timeline__empty" data-testid="timeline-no-data">
    {NO_DATA_MESSAGE}
  </span>
)

export const TimelineRows: React.FC<TimelineRowsProps> = ({ children, className }) => {
  const classes = classNames('timeline__main', className)
  const childrenWithKey = React.Children.map(
    children,
    (child: React.ReactElement<TimelineRowProps>, index: number) =>
      React.cloneElement(child, {
        ...child.props,
        key: getKey('timeline-row', index),
      })
  )

  const hasChildren = childrenWithKey && childrenWithKey.length
  
  return (
    <main className={classes}>
      {hasChildren ? childrenWithKey : noData}
    </main>
  )
}

TimelineRows.displayName = 'Rows'
