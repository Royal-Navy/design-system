/* eslint-disable no-shadow */
import React, { useCallback, useState } from 'react'

import { OnChangeEventType } from './types'
import { RETURN } from '../../utils/keyCodes'

export const usePageChange = (
  initialPage: number,
  totalPages: number,
  onChange?: (
    event: OnChangeEventType,
    currentPage: number,
    totalPages: number
  ) => void
): {
  onKeyDown: (event: React.KeyboardEvent) => void
  hasError: boolean
  onPaginationButtonClickHandler: (
    pageNumber: number
  ) => (event: React.MouseEvent) => void
  currentPage: number
} => {
  const [currentPage, setCurrentPage] = useState(initialPage)
  const [hasError, setHasError] = useState<boolean>(false)

  const changePage = useCallback(
    (event: OnChangeEventType, pageNumber: number): void => {
      setHasError(false)
      setCurrentPage(pageNumber)

      if (onChange) {
        onChange(event, pageNumber, totalPages)
      }
    },
    [onChange, totalPages]
  )

  const onPaginationButtonClickHandler = useCallback(
    (pageNumber: number) => (event: React.MouseEvent) => {
      changePage(event, pageNumber)
    },
    [changePage]
  )

  function onKeyDown(event: React.KeyboardEvent) {
    setHasError(false)

    if (event.keyCode === RETURN) {
      const { value } = event.target as HTMLInputElement

      if (!Number.isNaN(value)) {
        const valueNumber = Number(value)
        const isAtLeastZero = valueNumber >= 0
        const isNoMoreThanTotal = valueNumber <= totalPages
        if (isAtLeastZero && isNoMoreThanTotal) {
          changePage(event, valueNumber)
          return
        }
      }

      setHasError(true)
    }
  }

  return {
    currentPage,
    hasError,
    onKeyDown,
    onPaginationButtonClickHandler,
  }
}

export default usePageChange
