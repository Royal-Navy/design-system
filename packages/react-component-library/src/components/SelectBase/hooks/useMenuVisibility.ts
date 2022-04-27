import React, { useCallback } from 'react'

export function useMenuVisibility(
  isOpen: boolean,
  openMenu: () => void,
  toggleMenu: () => void
): {
  onInputFocusHandler: () => void
  onInputMouseDownHandler: (e: React.MouseEvent) => void
} {
  const onInputFocusHandler = useCallback(() => {
    if (!isOpen) {
      openMenu()
    }
  }, [isOpen, openMenu])

  const onInputMouseDownHandler = useCallback(
    (e: React.MouseEvent) => {
      toggleMenu()
      e.stopPropagation()
      e.preventDefault()
    },
    [toggleMenu]
  )

  return {
    onInputFocusHandler,
    onInputMouseDownHandler,
  }
}
