import React from 'react'
import {
  IconArrowDownward,
  IconArrowUpward,
  IconSwapVert,
} from '@royalnavy/icon-library'
import {
  flexRender,
  type Table as TanstackTable,
  type SortDirection,
} from '@tanstack/react-table'

import { StyledHead, StyledRow, StyledCol, StyledColButton } from './partials'
import { FilterPopover } from './FilterPopover'

interface HeaderProps<T extends object> {
  table: TanstackTable<T>
  hasGroupedHeaders: boolean
}

type AriaSortType = 'ascending' | 'descending' | 'none'

const TABLE_SORT_ORDER = {
  ASCENDING: 'asc',
  DESCENDING: 'desc',
} as const

const SORT_ORDER_ICONS_MAP = {
  [TABLE_SORT_ORDER.ASCENDING]: (
    <IconArrowDownward aria-hidden data-testid="ascending" />
  ),
  [TABLE_SORT_ORDER.DESCENDING]: (
    <IconArrowUpward aria-hidden data-testid="descending" />
  ),
}

const SORT_ORDER_ARIA_SORT_MAP: Record<SortDirection, AriaSortType> = {
  [TABLE_SORT_ORDER.ASCENDING]: 'ascending',
  [TABLE_SORT_ORDER.DESCENDING]: 'descending',
}

export function getSortIcon(sortOrder?: SortDirection | false) {
  if (!sortOrder) {
    return <IconSwapVert aria-hidden data-testid="unsorted" />
  }

  return SORT_ORDER_ICONS_MAP[sortOrder]
}

export function getAriaSort(
  isSortable: boolean,
  sortOrder?: SortDirection | false
): AriaSortType | undefined {
  if (!isSortable) {
    return undefined
  }

  if (!sortOrder) {
    return 'none'
  }

  return SORT_ORDER_ARIA_SORT_MAP[sortOrder]
}

export const Header = <T extends object>({
  table,
  hasGroupedHeaders,
}: HeaderProps<T>) => {
  return (
    <StyledHead>
      {table.getHeaderGroups().map((headerGroup) => (
        <StyledRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            if (header.column.columnDef.meta?.fullSpanColumn) {
              return null
            }

            return (
              <StyledCol
                key={header.id}
                aria-sort={getAriaSort(
                  header.column.getCanSort(),
                  header.column.getIsSorted()
                )}
                $isHeaderGroup={hasGroupedHeaders && header.depth === 0}
                $alignment={header.column.columnDef.meta?.align}
                $width={
                  header.column.getSize() === 150
                    ? undefined
                    : header.column.getSize()
                }
                colSpan={header.colSpan}
              >
                <div>
                  {!header.isPlaceholder &&
                    flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  {header.column.getCanSort() && (
                    <StyledColButton
                      onClick={header.column.getToggleSortingHandler()}
                      aria-label="Sort column"
                    >
                      {getSortIcon(header.column.getIsSorted())}
                    </StyledColButton>
                  )}
                  {header.column.getCanFilter() && (
                    <FilterPopover header={header} table={table} />
                  )}
                </div>
              </StyledCol>
            )
          })}
        </StyledRow>
      ))}
    </StyledHead>
  )
}
