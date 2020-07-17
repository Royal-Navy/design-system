import React from 'react'
import classNames from 'classnames'
import get from 'lodash/get'
import {
  IconSortAscending,
  IconSortDescending,
  IconSortUnsorted,
} from '@royalnavy/icon-library'

import { TABLE_SORT_ORDER } from './constants'

type SortOrderType =
  | typeof TABLE_SORT_ORDER.ASCENDING
  | typeof TABLE_SORT_ORDER.DESCENDING

type AriaSortType = 'ascending' | 'descending' | 'none'

export interface TableColumnProps {
  children: string
  field: string
  isSortable?: boolean
  onSortClick?: (field: string) => void
  sortOrder?: SortOrderType
}

const SORT_ORDER_ICONS_MAP = {
  [TABLE_SORT_ORDER.ASCENDING]: <IconSortAscending data-testid="ascending" />,
  [TABLE_SORT_ORDER.DESCENDING]: (
    <IconSortDescending data-testid="descending" />
  ),
}

const SORT_ORDER_ARIA_SORT_MAP = {
  [TABLE_SORT_ORDER.ASCENDING]: 'ascending',
  [TABLE_SORT_ORDER.DESCENDING]: 'descending',
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

function getAriaSort(
  isSortable: boolean,
  sortOrder: SortOrderType
): AriaSortType {
  if (isSortable) {
    return (SORT_ORDER_ARIA_SORT_MAP[sortOrder] || 'none') as AriaSortType
  }

  return null
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
    <th
      aria-sort={getAriaSort(isSortable, sortOrder)}
      className={className}
      onClick={onClick}
      data-testid="table-header"
    >
      {children}
      {icon}
    </th>
  )
}
