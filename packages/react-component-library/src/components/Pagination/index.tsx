import React from 'react'
import uuid from 'uuid'
import { usePageChange, BUMP_LEFT, BUMP_RIGHT } from './usePageChange'

interface PaginationProps {
  onChangeCallback?: (currentPage: number, totalPages: number) => void
  pageSize: number
  total: number
}

const Pagination: React.FC<PaginationProps> = ({
  onChangeCallback,
  pageSize,
  total,
}) => {
  const totalPages = Math.ceil(total / pageSize)

  const [currentPage, changePage, pageNumbers] = usePageChange(
    1,
    totalPages,
    onChangeCallback
  )

  return (
    <div className="rn-pagination">
      <ol className="rn-pagination__list">
        <li key={uuid()} className="rn-pagination__item">
          <button
            disabled={currentPage === 1}
            className="rn-pagination__button"
            onClick={() => {
              changePage('previous')
            }}
            data-testid="button-previous"
          >
            &#x25c0;&nbsp;Prev
          </button>
        </li>
        {pageNumbers().map((page: string | number) => {
          if ([BUMP_LEFT, BUMP_RIGHT].includes(String(page))) {
            return (
              <li key={uuid()} className="rn-pagination__item">
                {page}
              </li>
            )
          }

          return (
            <li key={uuid()} className="rn-pagination__item" data-testid="page">
              <button
                className={`rn-pagination__button ${
                  page === currentPage ? 'is-active' : ''
                }`}
                onClick={() => {
                  changePage(page)
                }}
                data-testid={`select-page-${page}`}
              >
                {page}
              </button>
            </li>
          )
        })}
        <li key={uuid()} className="rn-pagination__item">
          <button
            disabled={currentPage === totalPages}
            className="rn-pagination__button"
            onClick={() => {
              changePage('next')
            }}
            data-testid="button-next"
          >
            Next&nbsp;&#x25b6;
          </button>
        </li>
      </ol>
    </div>
  )
}

Pagination.displayName = 'Pagination'

export default Pagination
