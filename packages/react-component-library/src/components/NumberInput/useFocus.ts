import React, { FormEvent, useState } from 'react'

export function useFocus(
  onBlur?: (event: React.FormEvent<HTMLInputElement>) => void
) {
  const [hasFocus, setHasFocus] = useState(false)

  const onInputBlur = (event: FormEvent<HTMLInputElement>) => {
    setHasFocus(false)

    if (onBlur) {
      onBlur(event)
    }
  }

  const onInputFocus = () => {
    setHasFocus(true)
  }

  return {
    hasFocus,
    onInputBlur,
    onInputFocus,
  }
}
