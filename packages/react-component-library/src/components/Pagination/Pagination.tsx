import React from 'react'

import { getKey } from '../../helpers'
import { usePageChange, ELLIPSIS } from './usePageChange'
import { PAGINATION_BUTTON_VARIANT, PaginationButton } from './PaginationButton'
import { StyledList } from './partials/StyledList'
import { StyledListItem } from './partials/StyledListItem'

interface PaginationProps {
  initialPage?: number
  onChange?: (currentPage: number, totalPages: number) => void
  pageSize: number
  total: number
}

export const Pagination: React.FC<PaginationProps> = ({
  initialPage = 1,
  onChange,
  pageSize,
  total,
}) => {
  const totalPages = Math.ceil(total / pageSize)

  const { currentPage, changePage, pageNumbers } = usePageChange(
    initialPage,
    totalPages,
    onChange
  )

  return (
    <StyledList>
      <StyledListItem key={getKey('pagination-item', 'previous')}>
        <PaginationButton
          aria-label="Previous page"
          data-testid="page-previous"
          disabled={currentPage === 1}
          onClick={() => changePage(currentPage - 1)}
        >
          {PAGINATION_BUTTON_VARIANT.PREV}
        </PaginationButton>
      </StyledListItem>
      {pageNumbers.map(({ key, value }) => {
        if (value === ELLIPSIS) {
          return (
            <StyledListItem
              key={getKey('pagination-item', `${key}${value}`)}
              data-testid="page"
            >
              {value}
            </StyledListItem>
          )
        }

        return (
          <StyledListItem
            key={getKey('pagination-item', `${key}${value}`)}
            data-testid="page"
          >
            <PaginationButton
              aria-label={`Page ${value}`}
              data-testid={`select-page-${value}`}
              isActive={value === currentPage}
              onClick={(_) => changePage(value)}
            >
              {value}
            </PaginationButton>
          </StyledListItem>
        )
      })}
      <StyledListItem key={getKey('pagination-item', 'next')}>
        <PaginationButton
          aria-label="Next page"
          data-testid="page-next"
          disabled={currentPage === totalPages}
          onClick={() => changePage(currentPage + 1)}
        >
          {PAGINATION_BUTTON_VARIANT.NEXT}
        </PaginationButton>
      </StyledListItem>
    </StyledList>
  )
}

Pagination.displayName = 'Pagination'
