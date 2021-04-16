import React, { useState } from 'react'

export function useFocus(onBlur?: (event: React.FormEvent) => void) {
  const [hasFocus, setHasFocus] = useState(false)

  const onLocalBlur = (event: React.FormEvent) => {
    setHasFocus(false)

    if (onBlur) {
      onBlur(event)
    }
  }

  const onLocalFocus = () => {
    setHasFocus(true)
  }

  return {
    hasFocus,
    onLocalBlur,
    onLocalFocus,
  }
}
