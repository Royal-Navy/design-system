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
  type Updater,
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
  /**
   * The data to display in the table.
   */
  data: T[]
  /**
   * The columns configuration for the table.
   */
  columns: ColumnDef<T>[]
  /**
   * Accessible caption for the table.
   */
  caption?: string
  /**
   * Initial row selection state. Use this to pre-select rows when the table renders.
   */
  initialRowSelection?: RowSelectionState
  /**
   * Whether the table should take up the full width of its container.
   */
  isFullWidth?: boolean
  /**
   * Whether to apply hover styling to rows.
   */
  hasHover?: boolean
  /**
   * Whether to hide the selection checkboxes when row selection is enabled.
   */
  hideCheckboxes?: boolean
  /**
   * Whether to display a loading indicator over the table.
   */
  isLoading?: boolean
  /**
   * Content to be displayed in the left side of the footer.
   * Useful for adding action buttons or custom controls.
   */
  footerLeftSlot?: React.ReactNode
  /**
   * Callback function that is called when selected rows change for the
   * current data slice (e.g. current page / filtered view). If you need
   * cross-page selections, use the controlled `rowSelection` API.
   */
  onSelectedRowsChange?: (rows: T[]) => void
  /**
   * Callback function that is called when expanded state changes.
   * Useful for tracking which rows are expanded when using sub-rows.
   */
  onExpandedChange?: (expanded: ExpandedState) => void
  /**
   * Callback function that is called when column filters change.
   */
  onColumnFiltersChange?: (columnFilters: ColumnFiltersState) => void
  /**
   * Total number of pages when using manual pagination.
   */
  pageCount?: number
  /**
   * Total number of items when using manual pagination.
   * Used to display accurate "Showing X to Y of Z" text.
   */
  totalCount?: number
  /**
   * @deprecated There is a nested RowsPerPage component that controls the page size.
   */
  pageSize?: number
  /**
   * Whether sorting is handled manually (externally).
   * When true, the component will not sort data internally.
   */
  manualSorting?: boolean
  /**
   * Initial sorting state. Defines which column(s) to sort by initially.
   * @deprecated Use 'sorting' prop instead.
   */
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
  /**
   * Whether to show the "Showing X to Y of Z" text in the RowsPerPage component.
   */
  showRowsPerPageItemRange?: boolean
  /**
   * Whether to reset the current page index when the data changes.
   * Defaults to true.
   */
  autoResetPageIndex?: boolean
}

export interface DataGridPropsWithExternalSorting<T extends object>
  extends DataGridBaseProps<T>,
    Pick<TableOptions<T>, 'onSortingChange'> {
  /**
   * Flag indicating sorting is handled manually.
   * Must be set to true for external sorting to work.
   */
  manualSorting: true
  /**
   * Current sorting state, required when using external sorting.
   * Controls which column(s) are sorted and in which direction.
   */
  sorting: SortingState
}

export interface DataGridPropsWithInternalSorting<T extends object>
  extends DataGridBaseProps<T> {
  /**
   * Not needed when using internal sorting.
   */
  onSortingChange?: never
  /**
   * Must be omitted or set to false when using internal sorting.
   */
  manualSorting?: false
  /**
   * Not needed when using internal sorting.
   */
  sorting?: never
}

export interface DataGridPropsWithExternalPagination<T extends object>
  extends DataGridBaseProps<T>,
    Pick<TableOptions<T>, 'onPaginationChange'> {
  /**
   * Flag indicating pagination is handled manually.
   * Must be set to true for external pagination to work.
   */
  manualPagination: true
  /**
   * Current pagination state, required when using external pagination.
   * Controls the current page index and page size.
   */
  pagination: PaginationState
}

export interface DataGridPropsWithInternalPagination<T extends object>
  extends DataGridBaseProps<T> {
  /**
   * Not needed when using internal pagination.
   */
  onPaginationChange?: never
  /**
   * Must be omitted or set to false when using internal pagination.
   */
  manualPagination?: false
  /**
   * Not needed when using internal pagination.
   */
  pagination?: never
}

export interface DataGridPropsWithExternalRowSelection<T extends object>
  extends DataGridBaseProps<T>,
    Pick<TableOptions<T>, 'onRowSelectionChange'> {
  /**
   * Controlled row selection state keyed by stable row IDs.
   */
  rowSelection: RowSelectionState
}

export interface DataGridPropsWithInternalRowSelection<T extends object>
  extends DataGridBaseProps<T> {
  /**
   * Not needed when using internal row selection.
   */
  onRowSelectionChange?: never
  /**
   * Not needed when using internal row selection.
   */
  rowSelection?: never
}

/**
 * DataGrid props type - a union of the possible combinations:
 * 1. External sorting + External pagination
 * 2. External sorting + Internal pagination
 * 3. Internal sorting + External pagination
 * 4. Internal sorting + Internal pagination
 * 5. External sorting + External pagination + Controlled row selection
 * 6. External sorting + Internal pagination + Controlled row selection
 * 7. Internal sorting + External pagination + Controlled row selection
 * 8. Internal sorting + Internal pagination + Controlled row selection
 *
 * This allows TypeScript to enforce the correct props based on whether
 * sorting and pagination are handled internally or externally.
 */
