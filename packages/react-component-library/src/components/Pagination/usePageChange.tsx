import { useState } from 'react'

/**
 * PAGE_NEIGHBOURS: how many neighbour pages to display at one time
 */
export const PAGE_NEIGHBOURS = 1

/**
 * BUMP_LEFT: string used to represent additional nodes to the left
 * BUMP_RIGHT: string used to represent additional nodes to the right
 */
export const BUMP_LEFT = '...'
export const BUMP_RIGHT = BUMP_LEFT

export const usePageChange = (
  initialPage: number,
  totalPages: number,
  onChangeCallback?: (currentPage: number, totalPages: number) => void
): [number, (page: string | number) => void, () => any[]] => {
  const [currentPage, setCurrentPage] = useState(initialPage)

  /**
   * Helper to generate an array of integers
   */
  function range(from: number, to: number, step: number = 1): number[] {
    let i = from
    const array = []

    while (i <= to) {
      array.push(i)
      i += step
    }

    return array
  }

  /**
   * Change the page by setting the relevant state and invoking
   * the provided onChangeCallback callback (if it is provided)
   */
  function changePage(page: string | number): void {
    if (page === 'previous' && currentPage > 1) {
      setCurrentPage(currentPage - 1)
    } else if (page === 'next' && currentPage !== totalPages) {
      setCurrentPage(currentPage + 1)
    } else {
      setCurrentPage(Number(page))
    }

    if (typeof onChangeCallback === 'function') {
      onChangeCallback(currentPage, totalPages)
    }
  }

  /**
   * Returns an array of page numbers to be used to render display
   * for the end user
   */
  function pageNumbers() {
    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for LEFT_BUMP & RIGHT_BUMP
     */
    const totalNumbers = PAGE_NEIGHBOURS * 2 + 3
    const totalBlocks = totalNumbers + 2

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - PAGE_NEIGHBOURS)
      const endPage = Math.min(totalPages - 1, currentPage + PAGE_NEIGHBOURS)

      let pages: any[] = range(startPage, endPage)

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2
      const hasRightSpill = totalPages - endPage > 1
      const spillOffset = totalNumbers - (pages.length + 1)

      switch (true) {
        // handle: (1) ... {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1)
          pages = [BUMP_LEFT, ...extraPages, ...pages]
          break
        }

        // handle: (1) {2 3} [4] {5 6} ... (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset)
          pages = [...pages, ...extraPages, BUMP_RIGHT]
          break
        }

        // handle: (1) ... {4 5} [6] {7 8} ... (10)
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

  return [currentPage, changePage, pageNumbers]
}

export default usePageChange
