import { useEffect, useState } from 'react'
import compact from 'lodash/compact'

export const ELLIPSIS = '...'

function getInbetweeners(currentPage: number, totalPages: number) {
  if (totalPages > 1) {
    const isCurrentlyInFirstFive = currentPage < 5
    if (isCurrentlyInFirstFive) {
      return [1, 2, 3, 4, 5].filter(
        (pageNumber: number) => pageNumber <= totalPages
      )
    }

    const isCurrentlyInLastFive = currentPage > totalPages - 4
    if (isCurrentlyInLastFive) {
      return [
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ]
    }

    const isCurrentlyInMiddle = currentPage > 4
    if (isCurrentlyInMiddle) {
      return [currentPage - 1, currentPage, currentPage + 1]
    }
  }

  return []
}

function getEllipsis(inbetweeners: number[], when: () => boolean) {
  return inbetweeners.length && when() ? ELLIPSIS : null
}

function getExcludedPageNumber(inbetweeners: number[], excluded: number) {
  return inbetweeners.indexOf(excluded) === -1 ? excluded : null
}

function toKeyValueObject(pageNumber: number | string, key?: string) {
  if (pageNumber) {
    return {
      key: key || `page_${pageNumber}`,
      value: pageNumber,
    }
  }

  return null
}

function getPageNumbers(currentPage: number, totalPages: number) {
  const inbetweeners = getInbetweeners(currentPage, totalPages)
  const firstPageNumber = getExcludedPageNumber(inbetweeners, 1)
  const lastPageNumber =
    totalPages === 1 ? null : getExcludedPageNumber(inbetweeners, totalPages)
  const leftEllipsis = getEllipsis(inbetweeners, () => {
    return inbetweeners[0] > 2
  })
  const rightEllipsis = getEllipsis(inbetweeners, () => {
    return inbetweeners[inbetweeners.length - 1] < totalPages - 1
  })

  return compact([
    toKeyValueObject(firstPageNumber),
    toKeyValueObject(leftEllipsis, 'left_ellipsis'),
    ...inbetweeners.map((inbetweener: number) => toKeyValueObject(inbetweener)),
    toKeyValueObject(rightEllipsis, 'right_ellipsis'),
    toKeyValueObject(lastPageNumber),
  ])
}

export const usePageChange = (
  initialPage: number,
  totalPages: number,
  onChange?: (currentPage: number, totalPages: number) => void
) => {
  const [currentPage, setCurrentPage] = useState(initialPage)
  const [pageNumbers, setPageNumbers] = useState([])

  function changePage(page: string | number): void {
    const newPageNumber = Number(page)
    setCurrentPage(newPageNumber)

    if (onChange) {
      onChange(newPageNumber, totalPages)
    }
  }

  useEffect(() => {
    setPageNumbers(getPageNumbers(currentPage, totalPages))
  }, [currentPage])

  return {
    changePage,
    currentPage,
    pageNumbers,
  }
}

export default usePageChange
