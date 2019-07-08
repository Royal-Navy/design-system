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
  const totalPages = total / pageSize

  const [currentPage, changePage, pageNumbers] = usePageChange(
    1,
    totalPages,
    onChangeCallback
  )

  return (
    <div className="pagination">
      <ol className="pagination__list">
        <li className="pagination__item">
          <button
            disabled={currentPage === 1}
            className="pagination__button"
            onClick={() => {
              changePage('previous')
            }}
          >
            &#x25c0;&nbsp;Prev
          </button>
        </li>
        {pageNumbers().map((page: string | number) => {
          if ([BUMP_LEFT, BUMP_RIGHT].includes(String(page))) {
            return <li className="pagination__item">{page}</li>
          }

          return (
            <li key={uuid()} className="pagination__item">
              <button
                className={`pagination__button ${
                  page === currentPage ? 'is-active' : ''
                }`}
                onClick={() => {
                  changePage(page)
                }}
              >
                {page}
              </button>
            </li>
          )
        })}
        <li className="pagination__item">
          <button
            disabled={currentPage === totalPages}
            className="pagination__button"
            onClick={() => {
              changePage('next')
            }}
          >
            Next&nbsp;&#x25b6;
          </button>
        </li>
      </ol>
    </div>
  )
}

export default Pagination
