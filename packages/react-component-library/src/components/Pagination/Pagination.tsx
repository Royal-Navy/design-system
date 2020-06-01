import React from 'react'
import {
  IconKeyboardArrowLeft,
  IconKeyboardArrowRight,
} from '@royalnavy/icon-library'
import { usePageChange, ELLIPSIS } from './usePageChange'
import { getKey } from '../../helpers'

interface PaginationProps {
  onChange?: (currentPage: number, totalPages: number) => void
  pageSize: number
  total: number
}

export const Pagination: React.FC<PaginationProps> = ({
  onChange,
  pageSize,
  total,
}) => {
  const totalPages = Math.ceil(total / pageSize)

  const { currentPage, changePage, pageNumbers } = usePageChange(
    1,
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
          <button
            disabled={currentPage === 1}
            className="rn-pagination__button"
            onClick={() => {
              changePage(currentPage - 1)
            }}
            data-testid="page-previous"
          >
            <IconKeyboardArrowLeft />
            Prev
          </button>
        </li>
        {pageNumbers.map(({ key, value }) => {
          if (value === ELLIPSIS) {
            return (
              <li
                key={getKey('pagination-item', key)}
                className="rn-pagination__item"
                data-testid="page"
              >
                {value}
              </li>
            )
          }

          return (
            <li
              key={getKey('pagination-item', key)}
              className="rn-pagination__item"
              data-testid="page"
            >
              <button
                className={`rn-pagination__button ${
                  value === currentPage ? 'is-active' : ''
                }`}
                onClick={() => {
                  changePage(value)
                }}
                data-testid={`select-page-${value}`}
              >
                {value}
              </button>
            </li>
          )
        })}
        <li
          key={getKey('pagination-item', 'next')}
          className="rn-pagination__item"
        >
          <button
            disabled={currentPage === totalPages}
            className="rn-pagination__button"
            onClick={() => {
              changePage(currentPage + 1)
            }}
            data-testid="page-next"
          >
            Next
            <IconKeyboardArrowRight />
          </button>
        </li>
      </ol>
    </div>
  )
}

Pagination.displayName = 'Pagination'
