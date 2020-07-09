import React, { useState } from 'react'

import { useDocumentClick } from '../../hooks'

function hasParentWithMatchingSelector(
  target: Node,
  selector: string
): boolean {
  return [...document.querySelectorAll(selector)].some(
    el => el !== target && el.contains(target)
  )
}

export function useOpenClose(
  ref: React.RefObject<undefined>,
  isOpen?: boolean
) {
  const [openState, setOpenState] = useState<boolean>(isOpen)

  useDocumentClick(ref, (event: Event) => {
    const target = event.target as Node

    if (!hasParentWithMatchingSelector(target, '.rn-date-picker__container')) {
      setOpenState(false)
    }
  })

  function onFocus() {
    setOpenState(true)
  }

  function onClose() {
    setOpenState(false)
  }

  return {
    openState,
    onFocus,
    onClose
  }
}
