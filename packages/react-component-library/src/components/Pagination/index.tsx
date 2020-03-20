import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { usePageChange, BUMP_LEFT, BUMP_RIGHT } from './usePageChange'

interface PaginationProps {
  onChange?: (currentPage: number, totalPages: number) => void
  pageSize: number
  total: number
}

const Pagination: React.FC<PaginationProps> = ({
  onChange,
  pageSize,
  total,
}) => {
  const totalPages = Math.ceil(total / pageSize)

  const [currentPage, changePage, pageNumbers] = usePageChange(
    1,
    totalPages,
    onChange
  )

  return (
    <div className="rn-pagination">
      <ol className="rn-pagination__list">
        <li key={uuidv4()} className="rn-pagination__item">
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
              <li key={uuidv4()} className="rn-pagination__item">
                {page}
              </li>
            )
          }

          return (
            <li key={uuidv4()} className="rn-pagination__item" data-testid="page">
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
        <li key={uuidv4()} className="rn-pagination__item">
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
