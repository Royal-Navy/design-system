import React from 'react'
import classNames from 'classnames'

import { RowProps } from '.'
import { getKey } from './helpers'
import { NO_DATA_MESSAGE } from './constants'

export interface RowsProps extends ComponentWithClass {
  children: React.ReactElement<RowProps> | React.ReactElement<RowProps>[]
}

const noData = (
  <span className="timeline__empty" data-testid="timeline-no-data">
    {NO_DATA_MESSAGE}
  </span>
)

export const Rows: React.FC<RowsProps> = ({ children, className }) => {
  const classes = classNames('timeline__main', className)
  const childrenWithKey = React.Children.map(
    children,
    (child: React.ReactElement<RowProps>, index: number) =>
      React.cloneElement(child, {
        ...child.props,
        key: getKey('timeline-row', index),
      })
  )

  return (
    <main className={classes}>
      {childrenWithKey && childrenWithKey.length ? childrenWithKey : noData}
    </main>
  )
}

Rows.displayName = 'Rows'
