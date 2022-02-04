import React from 'react'

import { getId, getKey } from '../../helpers'
import { usePageChange } from './usePageChange'
import { PAGINATION_BUTTON_VARIANT, PaginationButton } from './PaginationButton'
import { PaginationErrorMessage } from './PaginationErrorMessage'
import { StyledList } from './partials/StyledList'
import { StyledListItem } from './partials/StyledListItem'
import { StyledTextInput } from './partials/StyledTextInput'
import { StyledTotalPages } from './partials/StyledTotalPages'
import { OnChangeEventType } from './types'

const KEY_PREFIX = 'pagination-item'

export interface PaginationProps {
  /**
   * Starting page to display from range on first render.
   */
  initialPage?: number
  /**
   * Optional HTML `name` attribute to apply to the component (a11y).
   */
  name?: string
  /**
   * Optional handler called when the value of currently selected page changes.
   */
  onChange?: (
    event: OnChangeEventType,
    currentPage: number,
    totalPages: number
  ) => void
  /**
   * Number of items within a paginated collection per page.
   */
  pageSize: number
  /**
   * Total number of items within a paginated collection.
   */
  total: number
}

export const Pagination: React.FC<PaginationProps> = ({
  initialPage = 1,
  name = getId('pagination'),
  onChange,
  pageSize,
  total,
  ...rest
}) => {
  const totalPages = Math.ceil(total / pageSize)
  const { currentPage, hasError, onKeyDown, onPaginationButtonClickHandler } =
    usePageChange(initialPage, totalPages, onChange)

  const isOnFirstPage = currentPage === 1
  const isOnLastPage = currentPage === totalPages

  return (
    <StyledList data-testid="pagination" {...rest}>
      <StyledListItem key={getKey(KEY_PREFIX, 'first')}>
        <PaginationButton
          disabled={isOnFirstPage}
          onClick={onPaginationButtonClickHandler(1)}
        >
          {PAGINATION_BUTTON_VARIANT.FIRST}
        </PaginationButton>
      </StyledListItem>
      <StyledListItem key={getKey(KEY_PREFIX, 'previous')}>
        <PaginationButton
          disabled={isOnFirstPage}
          onClick={onPaginationButtonClickHandler(currentPage - 1)}
        >
          {PAGINATION_BUTTON_VARIANT.PREV}
        </PaginationButton>
      </StyledListItem>
      <StyledListItem>
        {hasError && <PaginationErrorMessage />}
        <StyledTextInput
          aria-label="Enter page number"
          onKeyDown={onKeyDown}
          name={name}
          value={currentPage.toString()}
        />
        <StyledTotalPages>of {totalPages}</StyledTotalPages>
      </StyledListItem>
      <StyledListItem key={getKey(KEY_PREFIX, 'next')}>
        <PaginationButton
          disabled={isOnLastPage}
          onClick={onPaginationButtonClickHandler(currentPage + 1)}
        >
          {PAGINATION_BUTTON_VARIANT.NEXT}
        </PaginationButton>
      </StyledListItem>
      <StyledListItem key={getKey(KEY_PREFIX, 'last')}>
        <PaginationButton
          disabled={isOnLastPage}
          onClick={onPaginationButtonClickHandler(totalPages)}
        >
          {PAGINATION_BUTTON_VARIANT.LAST}
        </PaginationButton>
      </StyledListItem>
    </StyledList>
  )
}

Pagination.displayName = 'Pagination'
