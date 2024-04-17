import React from 'react'
import {
  IconSortAscending,
  IconSortDescending,
  IconSortUnsorted,
} from '@royalnavy/icon-library'

import { TABLE_SORT_ORDER } from './constants'
import { StyledTableColumn } from './partials/StyledTableColumn'
import { ValueOf } from '../../helpers'

export type SortOrderType = ValueOf<typeof TABLE_SORT_ORDER>

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
  sortOrder?: SortOrderType | null
}

const SORT_ORDER_ICONS_MAP = {
  [TABLE_SORT_ORDER.ASCENDING]: (
    <IconSortAscending aria-hidden data-testid="ascending" />
  ),
  [TABLE_SORT_ORDER.DESCENDING]: (
    <IconSortDescending aria-hidden data-testid="descending" />
  ),
}

const SORT_ORDER_ARIA_SORT_MAP: Record<SortOrderType, AriaSortType> = {
  [TABLE_SORT_ORDER.ASCENDING]: 'ascending',
  [TABLE_SORT_ORDER.DESCENDING]: 'descending',
}

function getIcon(sortable: boolean, sortOrder: SortOrderType | null) {
  if (!sortable) {
    return null
  }

  if (!sortOrder) {
    return <IconSortUnsorted aria-hidden data-testid="unsorted" />
  }

  return SORT_ORDER_ICONS_MAP[sortOrder]
}

function getAriaSort(
  isSortable: boolean,
  sortOrder: SortOrderType | null
): AriaSortType | undefined {
  if (!isSortable) {
    return undefined
  }

  if (!sortOrder) {
    return 'none'
  }

  return SORT_ORDER_ARIA_SORT_MAP[sortOrder]
}

/**
 * @deprecated
 */
export const TableColumn = ({
  field,
  isSortable = false,
  onSortClick,
  sortOrder = null,
  children,
  ...rest
}: TableColumnProps) => {
  const icon = getIcon(isSortable, sortOrder)

  const onClick = () => {
    if (isSortable) {
      onSortClick?.(field)
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
