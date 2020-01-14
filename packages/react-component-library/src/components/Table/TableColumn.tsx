import React from 'react'
import classNames from 'classnames'
import get from 'lodash/get'
import {
  IconSortAscending,
  IconSortDescending,
  IconSortUnsorted,
} from '@royalnavy/icon-library'

import { TABLE_SORT_ORDER } from './constants'

export interface TableColumnProps {
  children: string
  field: string
  isSortable?: boolean
  onSortClick?: (field: string) => void
  sortOrder?: typeof TABLE_SORT_ORDER.ASCENDING | typeof TABLE_SORT_ORDER.DESCENDING
}

const SORT_ORDER_ICONS_MAP = {
  [TABLE_SORT_ORDER.ASCENDING]: <IconSortAscending data-testid="ascending" />,
  [TABLE_SORT_ORDER.DESCENDING]: <IconSortDescending data-testid="descending" />,
}

function getIcon(sortable: boolean, sortOrder: string) {
  if (!sortable) {
    return null
  }

  return (
    get(SORT_ORDER_ICONS_MAP, sortOrder) || (
      <IconSortUnsorted data-testid="unsorted" />
    )
  )
}

export const TableColumn: React.FC<TableColumnProps> = ({
  field,
  isSortable,
  onSortClick,
  sortOrder,
  children,
}) => {
  const className = classNames({ 'is-sortable': isSortable })
  const icon = getIcon(isSortable, sortOrder)

  function onClick() {
    if (isSortable) {
      onSortClick(field)
    }
  }

  return (
    <th className={className} onClick={onClick} data-testid="table-header">
      {children}
      {icon}
    </th>
  )
}
