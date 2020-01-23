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

export function useOpenClose(ref: React.RefObject<undefined>) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useDocumentClick(ref, (event: Event) => {
    const target = event.target as Node

    if (!hasParentWithMatchingSelector(target, '.rn-date-picker__container')) {
      setIsOpen(false)
    }
  })

  function onFocus() {
    setIsOpen(true)
  }

  return {
    isOpen,
    onFocus,
  }
}
