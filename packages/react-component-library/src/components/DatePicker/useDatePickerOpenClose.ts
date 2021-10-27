import React, { useCallback, useRef } from 'react'

import { useDocumentClick, useOpenClose } from '../../hooks'

export function useDatePickerOpenClose(isOpen = false): {
  floatingBoxChildrenRef: React.RefObject<HTMLDivElement>
  handleOnClose: () => void
  inputButtonRef: React.RefObject<HTMLButtonElement>
  inputRef: React.RefObject<HTMLInputElement>
  handleOnFocus: (event: React.FormEvent) => void
  open: boolean
} {
  const { open, handleOnClose, handleOnFocus } = useOpenClose(isOpen)
  const floatingBoxChildrenRef = useRef()
  const inputButtonRef = useRef()
  const inputRef = useRef()

  const handleDatePickerOnClose = useCallback(() => {
    handleOnClose(null)
  }, [handleOnClose])

  useDocumentClick(
    [floatingBoxChildrenRef, inputButtonRef, inputRef],
    handleDatePickerOnClose
  )

  return {
    floatingBoxChildrenRef,
    handleOnFocus,
    inputButtonRef,
    inputRef,
    open,
    handleOnClose: handleDatePickerOnClose,
  }
}
