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
  type PaginationState,
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table'

import { type OnChangeEventType } from '../Pagination'
import { type ComponentWithClass } from '../../common/ComponentWithClass'
import { useDataGridState } from './useDataGridState'
import { getColumns } from './getColumns'
import {
  TABLE_DEFAULT_LAYOUT,
  TABLE_LAYOUT,
  type TableLayout,
} from './constants'
import { Table } from './Table'
import { Footer } from './Footer'
import { ProgressIndicator } from '../ProgressIndicator'
import {
  StyledDataGrid,
  StyledLoadingOverlay,
  StyledTableContainer,
} from './partials'
import { DEFAULT_ROWS_PER_PAGE } from '../RowsPerPage/RowsPerPage'
import logger from '../../utils/logger'

export interface DataGridBaseProps<T extends object>
  extends Omit<
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
  isLoading?: boolean
  footerLeftSlot?: React.ReactNode
  onSelectedRowsChange?: (rows: T[]) => void
  onExpandedChange?: (expanded: ExpandedState) => void
  onColumnFiltersChange?: (columnFilters: ColumnFiltersState) => void
  pageCount?: number
  /**
   * @deprecated There is a nested RowsPerPage component that controls the page size.
   */
  pageSize?: number
  manualSorting?: boolean
  sortingState?: SortingState
  /**
   * @deprecated Use onPaginationChange instead
   */
  onPageChange?: (
    event: OnChangeEventType,
    currentPage: number,
    totalPages: number
  ) => void
  /**
   * How the grid should lay out the rows.
   * autoHeight (default) - The grid will resize to fit all visible rows.
   * scroll - The grid will fit to the container height and scroll rows if needed.
   */
  layout?: TableLayout
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

export interface DataGridPropsWithExternalPagination<T extends object>
  extends DataGridBaseProps<T>,
    Pick<TableOptions<T>, 'onPaginationChange'> {
  manualPagination: true
  pagination: PaginationState
}

export interface DataGridPropsWithInternalPagination<T extends object>
  extends DataGridBaseProps<T> {
  onPaginationChange?: never
  manualPagination?: false
  pagination?: never
}

export type DataGridProps<T extends object> =
  | (DataGridPropsWithExternalSorting<T> &
      DataGridPropsWithExternalPagination<T>)
  | (DataGridPropsWithExternalSorting<T> &
      DataGridPropsWithInternalPagination<T>)
  | (DataGridPropsWithInternalSorting<T> &
      DataGridPropsWithExternalPagination<T>)
  | (DataGridPropsWithInternalSorting<T> &
      DataGridPropsWithInternalPagination<T>)

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
    isLoading,
    className,
    onColumnFiltersChange,
    onSelectedRowsChange,
    onExpandedChange,
    onPageChange,
    manualPagination,
    onPaginationChange,
    pageCount,
    manualSorting,
    onSortingChange,
    sorting: externalSorting,
    pagination: externalPagination,
    layout = TABLE_DEFAULT_LAYOUT,
    footerLeftSlot,
    ...rest
  } = props

  const isFullWidthOverride = useMemo(() => {
    if (layout === TABLE_LAYOUT.SCROLL && !isFullWidth) {
      logger.warn(
        'DataGrid: `TABLE_LAYOUT.SCROLL` only supported with `isFullWidth === true`'
      )

      return true
    }

    return !!isFullWidth
  }, [layout, isFullWidth])

  const localPageSize = DEFAULT_ROWS_PER_PAGE

  const {
    sorting: internalSorting,
    setSorting,
    expanded,
    setExpanded,
    rowSelection,
    setRowSelection,
    pagination: internalPagination,
    setPagination,
    columnFilters,
    setColumnFilters,
  } = useDataGridState(initialRowSelection, localPageSize)

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
      pagination: externalPagination ?? internalPagination,
      columnFilters,
    },
    enableRowSelection,
    onRowSelectionChange: setRowSelection,
    onSortingChange: manualSorting ? onSortingChange : setSorting,
    onExpandedChange: setExpanded,
    onPaginationChange: manualPagination ? onPaginationChange : setPagination,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: manualSorting ? undefined : getSortedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getPaginationRowModel: manualPagination
      ? undefined
      : getPaginationRowModel(),
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
      const [event, currentPage, totalPages] = args
      const pageIndex = currentPage - 1

      if (!manualPagination) {
        table.setPageIndex(pageIndex)
      }

      if (onPaginationChange) {
        const newPaginationState = {
          pageIndex,
          pageSize: (externalPagination ?? internalPagination).pageSize,
        }

        onPaginationChange(newPaginationState)

        return
      }

      // Legacy support for onPageChange
      onPageChange?.(event, currentPage, totalPages)
    },
    [
      table,
      manualPagination,
      onPaginationChange,
      onPageChange,
      externalPagination,
      internalPagination,
    ]
  )

  const handleRowsPerPageChange = useCallback(
    (value: string | null) => {
      if (!manualPagination && value) {
        setPagination({
          pageIndex: 0,
          pageSize: Number(value),
        })
      }

      if (onPaginationChange) {
        onPaginationChange({
          pageIndex: 0,
          pageSize: Number(value),
        })
      }
    },
    [setPagination, onPaginationChange, manualPagination]
  )

  const isPaginated = manualPagination || !!localPageSize

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

  const paginationState = externalPagination ?? internalPagination

  const hasScrolling = layout === TABLE_LAYOUT.SCROLL

  return (
    <StyledDataGrid
      className={className}
      $hasScrolling={hasScrolling}
      $isFullWidth={isFullWidthOverride}
      data-testid="styled-datagrid"
    >
      <StyledTableContainer
        $hasScrolling={hasScrolling}
        tabIndex={hasScrolling ? 0 : undefined}
      >
        <Table
          table={table}
          caption={caption}
          enableRowSelection={!!enableRowSelection}
          hideCheckboxes={!!hideCheckboxes}
          hasHover={!!hasHover}
          isFullWidth={isFullWidthOverride}
          hasSubRows={hasSubRows}
          layout={layout}
          totalColumns={totalColumns}
        />
        {isLoading && (
          <StyledLoadingOverlay>
            <ProgressIndicator />
          </StyledLoadingOverlay>
        )}
      </StyledTableContainer>
      <Footer
        dataLength={manualPagination ? undefined : data.length}
        isPaginated={isPaginated}
        onPaginationChange={handlePagination}
        onRowsPerPageChange={handleRowsPerPageChange}
        pageCount={pageCount!}
        pagination={paginationState}
        isFullWidth={isFullWidthOverride}
        footerLeftSlot={footerLeftSlot}
      />
    </StyledDataGrid>
  )
}
