import React from 'react'
import get from 'lodash/get'
import {
  IconSortAscending,
  IconSortDescending,
  IconSortUnsorted,
} from '@defencedigital/icon-library'

import { TABLE_SORT_ORDER } from './constants'
import { StyledTableColumn } from './partials/StyledTableColumn'

type SortOrderType =
  | typeof TABLE_SORT_ORDER.ASCENDING
  | typeof TABLE_SORT_ORDER.DESCENDING

type AriaSortType = 'ascending' | 'descending' | 'none'

export interface TableColumnProps {
  /**
   * Name of the column to display in the table head.
   */
  children: string
  /**
   * Mapping of column to `field` key within supplied table data JSON.
   */
  field: string
  /**
   * Toggle whether the column is sortable.
   */
  isSortable?: boolean
  /**
   * Optional handler invoked when one of the column sort buttons is clicked.
   */
  onSortClick?: (field: string) => void
  /**
   * Optional sort order by which to sort the column.
   */
  sortOrder?: SortOrderType
}

const SORT_ORDER_ICONS_MAP = {
  [TABLE_SORT_ORDER.ASCENDING]: (
    <IconSortAscending aria-hidden data-testid="ascending" />
  ),
  [TABLE_SORT_ORDER.DESCENDING]: (
    <IconSortDescending aria-hidden data-testid="descending" />
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
      <IconSortUnsorted aria-hidden data-testid="unsorted" />
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
  ...rest
}) => {
  const icon = getIcon(isSortable, sortOrder)

  const onClick = () => {
    if (isSortable) {
      onSortClick(field)
    }
  }

  return (
    <StyledTableColumn
      aria-sort={getAriaSort(isSortable, sortOrder)}
      $isSortable={isSortable}
      onClick={onClick}
      data-testid="table-header"
      {...rest}
    >
      {children}
      {icon}
    </StyledTableColumn>
  )
}
