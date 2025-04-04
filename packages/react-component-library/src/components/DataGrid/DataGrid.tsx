// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./DataGrid.d.ts" />

import React, { useEffect, useMemo, useCallback } from 'react'
import {
  type TableOptions,
  type ColumnDef,
  type ExpandedState,
  type RowSelectionState,
  type ColumnFiltersState,
  type SortingState,
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table'

import { type PaginationProps, type OnChangeEventType } from '../Pagination'
import { type ComponentWithClass } from '../../common/ComponentWithClass'
import { useDataGridState } from './useDataGridState'
import { getColumns } from './getColumns'
import { Table } from './Table'
import { Pagination } from './Pagination'
import { StyledDataGrid } from './partials'

export interface DataGridBaseProps<T extends object>
  extends Pick<Partial<PaginationProps>, 'pageSize'>,
    Omit<
      TableOptions<T>,
      | 'state'
      | 'data'
      | 'columns'
      | 'getCoreRowModel'
      | 'getSortedRowModel'
      | 'getExpandedRowModel'
      | 'getPaginationRowModel'
      | 'getFilteredRowModel'
      | 'onRowSelectionChange'
      | 'onExpandedChange'
      | 'onPaginationChange'
      | 'onColumnFiltersChange'
      | 'onSortingChange'
    >,
    Omit<ComponentWithClass, 'children'> {
  data: T[]
  columns: ColumnDef<T>[]
  caption?: string
  initialRowSelection?: RowSelectionState
  isFullWidth?: boolean
  hasHover?: boolean
  hideCheckboxes?: boolean
  onSelectedRowsChange?: (rows: T[]) => void
  onExpandedChange?: (expanded: ExpandedState) => void
  onColumnFiltersChange?: (columnFilters: ColumnFiltersState) => void
  pageCount?: number
  onPageChange?: (
    event: OnChangeEventType,
    currentPage: number,
    totalPages: number
  ) => void
  manualSorting?: boolean
  sortingState?: SortingState
}

export interface DataGridPropsWithExternalSorting<T extends object>
  extends DataGridBaseProps<T>,
    Pick<TableOptions<T>, 'onSortingChange'> {
  manualSorting: true
  sorting: SortingState
}

export interface DataGridPropsWithInternalSorting<T extends object>
  extends DataGridBaseProps<T> {
  onSortingChange?: never
  manualSorting?: false
  sorting?: never
}

export type DataGridProps<T extends object> =
  | DataGridPropsWithExternalSorting<T>
  | DataGridPropsWithInternalSorting<T>

export const DataGrid = <T extends object>(props: DataGridProps<T>) => {
  const {
    data,
    columns,
    caption,
    debugTable,
    enableRowSelection,
    hasHover,
    hideCheckboxes,
    initialRowSelection,
    isFullWidth,
    className,
    onColumnFiltersChange,
    onSelectedRowsChange,
    onExpandedChange,
    onPageChange,
    manualPagination,
    pageCount,
    pageSize,
    manualSorting,
    onSortingChange,
    sorting: externalSorting,
    ...rest
  } = props

  const {
    sorting: internalSorting,
    setSorting,
    expanded,
    setExpanded,
    rowSelection,
    setRowSelection,
    pagination,
    setPagination,
    columnFilters,
    setColumnFilters,
  } = useDataGridState(initialRowSelection, pageSize, data.length)

  const hasSubRows = useMemo(() => {
    // @ts-ignore
    return data.some((row) => row?.subRows?.length > 0)
  }, [data])

  const table = useReactTable({
    data,
    columns: getColumns(
      columns,
      !!enableRowSelection,
      hideCheckboxes,
      hasSubRows
    ),
    state: {
      sorting: externalSorting ?? internalSorting,
      rowSelection,
      expanded,
      pagination,
      columnFilters,
    },
    enableRowSelection,
    onRowSelectionChange: setRowSelection,
    onSortingChange: manualSorting ? onSortingChange : setSorting,
    onExpandedChange: setExpanded,
    onPaginationChange: setPagination,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: manualSorting ? undefined : getSortedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    manualPagination,
    paginateExpandedRows: false,
    pageCount: manualPagination ? pageCount : undefined,
    // @ts-ignore
    getSubRows: (row) => row?.subRows || [],
    debugTable,
    manualSorting,
    ...rest,
  } as TableOptions<T>)

  useEffect(() => {
    onSelectedRowsChange?.(
      table.getSelectedRowModel().flatRows.map(({ original }) => original)
    )
  }, [rowSelection, table, onSelectedRowsChange])

  useEffect(() => {
    onExpandedChange?.(expanded)
  }, [expanded, onExpandedChange])

  useEffect(() => {
    onColumnFiltersChange?.(columnFilters)
  }, [columnFilters, onColumnFiltersChange])

  const handlePagination = useCallback(
    (...args) => {
      const [_, currentPage] = args
      table.setPageIndex(currentPage - 1)
      // @ts-ignore
      onPageChange?.(...args)
    },
    [table, onPageChange]
  )

  const isPaginated = manualPagination || !!pageSize

  const totalColumns = useMemo(() => {
    let baseColumnCount = columns.length

    if (enableRowSelection && !hideCheckboxes) {
      baseColumnCount += 1
    }

    if (hasSubRows) {
      baseColumnCount += 1
    }

    if (enableRowSelection && !hideCheckboxes && hasSubRows) {
      baseColumnCount -= 1
    }

    const fullSpanColumnCount = columns.filter(
      // @ts-ignore
      (column) => column.meta?.fullSpanColumn
    ).length
    baseColumnCount -= fullSpanColumnCount

    return baseColumnCount
  }, [enableRowSelection, hideCheckboxes, hasSubRows, columns])

  return (
    <StyledDataGrid className={className}>
      <div>Row count: {data.length}</div>
      <Table
        table={table}
        caption={caption}
        enableRowSelection={!!enableRowSelection}
        hideCheckboxes={!!hideCheckboxes}
        hasHover={!!hasHover}
        isFullWidth={!!isFullWidth}
        hasSubRows={hasSubRows}
        totalColumns={totalColumns}
      />
      {isPaginated && (
        <Pagination
          pagination={pagination}
          pageSize={pageSize!}
          dataLength={data.length}
          pageCount={pageCount!}
          onChange={handlePagination}
        />
      )}
    </StyledDataGrid>
  )
}
