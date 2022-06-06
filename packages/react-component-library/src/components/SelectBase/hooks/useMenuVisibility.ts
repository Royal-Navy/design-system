import { useCallback } from 'react'

export function useMenuVisibility(
  isOpen: boolean,
  openMenu: () => void
): {
  onInputFocusHandler: () => void
} {
  const onInputFocusHandler = useCallback(() => {
    if (!isOpen) {
      openMenu()
    }
  }, [isOpen, openMenu])

  return {
    onInputFocusHandler,
  }
}