export type DataGridProps<T extends object> =
  | (DataGridPropsWithExternalSorting<T> &
      DataGridPropsWithExternalPagination<T> &
      DataGridPropsWithExternalRowSelection<T>)
  | (DataGridPropsWithExternalSorting<T> &
      DataGridPropsWithInternalPagination<T> &
      DataGridPropsWithExternalRowSelection<T>)
  | (DataGridPropsWithInternalSorting<T> &
      DataGridPropsWithExternalPagination<T> &
      DataGridPropsWithExternalRowSelection<T>)
  | (DataGridPropsWithInternalSorting<T> &
      DataGridPropsWithInternalPagination<T> &
      DataGridPropsWithExternalRowSelection<T>)
  | (DataGridPropsWithExternalSorting<T> &
      DataGridPropsWithExternalPagination<T> &
      DataGridPropsWithInternalRowSelection<T>)
  | (DataGridPropsWithExternalSorting<T> &
      DataGridPropsWithInternalPagination<T> &
      DataGridPropsWithInternalRowSelection<T>)
  | (DataGridPropsWithInternalSorting<T> &
      DataGridPropsWithExternalPagination<T> &
      DataGridPropsWithInternalRowSelection<T>)
  | (DataGridPropsWithInternalSorting<T> &
      DataGridPropsWithInternalPagination<T> &
      DataGridPropsWithInternalRowSelection<T>)

export const DataGrid = <T extends object>(props: DataGridProps<T>) => {
  const {
    caption,
    className,
    columns,
    data,
    debugTable,
    enableRowSelection,
    footerLeftSlot,
    hasHover,
    hideCheckboxes,
    initialRowSelection,
    rowSelection: externalRowSelection,
    onRowSelectionChange: externalOnRowSelectionChange,
    isFullWidth,
    isLoading,
    layout = TABLE_DEFAULT_LAYOUT,
    manualPagination,
    manualSorting,
    onColumnFiltersChange,
    onExpandedChange,
    onPageChange,
    onPaginationChange,
    onSelectedRowsChange,
    onSortingChange,
    pageCount,
    pagination: externalPagination,
    sorting: externalSorting,
    showRowsPerPageItemRange,
    totalCount,
    autoResetPageIndex,
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

  const resolvedRowSelection = externalRowSelection ?? rowSelection

  const handleRowSelectionChange = useCallback(
    (updater: Updater<RowSelectionState>) => {
      const nextSelection =
        typeof updater === 'function'
          ? (updater as (old: RowSelectionState) => RowSelectionState)(
              resolvedRowSelection
            )
          : updater

      if (externalOnRowSelectionChange) {
        externalOnRowSelectionChange(nextSelection)
        return
      }

      setRowSelection(nextSelection)
    },
    [externalOnRowSelectionChange, resolvedRowSelection, setRowSelection]
  )

  // Provides a sensible default getRowId that uses
  // stable unique key if present.
  const defaultGetRowId = useCallback(
    (
      originalRow: Record<string, unknown>,
      index: number,
      parent?: {
        id: string
      }
    ) => {
      const candidate = originalRow?.id ?? originalRow?.uuid ?? originalRow?.key
      if (
        (typeof candidate === 'string' && candidate.length > 0) ||
        typeof candidate === 'number'
      ) {
        return String(candidate)
      }
      if (parent?.id) {
        return `${parent.id}.${index}`
      }
      return String(index)
    },
    []
  )

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
      rowSelection: resolvedRowSelection,
      expanded,
      pagination: externalPagination ?? internalPagination,
      columnFilters,
    },
    enableRowSelection,
    onRowSelectionChange: handleRowSelectionChange,
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
    pageCount: manualPagination ? pageCount! : undefined,
    // @ts-ignore
    getSubRows: (row) => row?.subRows || [],
    debugTable,
    manualSorting,
    autoResetPageIndex,
    ...rest,
    // Prefer consumer-provided getRowId if present in props; fall back to default
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - getRowId is part of TableOptions and allowed via props extension
    getRowId:
      (props as unknown as { getRowId?: (row: T) => string }).getRowId ??
      defaultGetRowId,
  } as TableOptions<T>)

  useEffect(() => {
    onSelectedRowsChange?.(
      table.getSelectedRowModel().flatRows.map(({ original }) => original)
    )
  }, [resolvedRowSelection, table, onSelectedRowsChange])

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
        dataLength={manualPagination ? totalCount : data.length}
        isPaginated={isPaginated}
        onPaginationChange={handlePagination}
        onRowsPerPageChange={handleRowsPerPageChange}
        pageCount={manualPagination ? pageCount! : table.getPageCount()}
        pagination={paginationState}
        isFullWidth={isFullWidthOverride}
        footerLeftSlot={footerLeftSlot}
        showRowsPerPageItemRange={showRowsPerPageItemRange}
      />
    </StyledDataGrid>
  )
}
