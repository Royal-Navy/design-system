import React, { useCallback } from 'react'

export function useToggleButton(inputRef: React.RefObject<HTMLInputElement>): {
  onToggleButtonKeyDownHandler: (
    e: React.KeyboardEvent<HTMLButtonElement>
  ) => void
} {
  const onToggleButtonKeyDownHandler = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.code === 'ArrowDown') {
        inputRef.current?.focus()
      }
    },
    [inputRef]
  )

  return {
    onToggleButtonKeyDownHandler,
  }
}
