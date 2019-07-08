import React, { useState } from 'react'
import uuid from 'uuid'

interface PaginationProps {
  onChangeCallback?: (
    currentPage: number,
    totalPages: number,
    pageSize: number,
    total: number
  ) => void
  pageSize: number
  total: number
}

const PAGE_NEIGHBOURS = 1

const BUMP_LEFT = '...'
const BUMP_RIGHT = '...'

const range = (from: number, to: number, step: number = 1): any[] => {
  let i = from
  const array = []

  while (i <= to) {
    array.push(i)
    i += step
  }

  return array
}

const Pagination: React.FC<PaginationProps> = ({
  onChangeCallback,
  pageSize,
  total,
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(total / pageSize)

  const pageNumbers = () => {
    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    const totalNumbers = PAGE_NEIGHBOURS * 2 + 3
    const totalBlocks = totalNumbers + 2

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - PAGE_NEIGHBOURS)
      const endPage = Math.min(totalPages - 1, currentPage + PAGE_NEIGHBOURS)

      let pages = range(startPage, endPage)

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2
      const hasRightSpill = totalPages - endPage > 1
      const spillOffset = totalNumbers - (pages.length + 1)

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1)
          pages = [BUMP_LEFT, ...extraPages, ...pages]
          break
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset)
          pages = [...pages, ...extraPages, BUMP_RIGHT]
          break
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [BUMP_LEFT, ...pages, BUMP_RIGHT]
          break
        }
      }

      return [1, ...pages, totalPages]
    }

    return range(1, totalPages)
  }

  return (
    <div className="pagination">
      <ol className="pagination__list">
        <li className="pagination__item">Prev</li>
        {pageNumbers().map(item => {
          return (
            <li key={uuid()} className="pagination__item">
              {item}
            </li>
          )
        })}
        <li className="pagination__item">Next</li>
      </ol>
    </div>
  )
}

export default Pagination
