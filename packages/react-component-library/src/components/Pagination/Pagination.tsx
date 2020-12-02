import React from 'react'

import { getKey } from '../../helpers'
import { usePageChange, ELLIPSIS } from './usePageChange'
import { PaginationButton } from './PaginationButton'

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
    <div className="rn-pagination">
      <ol className="rn-pagination__list">
        <li
          key={getKey('pagination-item', 'previous')}
          className="rn-pagination__item"
        >
          <PaginationButton
            aria-label="Previous page"
            data-testid="page-previous"
            disabled={currentPage === 1}
            onClick={() => changePage(currentPage - 1)}
          >
            Prev
          </PaginationButton>
        </li>
        {pageNumbers.map(({ key, value }) => {
          if (value === ELLIPSIS) {
            return (
              <li
                key={getKey('pagination-item', `${key}${value}`)}
                className="rn-pagination__item"
                data-testid="page"
              >
                {value}
              </li>
            )
          }

          return (
            <li
              key={getKey('pagination-item', `${key}${value}`)}
              className="rn-pagination__item"
              data-testid="page"
            >
              <PaginationButton
                aria-label={`Page ${value}`}
                className={value === currentPage ? 'is-active' : null}
                data-testid={`select-page-${value}`}
                onClick={(_) => changePage(value)}
              >
                {value}
              </PaginationButton>
            </li>
          )
        })}
        <li
          key={getKey('pagination-item', 'next')}
          className="rn-pagination__item"
        >
          <PaginationButton
            aria-label="Next page"
            data-testid="page-next"
            disabled={currentPage === totalPages}
            onClick={() => changePage(currentPage + 1)}
          >
            Next
          </PaginationButton>
        </li>
      </ol>
    </div>
  )
}

Pagination.displayName = 'Pagination'
