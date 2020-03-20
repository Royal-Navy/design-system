import React, { useState } from 'react'
import classNames from 'classnames'
import { IconKeyboardArrowDown } from '@royalnavy/icon-library'

import { Badge } from '..'
import { DataListItemProps } from '.'

export interface DataListProps extends ComponentWithClass {
  children:
    | React.ReactElement<DataListItemProps>
    | React.ReactElement<DataListItemProps>[]
  isCollapsible?: boolean
  title: string
}

export const DataList: React.FC<DataListProps> = ({
  className,
  isCollapsible,
  title,
  children,
}) => {
  const [expanded, setExpanded] = useState()
  const classes = classNames('rn-data-list', className, {
    'is-collapsible': isCollapsible,
    'is-expanded': expanded,
  })

  return (
    <dl className={classes} data-testid="data-list">
      <button
        className="rn-data-list__header"
        onClick={() => setExpanded(!expanded)}
        data-testid="data-list-header"
      >
        <h2 className="rn-data-list__title">
          {title}
          {isCollapsible && (
            <Badge className="rn-data-list__badge" size="small">
              {(children as React.ReactElement<DataListItemProps>[]).length}
            </Badge>
          )}
        </h2>
        <span className="rn-data-list__action">
          <IconKeyboardArrowDown />
        </span>
      </button>
      <div className="rn-data-list__sheet">{children}</div>
    </dl>
  )
}

DataList.displayName = 'DataList'
