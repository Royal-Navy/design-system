import React, { useCallback, useRef } from 'react'

export function useToggleButton(inputRef: React.RefObject<HTMLInputElement>): {
  buttonRef: React.RefObject<HTMLButtonElement>
  focusToggleButton: () => void
  onInputEscapeKeyHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onToggleButtonKeyDownHandler: (
    e: React.KeyboardEvent<HTMLButtonElement>
  ) => void
} {
  const buttonRef = useRef<HTMLButtonElement>(null)

  function focusToggleButton() {
    buttonRef.current?.focus()
  }

  const onInputEscapeKeyHandler = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Escape') {
        buttonRef.current?.focus()
      }
    },
    []
  )

  const onToggleButtonKeyDownHandler = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'ArrowDown') {
        inputRef.current?.focus()
      }
    },
    [inputRef]
  )

  return {
    buttonRef,
    focusToggleButton,
    onInputEscapeKeyHandler,
    onToggleButtonKeyDownHandler,
  }
}
