// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./DataGrid.d.ts" />

import React, { useState, useEffect, useMemo, useCallback } from 'react'
import _noop from 'lodash/noop'
import {
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import type {
  Cell,
  ColumnDef,
  ExpandedState,
  Header,
  HeaderGroup,
  Row,
  RowSelectionState,
  SortDirection,
  SortingState,
  TableOptions,
  PaginationState,
} from '@tanstack/react-table'
import {
  IconArrowDownward,
  IconArrowUpward,
  IconKeyboardArrowDown,
  IconKeyboardArrowRight,
  IconSwapVert,
} from '@royalnavy/icon-library'

import { PaginationProps, OnChangeEventType } from '../Pagination'
import { IndeterminateCheckbox } from '../Checkbox'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { TABLE_SORT_ORDER } from '../Table'
import {
  StyledBody,
  StyledCaption,
  StyledCell,
  StyledCol,
  StyledControlCell,
  StyledDataGrid,
  StyledExpandButton,
  StyledHead,
  StyledRow,
  StyledTable,
  StyledPagination,
} from './partials'

type AriaSortType = 'ascending' | 'descending' | 'none'

export interface DataGridProps<T extends object>
  extends Pick<Partial<PaginationProps>, 'pageSize'>,
    Omit<
      TableOptions<T>,
      | 'state'
      | 'data'
      | 'columns'
      | 'getCoreRowModel'
      | 'getSortedRowModel'
      | 'onExpandedChange'
    >,
    Omit<ComponentWithClass, 'children'> {
  /**
   * Collection of objects that correspond to `columns` definition.
   */
  data: T[]
  /**
   * https://tanstack.com/table/v8/docs/api/core/column-def
   */
  columns: ColumnDef<T>[]
  /**
   * Optional text caption to display above the component.
   */
  caption?: string
  /**
   * Initial set of rows to display as selected.
   */
  initialRowSelection?: RowSelectionState
  /**
   * Component is rendered with a 100% width, alternatively `auto`.
   */
  isFullWidth?: boolean
  /**
   * Display hover state when user hovers over row (requires `enableRowSelection`).
   */
  hasHover?: boolean
  /**
   * Hide row selection checkboxes (requires `enableRowSelection` and `hasHover`).
   */
  hideCheckboxes?: boolean
  /**
   * Optional handler invoked when the selected rows change.
   */
  onSelectedRowsChange?: (rows: T[]) => void
  /**
   * Optional handler invoked when the expanded rows change.
   */
  onExpandedChange?: (expanded: ExpandedState) => void
  /**
   * Total number of pages in the dataset (requires `manualPagination` mode).
   */
  pageCount?: number
  /**
   * Optional handler called when the value of currently selected page changes.
   */
  onPageChange?: (
    event: OnChangeEventType,
    currentPage: number,
    totalPages: number
  ) => void
}

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

function getIcon(sortable: boolean, sortOrder?: SortDirection | false) {
  if (!sortable) {
    return null
  }

  if (!sortOrder) {
    return <IconSwapVert aria-hidden data-testid="unsorted" />
  }

  return SORT_ORDER_ICONS_MAP[sortOrder]
}

function getAriaSort(
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

function isLastInBranch<T>(row: Row<T>, allRows: Row<T>[]) {
  if (row.depth === 0) {
    return false
  }

  const parentRow = allRows.find((r) => r.id === row.parentId)!
  const siblingRows = parentRow.subRows
  const lastSiblingRow = siblingRows[siblingRows.length - 1]

  return lastSiblingRow.id === row.id
}

function getColumns<T>(
  columns: ColumnDef<T>[],
  enableRowSelection?: boolean,
  hideCheckboxes?: boolean,
  hasSubRows?: boolean
): ColumnDef<T>[] {
  if ((!enableRowSelection || hideCheckboxes) && !hasSubRows) {
    return columns
  }

  const showCheckboxes = enableRowSelection && !hideCheckboxes

  const rowSelectExpandColumn: ColumnDef<T> = {
    id: 'select-expand',
    header: ({
      table: {
        getIsAllRowsSelected,
        getIsSomeRowsSelected,
        getToggleAllRowsSelectedHandler,
        getToggleAllRowsExpandedHandler,
        getIsAllRowsExpanded,
        getCanSomeRowsExpand,
      },
    }) => (
      <>
        {showCheckboxes && (
          <IndeterminateCheckbox
            checked={getIsAllRowsSelected()}
            indeterminate={getIsSomeRowsSelected()}
            onChange={getToggleAllRowsSelectedHandler()}
            aria-label="Select / deselect all rows"
          />
        )}
        {getCanSomeRowsExpand() && (
          <StyledExpandButton
            onClick={getToggleAllRowsExpandedHandler()}
            aria-label="Expand / collapse all rows"
          >
            {getIsAllRowsExpanded() ? (
              <IconKeyboardArrowDown />
            ) : (
              <IconKeyboardArrowRight />
            )}
          </StyledExpandButton>
        )}
      </>
    ),
    cell: ({
      row: {
        getIsSelected,
        getCanSelect,
        getIsSomeSelected,
        getToggleSelectedHandler,
        getToggleExpandedHandler,
        getIsExpanded,
        getCanExpand,
        id,
        depth,
      },
    }) => (
      <StyledControlCell $depth={depth}>
        {showCheckboxes && (
          <IndeterminateCheckbox
            checked={getIsSelected()}
            disabled={!getCanSelect()}
            indeterminate={getIsSomeSelected()}
            onChange={getToggleSelectedHandler()}
            aria-labelledby={id}
          />
        )}
        {getCanExpand() && (
          <StyledExpandButton
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation()
              getToggleExpandedHandler()()
            }}
            aria-expanded={getIsExpanded()}
            aria-label="Expand / collapse row"
          >
            {getIsExpanded() ? (
              <IconKeyboardArrowDown />
            ) : (
              <IconKeyboardArrowRight />
            )}
          </StyledExpandButton>
        )}
      </StyledControlCell>
    ),
  }

  return [rowSelectExpandColumn, ...columns]
}

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
    onSelectedRowsChange = _noop,
    onExpandedChange = _noop,
    onPageChange = _noop,
    manualPagination,
    pageCount,
    pageSize,
    ...rest
  } = props

  const isPaginated = manualPagination || !!pageSize

  const [sorting, setSorting] = useState<SortingState>([])

  const [expanded, setExpanded] = useState<ExpandedState>({})

  const [rowSelection, setRowSelection] = useState<RowSelectionState>(
    !!enableRowSelection && initialRowSelection ? initialRowSelection : {}
  )

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: pageSize ?? data.length,
  })

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
      sorting,
      rowSelection,
      expanded,
      pagination,
    },
    enableRowSelection,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onExpandedChange: setExpanded,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination,
    paginateExpandedRows: false,
    pageCount: manualPagination ? pageCount : undefined,
    // @ts-ignore
    getSubRows: (row) => row?.subRows || [],
    debugTable,
    ...rest,
  })

  useEffect(() => {
    onSelectedRowsChange?.(
      table.getSelectedRowModel().flatRows.map(({ original }) => original)
    )
  }, [rowSelection, table, onSelectedRowsChange])

  useEffect(() => {
    onExpandedChange?.(expanded)
  }, [expanded, onExpandedChange])

  const hasGroupedHeaders = useMemo(() => {
    return table.getHeaderGroups().reduce((acc, group) => {
      return acc || group.headers.some((header) => header.depth > 1)
    }, false)
  }, [table])

  const handlePagination = useCallback(
    (...args) => {
      const [_, currentPage] = args
      table.setPageIndex(currentPage - 1)
      onPageChange?.(...args)
    },
    [table, onPageChange]
  )

  return (
    <StyledDataGrid className={className}>
      <StyledTable
        $hasRowSelection={!!enableRowSelection && !hideCheckboxes}
        $isFullWidth={isFullWidth}
        $hasSubRows={hasSubRows}
        role="grid"
      >
        {caption && <StyledCaption>{caption}</StyledCaption>}
        <StyledHead>
          {table
            .getHeaderGroups()
            .map(({ id: headerGroupId, headers, depth }: HeaderGroup<T>) => (
              <StyledRow key={headerGroupId}>
                {headers.map(
                  ({
                    column: {
                      getCanSort,
                      getIsSorted,
                      getToggleSortingHandler,
                      columnDef,
                      getSize,
                    },
                    id: headerId,
                    isPlaceholder,
                    getContext,
                    colSpan,
                  }: Header<T, unknown>) => (
                    <StyledCol
                      aria-sort={getAriaSort(getCanSort(), getIsSorted())}
                      $isSortable={getCanSort()}
                      $isHeaderGroup={hasGroupedHeaders && depth === 0}
                      $alignment={columnDef.meta?.align}
                      $width={getSize() === 150 ? undefined : getSize()}
                      key={headerId}
                      onClick={getToggleSortingHandler()}
                      colSpan={colSpan}
                    >
                      <div>
                        {isPlaceholder
                          ? null
                          : flexRender(columnDef.header, getContext())}
                        {getIcon(getCanSort(), getIsSorted())}
                      </div>
                    </StyledCol>
                  )
                )}
              </StyledRow>
            ))}
        </StyledHead>
        <StyledBody>
          {table
            .getRowModel()
            .rows.map(
              ({
                getVisibleCells,
                id: rowId,
                getToggleSelectedHandler,
                getIsSelected,
                depth,
                parentId,
              }: Row<T>) => (
                <StyledRow
                  key={rowId}
                  id={rowId}
                  $depth={depth}
                  $isLastInBranch={isLastInBranch(
                    { id: rowId, parentId, depth } as Row<T>,
                    table.getRowModel().rows
                  )}
                  $hasHover={!!enableRowSelection && hasHover}
                  $hasFocus={
                    !!enableRowSelection && hasHover && getIsSelected()
                  }
                >
                  {getVisibleCells().map(
                    ({
                      id: cellId,
                      column: {
                        columnDef: { cell, meta },
                        getSize,
                      },
                      getContext,
                    }: Cell<T, unknown>) => (
                      <StyledCell
                        as="td"
                        key={cellId}
                        $alignment={meta?.align}
                        $width={getSize() === 150 ? undefined : getSize()}
                        onClick={
                          !!enableRowSelection && hasHover
                            ? getToggleSelectedHandler()
                            : undefined
                        }
                      >
                        {flexRender(cell, getContext())}
                      </StyledCell>
                    )
                  )}
                </StyledRow>
              )
            )}
        </StyledBody>
      </StyledTable>
      {isPaginated && (
        <StyledPagination
          name="datagrid-pagination"
          initialPage={pagination.pageIndex + 1}
          pageSize={pagination.pageSize}
          total={data.length || pageCount! * pageSize!}
          onChange={handlePagination}
        />
      )}
    </StyledDataGrid>
  )
}
