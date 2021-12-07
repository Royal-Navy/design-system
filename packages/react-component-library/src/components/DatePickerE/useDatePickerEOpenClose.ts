import React, { useCallback, useRef } from 'react'

import { useDocumentClick, useOpenClose } from '../../hooks'

export function useDatePickerEOpenClose(isOpen = false): {
  floatingBoxChildrenRef: React.RefObject<HTMLDivElement>
  handleOnClose: () => void
  inputButtonRef: React.RefObject<HTMLButtonElement>
  handleOnOpen: () => void
  open: boolean
} {
  const { open, handleOnClose, handleOnFocus } = useOpenClose(isOpen)
  const floatingBoxChildrenRef = useRef()
  const inputButtonRef = useRef<HTMLButtonElement>()

  const handleDatePickerOnClose = useCallback(() => {
    if (!open) {
      return
    }

    handleOnClose(null)
    inputButtonRef.current?.focus()
  }, [handleOnClose, open])

  useDocumentClick(
    [floatingBoxChildrenRef, inputButtonRef],
    handleDatePickerOnClose
  )

  return {
    floatingBoxChildrenRef,
    handleOnOpen: handleOnFocus,
    inputButtonRef,
    open,
    handleOnClose: handleDatePickerOnClose,
  }
}
