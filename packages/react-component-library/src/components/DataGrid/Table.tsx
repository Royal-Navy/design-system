import React, { useMemo } from 'react'
import { type Table as TanstackTable } from '@tanstack/react-table'

import { Header } from './Header'
import { Body } from './Body'
import { StyledTable, StyledCaption } from './partials'
import { TABLE_DEFAULT_LAYOUT, type TableLayout } from './constants'

interface TableProps<T extends object> {
  /**
   * The tanstack/react-table instance.
   */
  table: TanstackTable<T>
  /**
   * Accessible caption for the table.
   */
  caption?: string
  /**
   * Whether row selection is enabled.
   */
  enableRowSelection: boolean
  /**
   * Whether to hide checkboxes for row selection.
   */
  hideCheckboxes: boolean
  /**
   * Whether to apply hover styling to rows.
   */
  hasHover: boolean
  /**
   * Whether the table should take up the full width of its container.
   */
  isFullWidth: boolean
  /**
   * Whether the table contains expandable sub-rows.
   */
  hasSubRows: boolean
  /**
   * Total number of columns to display.
   */
  totalColumns: number
  /**
   * How the table should lay out the rows.
   * autoHeight (default) - The table will resize to fit all visible rows.
   * scroll - The table will fit to the container height and scroll rows if needed.
   */
  layout?: TableLayout
}

export const Table = <T extends object>({
  table,
  caption,
  enableRowSelection,
  hideCheckboxes,
  hasHover,
  isFullWidth,
  hasSubRows,
  totalColumns,
  layout = TABLE_DEFAULT_LAYOUT,
}: TableProps<T>) => {
  const hasGroupedHeaders = useMemo(() => {
    return table.getHeaderGroups().reduce((acc, group) => {
      return acc || group.headers.some((header) => header.depth > 1)
    }, false)
  }, [table])

  return (
    <StyledTable
      $hasRowSelection={!!enableRowSelection && !hideCheckboxes}
      $isFullWidth={isFullWidth}
      $hasSubRows={hasSubRows}
      role="grid"
    >
      {caption && <StyledCaption>{caption}</StyledCaption>}
      <Header
        table={table}
        hasGroupedHeaders={hasGroupedHeaders}
        layout={layout}
      />
      <Body
        table={table}
        enableRowSelection={enableRowSelection}
        hasHover={hasHover}
        totalColumns={totalColumns}
      />
    </StyledTable>
  )
}
