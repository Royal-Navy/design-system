import React, { useState } from 'react'

export function useFocus(onBlur: (event: React.FormEvent) => void) {
  const [focus, setFocus] = useState(false)

  const onFocus = () => {
    setFocus(true)
  }

  const onLocalBlur = (event: React.FormEvent) => {
    setFocus(false)

    if (onBlur) {
      onBlur(event)
    }
  }

  return {
    focus,
    onFocus,
    onLocalBlur,
  }
}
