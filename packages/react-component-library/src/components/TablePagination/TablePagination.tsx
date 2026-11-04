import React from 'react'

import { COMPONENT_SIZE } from '../Forms'
import { SelectOption } from '../Select'
import {
  PAGINATION_BUTTON_VARIANT,
  PaginationButton,
} from '../Pagination/PaginationButton'
import { ROWS_PER_PAGE_OPTIONS } from '../RowsPerPage'
import { StyledButtons } from './partials/StyledButtons'
import { StyledRange } from './partials/StyledRange'
import { StyledRowsPerPage } from './partials/StyledRowsPerPage'
import { StyledSelect } from './partials/StyledSelect'
import { StyledTablePagination } from './partials/StyledTablePagination'

export interface TablePaginationProps {
  /**
   * Total number of items within the paginated collection.
   */
  count: number
  /**
   * Handler invoked when a navigation button is clicked, with the new zero-based page index.
   */
  onPageChange: (event: React.MouseEvent, page: number) => void
  /**
   * Optional handler invoked when the rows per page value changes.
   */
  onRowsPerPageChange?: (rowsPerPage: number) => void
  /**
   * Zero-based index of the current page.
   */
  page: number
  /**
   * Number of items per page.
   */
  rowsPerPage: number
  /**
   * Options available in the rows per page select.
   */
  rowsPerPageOptions?: string[]
  /**
   * Toggles whether the first and last page buttons are shown.
   */
  showFirstLastButtons?: boolean
}

export const TablePagination = ({
  count,
  onPageChange,
  onRowsPerPageChange,
  page,
  rowsPerPage,
  rowsPerPageOptions = ROWS_PER_PAGE_OPTIONS,
  showFirstLastButtons = false,
  ...rest
}: TablePaginationProps) => {
  const lastPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1)
  const from = count === 0 ? 0 : page * rowsPerPage + 1
  const to = Math.min((page + 1) * rowsPerPage, count)

  const isOnFirstPage = page <= 0
  const isOnLastPage = page >= lastPage

  const goTo = (newPage: number) => (event: React.MouseEvent) =>
    onPageChange(event, newPage)

  return (
    <StyledTablePagination data-testid="table-pagination" {...rest}>
      <StyledRowsPerPage>
        <span aria-hidden>Rows per page:</span>
        <StyledSelect
          hideClearButton
          label="Rows per page"
          size={COMPONENT_SIZE.SMALL}
          value={rowsPerPage.toString()}
          onChange={(value) => value && onRowsPerPageChange?.(Number(value))}
          $maxLength={Math.max(...rowsPerPageOptions.map((o) => o.length))}
        >
          {rowsPerPageOptions.map((option) => (
            <SelectOption key={option} value={option}>
              {option}
            </SelectOption>
          ))}
        </StyledSelect>
      </StyledRowsPerPage>
      <StyledRange aria-live="polite">
        {from}–{to} of {count}
      </StyledRange>
      <StyledButtons>
        {showFirstLastButtons && (
          <PaginationButton disabled={isOnFirstPage} onClick={goTo(0)}>
            {PAGINATION_BUTTON_VARIANT.FIRST}
          </PaginationButton>
        )}
        <PaginationButton disabled={isOnFirstPage} onClick={goTo(page - 1)}>
          {PAGINATION_BUTTON_VARIANT.PREV}
        </PaginationButton>
        <PaginationButton disabled={isOnLastPage} onClick={goTo(page + 1)}>
          {PAGINATION_BUTTON_VARIANT.NEXT}
        </PaginationButton>
        {showFirstLastButtons && (
          <PaginationButton disabled={isOnLastPage} onClick={goTo(lastPage)}>
            {PAGINATION_BUTTON_VARIANT.LAST}
          </PaginationButton>
        )}
      </StyledButtons>
    </StyledTablePagination>
  )
}

TablePagination.displayName = 'TablePagination'
