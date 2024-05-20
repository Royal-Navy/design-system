// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./DataGrid.d.ts" />

import React, { useState, useEffect, useMemo } from 'react'
import _noop from 'lodash/noop'
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import type {
  ColumnDef,
  Cell,
  Row,
  Header,
  HeaderGroup,
  SortingState,
  SortDirection,
  RowSelectionState,
  TableOptions,
} from '@tanstack/react-table'
import {
  IconSwapVert,
  IconArrowDownward,
  IconArrowUpward,
} from '@royalnavy/icon-library'

import { IndeterminateCheckbox } from '../Checkbox'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { TABLE_SORT_ORDER } from '../Table'
import {
  StyledDataGrid,
  StyledCaption,
  StyledTable,
  StyledHead,
  StyledBody,
  StyledCell,
  StyledCol,
  StyledRow,
} from './partials'

type AriaSortType = 'ascending' | 'descending' | 'none'

export interface DataGridProps<T extends object>
  extends Omit<
      TableOptions<T>,
      'state' | 'data' | 'columns' | 'getCoreRowModel' | 'getSortedRowModel'
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
   * Hide row selection checkboxes (requires `enableRowSelection` and `hasHover`)
   */
  hideCheckboxes?: boolean
  /**
   * Optional handler invoked when the selected rows change.
   */
  onSelectedRowsChange?: (rows: T[]) => void
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

function getColumns<T>(
  columns: ColumnDef<T>[],
  enableRowSelection?: boolean,
  hideCheckboxes?: boolean
): ColumnDef<T>[] {
  if (!enableRowSelection || hideCheckboxes) {
    return columns
  }

  const rowSelectionColumn: ColumnDef<T> = {
    id: 'select',
    header: ({
      table: {
        getIsAllRowsSelected,
        getIsSomeRowsSelected,
        getToggleAllRowsSelectedHandler,
      },
    }) => (
      <IndeterminateCheckbox
        checked={getIsAllRowsSelected()}
        indeterminate={getIsSomeRowsSelected()}
        onChange={getToggleAllRowsSelectedHandler()}
        aria-label="Select / deselect all rows"
      />
    ),
    cell: ({
      row: {
        getIsSelected,
        getCanSelect,
        getIsSomeSelected,
        getToggleSelectedHandler,
        id,
      },
    }) => (
      <IndeterminateCheckbox
        checked={getIsSelected()}
        disabled={!getCanSelect()}
        indeterminate={getIsSomeSelected()}
        onChange={getToggleSelectedHandler()}
        aria-labelledby={id}
      />
    ),
  }

  return [rowSelectionColumn, ...columns]
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
    ...rest
  } = props

  const [rowSelection, setRowSelection] = useState<RowSelectionState>(
    !!enableRowSelection && initialRowSelection ? initialRowSelection : {}
  )

  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data,
    columns: getColumns(columns, !!enableRowSelection, hideCheckboxes),
    state: {
      sorting,
      rowSelection,
    },
    enableRowSelection,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable,
    ...rest,
  })

  useEffect(() => {
    onSelectedRowsChange?.(
      table.getSelectedRowModel().flatRows.map(({ original }) => original)
    )
  }, [rowSelection, table, onSelectedRowsChange])

  const hasGroupedHeaders = useMemo(() => {
    return table.getHeaderGroups().reduce((acc, group) => {
      return acc || group.headers.some((header) => header.depth > 1)
    }, false)
  }, [table])

  return (
    <StyledDataGrid className={className}>
      <StyledTable
        $hasRowSelection={!!enableRowSelection && !hideCheckboxes}
        $isFullWidth={isFullWidth}
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
              }: Row<T>) => (
                <StyledRow
                  key={rowId}
                  id={rowId}
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
    </StyledDataGrid>
  )
}
