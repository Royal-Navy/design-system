import React from 'react'
import {
  flexRender,
  type Table as TanstackTable,
  type Row as TanstackRow,
} from '@tanstack/react-table'

import { StyledBody, StyledRow, StyledCell } from './partials'

interface RowProps<T extends object> {
  row: TanstackRow<T>
  table: TanstackTable<T>
  enableRowSelection: boolean
  hasHover: boolean
  totalColumns: number
}

interface BodyProps<T extends object> {
  table: TanstackTable<T>
  enableRowSelection: boolean
  hasHover: boolean
  totalColumns: number
}

function isLastInBranch<T>(row: TanstackRow<T>, allRows: TanstackRow<T>[]) {
  if (row.depth === 0) {
    return false
  }

  const parentRow = allRows.find((r) => r.id === row.parentId)!
  const siblingRows = parentRow.subRows
  const lastSiblingRow = siblingRows[siblingRows.length - 1]

  return lastSiblingRow.id === row.id
}

const Row = <T extends object>({
  row,
  table,
  enableRowSelection,
  hasHover,
  totalColumns,
}: RowProps<T>) => {
  const normalCells = row
    .getVisibleCells()
    .filter((cell) => !cell.column.columnDef.meta?.fullSpanColumn)

  const fullSpanCells = row
    .getVisibleCells()
    .filter((cell) => cell.column.columnDef.meta?.fullSpanColumn)

  return (
    <>
      <StyledRow
        id={row.id}
        $depth={row.depth}
        $isLastInBranch={isLastInBranch(row, table.getRowModel().rows)}
        $hasHover={!!enableRowSelection && hasHover}
        $hasFocus={!!enableRowSelection && hasHover && row.getIsSelected()}
      >
        {normalCells.map((cell) => (
          <StyledCell
            key={cell.id}
            as="td"
            $alignment={cell.column.columnDef.meta?.align}
            colSpan={1}
            $width={
              cell.column.getSize() === 150 ? undefined : cell.column.getSize()
            }
            $hasBorder={!fullSpanCells.length}
            onClick={
              !!enableRowSelection && hasHover
                ? row.getToggleSelectedHandler()
                : undefined
            }
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </StyledCell>
        ))}
      </StyledRow>

      {fullSpanCells.map((cell, index) => (
        <StyledRow
          key={`${cell.id}-fullspan`}
          id={`${cell.id}-fullspan`}
          $fullSpanColumn
        >
          <StyledCell
            key={cell.id}
            as="td"
            colSpan={totalColumns}
            $alignment={cell.column.columnDef.meta?.align}
            $hasBorder={index === fullSpanCells.length - 1}
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </StyledCell>
        </StyledRow>
      ))}
    </>
  )
}

export const Body = <T extends object>({
  table,
  enableRowSelection,
  hasHover,
  totalColumns,
}: BodyProps<T>) => {
  console.log(table.getRowModel().rows.length)
  return (
    <StyledBody>
      {table.getRowModel().rows.map((row) => (
        <Row
          key={row.id}
          row={row}
          table={table}
          enableRowSelection={enableRowSelection}
          hasHover={hasHover}
          totalColumns={totalColumns}
        />
      ))}
    </StyledBody>
  )
}
