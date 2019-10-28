import React from 'react'
import classNames from 'classnames'
import get from 'lodash/get'
import {
  IconSortAscending,
  IconSortDescending,
  IconSortUnsorted,
} from '@royalnavy/icon-library'

import { ASCENDING, DESCENDING } from './constants'

export interface ColumnProps {
  field: string
  sortable?: boolean
  onSortClick?: (field: string) => void
  sortOrder?: string
  children: string
}

const icons = {
  [ASCENDING]: <IconSortAscending data-testid="ascending" />,
  [DESCENDING]: <IconSortDescending data-testid="descending" />,
}

function getIcon(sortable: boolean, sortOrder: string) {
  return sortable
    ? get(icons, sortOrder) || <IconSortUnsorted data-testid="unsorted" />
    : null
}

export const Column: React.FC<ColumnProps> = ({
  field,
  sortable,
  onSortClick,
  sortOrder,
  children,
}) => {
  const className = classNames({ 'is-sortable': sortable })
  const icon = getIcon(sortable, sortOrder)

  function onClick() {
    if (sortable) {
      onSortClick(field)
    }
  }

  return (
    <th className={className} onClick={onClick}>
      {children}
      {icon}
    </th>
  )
}
