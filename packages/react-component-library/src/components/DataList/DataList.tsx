import React, { useState } from 'react'
import classNames from 'classnames'

import { IconKeyboardArrowDown } from '@royalnavy/icon-library'
import { DataListItemProps } from '.'

export interface DataListProps extends ComponentWithClass {
  children:
    | React.ReactElement<DataListItemProps>
    | React.ReactElement<DataListItemProps>[]
  title: string
}

export const DataList: React.FC<DataListProps> = ({
  className,
  title,
  children,
}) => {
  const [expanded, setExpanded] = useState()
  const classes = classNames('rn-data-list', className)

  return (
    <dl className={classes} data-testid="data-list">
      <button
        className="rn-data-list__header"
        onClick={() => setExpanded(!expanded)}
        data-testid="data-list-header"
      >
        <h2 className="rn-data-list__title">
          {title}
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
