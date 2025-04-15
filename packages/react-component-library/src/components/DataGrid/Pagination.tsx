import type { Table as TanstackTable } from '@tanstack/table-core/build/lib/types'
import React, { useState } from 'react'

import { Group } from '../Group'
import { Button } from '../Button'
import { StyledPagination } from './partials'

interface PaginationProps<T extends object> {
  table: TanstackTable<T>
}

export function usePagination(initialSize = 5) {
  const [pagination, setPagination] = useState({
    pageSize: initialSize,
    pageIndex: 0,
  })

  return {
    onPaginationChange: setPagination,
    pagination,
  }
}

export const Pagination = <T extends object>({ table }: PaginationProps<T>) => {
  const buttonVariant = 'tertiary'


  return (
    <StyledPagination>
    <Group gap="4">
      <Button
        size="small"
        variant={buttonVariant}
        isDisabled={!table.getCanPreviousPage()}
        onClick={() => table.setPageIndex(0)}
      >
        First
      </Button>
      <Button
        size="small"
        variant={buttonVariant}
        isDisabled={!table.getCanPreviousPage()}
        onClick={table.previousPage}
      >
        Previous
      </Button>
      <span>
        {`Page ${
          table.getState().pagination.pageIndex + 1
        } of ${table.getPageCount()}`}
      </span>
      <Button
        size="small"
        variant={buttonVariant}
        isDisabled={!table.getCanNextPage()}
        onClick={table.nextPage}
      >
        Next
      </Button>
      <Button
        size="small"
        variant={buttonVariant}
        isDisabled={!table.getCanNextPage()}
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
      >
        Last
      </Button>
      {/* Page Size {table.getPag} */}
    </Group>
    </StyledPagination>
  )
}

