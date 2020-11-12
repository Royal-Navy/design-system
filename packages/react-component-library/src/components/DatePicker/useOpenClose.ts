import React, { useState, useRef } from 'react'

import { useDocumentClick } from '../../hooks'

export function useOpenClose(
  isOpen?: boolean,
): {
  floatingBoxChildrenRef: React.RefObject<undefined>
  openState: boolean,
  onFocus: () => void,
  onClose: () => void
} {
  const [openState, setOpenState] = useState<boolean>(isOpen)
  const floatingBoxChildrenRef = useRef()

  function onFocus() {
    setOpenState(true)
  }

  function onClose() {
    setOpenState(false)
  }

  useDocumentClick(floatingBoxChildrenRef, onClose, [openState])

  return {
    floatingBoxChildrenRef,
    openState,
    onFocus,
    onClose
  }
}
