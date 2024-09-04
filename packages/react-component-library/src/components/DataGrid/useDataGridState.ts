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
  pageSize: number | undefined,
  dataLength: number
) => {
  const [sorting, setSorting] = useState<SortingState>([])

  const [expanded, setExpanded] = useState<ExpandedState>({})

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const [rowSelection, setRowSelection] = useState<RowSelectionState>(
    initialRowSelection || {}
  )

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: pageSize ?? dataLength,
  })

  return {
    sorting,
    setSorting,
    expanded,
    setExpanded,
    rowSelection,
    setRowSelection,
    pagination,
    setPagination,
    columnFilters,
    setColumnFilters,
  }
}
