// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./DataGrid.d.ts" />

import React, { useCallback, useEffect, useMemo } from 'react'
import {
  type ColumnDef,
  type ColumnFiltersState,
  type ExpandedState,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel, PaginationState,
  type RowSelectionState,
  type SortingState,
  type TableOptions,
  useReactTable,
} from '@tanstack/react-table'

import { type OnChangeEventType, type PaginationProps } from '../Pagination'
import { type ComponentWithClass } from '../../common/ComponentWithClass'
import { useDataGridState } from './useDataGridState'
import { getColumns } from './getColumns'
import { Table } from './Table'
import { Pagination, usePagination } from './Pagination'
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
    currentPage: number,
    pageSize: number
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

  const handlePageChange = useCallback((updater: PaginationState | ((old: PaginationState) => PaginationState)) => {
    setPagination((prev) => {
      const newState = typeof updater === 'function' ? updater(prev) : updater

      onPageChange?.(newState.pageIndex, pageSize!)

      return newState
    })

  }, [setPagination, onPageChange, pageSize])

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
    onPaginationChange: handlePageChange,
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
      (column) => column.meta?.fullSpanColumn
    ).length
    baseColumnCount -= fullSpanColumnCount

    return baseColumnCount
  }, [enableRowSelection, hideCheckboxes, hasSubRows, columns])

  return (
    <StyledDataGrid className={className}>
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
      {isPaginated && <Pagination table={table} />}
    </StyledDataGrid>
  )
}
