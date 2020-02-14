import { FormEvent, useState } from 'react'

export function useFocus(onBlur: (event: FormEvent) => void) {
  const [hasFocus, setHasFocus] = useState(false)

  const onInputBlur = (event: FormEvent) => {
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
