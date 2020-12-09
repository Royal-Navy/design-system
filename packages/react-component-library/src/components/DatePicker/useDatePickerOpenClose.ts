import React, { useRef } from 'react'

import { useDocumentClick, useOpenClose } from '../../hooks'

export function useDatePickerOpenClose(
  isOpen?: boolean
): {
  floatingBoxChildrenRef: React.RefObject<undefined>
  handleOnClose: () => void
  handleOnFocus: (event: React.FormEvent<Element>) => void
  open: boolean
} {
  const { open, handleOnClose, handleOnFocus } = useOpenClose(isOpen)
  const floatingBoxChildrenRef = useRef()

  function handleDatePickerOnClose() {
    handleOnClose(null)
  }

  useDocumentClick(floatingBoxChildrenRef, handleDatePickerOnClose, [open])

  return {
    floatingBoxChildrenRef,
    handleOnFocus,
    open,
    handleOnClose: handleDatePickerOnClose,
  }
}
