import React, { useState } from 'react'

export function useFocus(onBlur: (event: React.FormEvent) => void) {
  const [hasFocus, setHasFocus] = useState(false)

  const onFocus = () => {
    setHasFocus(true)
  }

  const onLocalBlur = (event: React.FormEvent) => {
    setHasFocus(false)

    if (onBlur) {
      onBlur(event)
    }
  }

  return {
    hasFocus,
    onFocus,
    onLocalBlur,
  }
}
