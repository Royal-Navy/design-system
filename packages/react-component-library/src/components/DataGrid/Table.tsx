import React, { useMemo } from 'react'
import { type Table as TanstackTable } from '@tanstack/react-table'

import { Header } from './Header'
import { Body } from './Body'
import { StyledTable, StyledCaption } from './partials'

interface TableProps<T extends object> {
  table: TanstackTable<T>
  caption?: string
  enableRowSelection: boolean
  hideCheckboxes: boolean
  hasHover: boolean
  isFullWidth: boolean
  hasSubRows: boolean
  totalColumns: number
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
      <Header table={table} hasGroupedHeaders={hasGroupedHeaders} />
      <Body
        table={table}
        enableRowSelection={enableRowSelection}
        hasHover={hasHover}
        totalColumns={totalColumns}
      />
    </StyledTable>
  )
}
