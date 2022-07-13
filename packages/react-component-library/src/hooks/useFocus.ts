import React, { useState } from 'react'

export function useFocus(onBlur?: (event: React.FormEvent) => void) {
  const [hasFocus, setHasFocus] = useState(false)

  const onLocalBlur = (event: React.FormEvent) => {
    if (hasFocus) {
      setHasFocus(false)
    }

    if (onBlur) {
      onBlur(event)
    }
  }

  const onLocalFocus = () => {
    if (!hasFocus) {
      setHasFocus(true)
    }
  }

  return {
    hasFocus,
    onLocalBlur,
    onLocalFocus,
  }
}
