import React, { useCallback } from 'react'

export function useSelectMenu(inputRef: React.RefObject<HTMLInputElement>): {
  onMenuKeyDownHandler: (e: React.KeyboardEvent<HTMLUListElement>) => void
} {
  const onMenuKeyDownHandler = useCallback(
    (e: React.KeyboardEvent<HTMLUListElement>) => {
      if (e.key === 'Tab') {
        inputRef.current?.focus()
      }
    },
    [inputRef]
  )

  return {
    onMenuKeyDownHandler,
  }
}
