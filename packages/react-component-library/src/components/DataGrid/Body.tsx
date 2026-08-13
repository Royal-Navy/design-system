import React from 'react'
import {
  flexRender,
  type Table as TanstackTable,
  type Row as TanstackRow,
} from '@tanstack/react-table'

import {
  StyledBody,
  StyledRow,
  StyledCell,
  StyledEmptyState,
  StyledEmptyStateCell,
  StyledEmptyStateIcon,
  StyledEmptyStateTitle,
} from './partials'

export const DATA_GRID_EMPTY_STATE_TEST_ID = 'data-grid-empty-state'

interface RowProps<T extends object> {
  /**
   * The tanstack/react-table row instance.
   */
  row: TanstackRow<T>
  /**
   * The tanstack/react-table instance.
   */
  table: TanstackTable<T>
  /**
   * Whether row selection is enabled.
   */
  enableRowSelection: boolean
  /**
   * Whether to apply hover styling to rows.
   */
  hasHover: boolean
  /**
   * Total number of columns to display.
   */
  totalColumns: number
}

interface BodyProps<T extends object> {
  /**
   * The tanstack/react-table instance.
   */
  table: TanstackTable<T>
  /**
   * Whether row selection is enabled.
   */
  enableRowSelection: boolean
  /**
   * Whether to apply hover styling to rows.
   */
  hasHover: boolean
  /**
   * Total number of columns to display.
   */
  totalColumns: number
  /**
   * Message shown in place of the rows when there is no data to display.
   */
  emptyStateMessage?: string
  /**
   * Icon shown above the empty state message.
   */
  emptyStateIcon?: React.ReactNode
  /**
   * Whether the grid is loading, in which case the empty state is suppressed.
   */
  isLoading?: boolean
}

const EmptyState = ({
  totalColumns,
  emptyStateMessage,
  emptyStateIcon,
}: {
  totalColumns: number
  emptyStateMessage: string
  emptyStateIcon?: React.ReactNode
}) => (
  <StyledRow $fullSpanColumn>
    <StyledEmptyStateCell colSpan={totalColumns}>
      <StyledEmptyState data-testid={DATA_GRID_EMPTY_STATE_TEST_ID} role="status">
        {emptyStateIcon && (
          <StyledEmptyStateIcon>{emptyStateIcon}</StyledEmptyStateIcon>
        )}
        <StyledEmptyStateTitle>{emptyStateMessage}</StyledEmptyStateTitle>
      </StyledEmptyState>
    </StyledEmptyStateCell>
  </StyledRow>
)

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
        key={`${row.id}-main`}
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
  emptyStateMessage,
  emptyStateIcon,
  isLoading,
}: BodyProps<T>) => {
  const rows = table.getRowModel().rows
  const showEmptyState = !isLoading && !rows.length && !!emptyStateMessage

  return (
    <StyledBody>
      {showEmptyState ? (
        <EmptyState
          totalColumns={totalColumns}
          emptyStateMessage={emptyStateMessage}
          emptyStateIcon={emptyStateIcon}
        />
      ) : (
        rows.map((row) => (
          <React.Fragment key={row.id}>
            <Row
              row={row}
              table={table}
              enableRowSelection={enableRowSelection}
              hasHover={hasHover}
              totalColumns={totalColumns}
            />
          </React.Fragment>
        ))
      )}
    </StyledBody>
  )
}
