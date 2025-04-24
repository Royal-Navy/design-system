import { useState } from 'react'
import {
  type ExpandedState,
  type RowSelectionState,
  type SortingState,
  type PaginationState,
  type ColumnFiltersState,
} from '@tanstack/react-table'

export const useDataGridState = (
  initialRowSelection: RowSelectionState | undefined,
  pageSize: number
) => {
  const [sorting, setSorting] = useState<SortingState>([])

  const [expanded, setExpanded] = useState<ExpandedState>({})

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const [rowSelection, setRowSelection] = useState<RowSelectionState>(
    initialRowSelection || {}
  )

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize,
  })

  return {
    columnFilters,
    expanded,
    pagination,
    rowSelection,
    setColumnFilters,
    setExpanded,
    setPagination,
    setRowSelection,
    setSorting,
    sorting,
  }
}
