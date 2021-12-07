/* eslint-disable no-shadow */
import { useState } from 'react'

import { RETURN } from '../../utils/keyCodes'

export const usePageChange = (
  initialPage: number,
  totalPages: number,
  onChange?: (currentPage: number, totalPages: number) => void
) => {
  const [currentPage, setCurrentPage] = useState(initialPage)
  const [hasError, setHasError] = useState<boolean>(false)

  function changePage(pageNumber: number): void {
    setHasError(false)
    setCurrentPage(pageNumber)

    if (onChange) {
      onChange(pageNumber, totalPages)
    }
  }

  function onKeyDown(event: React.KeyboardEvent) {
    setHasError(false)

    if (event.keyCode === RETURN) {
      const { value } = event.target as HTMLInputElement

      if (!Number.isNaN(value)) {
        const valueNumber = Number(value)
        const isAtLeastZero = valueNumber >= 0
        const isNoMoreThanTotal = valueNumber <= totalPages
        if (isAtLeastZero && isNoMoreThanTotal) {
          changePage(valueNumber)
          return
        }
      }

      setHasError(true)
    }
  }

  return {
    changePage,
    currentPage,
    hasError,
    onKeyDown,
  }
}

export default usePageChange
