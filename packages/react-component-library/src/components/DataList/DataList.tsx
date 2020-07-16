import React, { useState } from 'react'
import classNames from 'classnames'
import { IconKeyboardArrowDown } from '@royalnavy/icon-library'

import { Badge } from '../Badge'
import { DataListItemProps } from '.'
import { getId } from '../../helpers'

export interface DataListProps extends ComponentWithClass {
  children:
    | React.ReactElement<DataListItemProps>
    | React.ReactElement<DataListItemProps>[]
  isCollapsible?: boolean
  title: string
}

function getAriaAttributes(isCollapsible: boolean, expanded: boolean) {
  const sheetId = getId('sheet')

  if (isCollapsible) {
    return {
      'aria-expanded': expanded,
      'aria-label': expanded ? 'Hide data' : 'Show data',
      'aria-owns': sheetId,
    }
  }

  return null
}

export const DataList: React.FC<DataListProps> = ({
  className,
  isCollapsible,
  title,
  children,
}) => {
  const [expanded, setExpanded] = useState(false)
  const classes = classNames('rn-data-list', className, {
    'is-collapsible': isCollapsible,
    'is-expanded': expanded,
  })
  const ariaAttributes = getAriaAttributes(isCollapsible, expanded)
  const sheetId = ariaAttributes && ariaAttributes['aria-owns']

  return (
    <dl className={classes} data-testid="data-list">
      <button
        className="rn-data-list__header"
        onClick={() => setExpanded(!expanded)}
        data-testid="data-list-header"
        {...ariaAttributes}
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
          <IconKeyboardArrowDown aria-hidden data-testid="arrow-down-icon" />
        </span>
      </button>
      <div
        className="rn-data-list__sheet"
        data-testid="data-list-sheet"
        id={sheetId}
      >
        {children}
      </div>
    </dl>
  )
}

DataList.displayName = 'DataList'
