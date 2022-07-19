import React, { useState, useCallback } from 'react'

export function useFocus(onBlur?: (event: React.FormEvent) => void) {
  const [hasFocus, setHasFocus] = useState(false)

  const onLocalBlur = useCallback(
    (event: React.FormEvent) => {
      if (hasFocus) {
        setHasFocus(false)
      }

      if (onBlur) {
        onBlur(event)
      }
    },
    [hasFocus, onBlur]
  )

  const onLocalFocus = useCallback(() => {
    if (!hasFocus) {
      setHasFocus(true)
    }
  }, [hasFocus])

  return {
    hasFocus,
    onLocalBlur,
    onLocalFocus,
  }
}
