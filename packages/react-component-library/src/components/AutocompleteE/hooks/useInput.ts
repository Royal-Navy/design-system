import React, { useRef } from 'react'
import { UseComboboxStateChange } from 'downshift'

import { SelectChildWithStringType } from '../../SelectBase'

export function useInput(): {
  inputRef: React.RefObject<HTMLInputElement>
  onIsOpenChange: (
    changes: UseComboboxStateChange<SelectChildWithStringType>
  ) => void
} {
  const inputRef = useRef<HTMLInputElement>()

  function onIsOpenChange({
    isOpen,
  }: UseComboboxStateChange<SelectChildWithStringType>) {
    if (isOpen) {
      inputRef.current.focus()
    } else {
      inputRef.current.blur()
    }
  }

  return {
    inputRef,
    onIsOpenChange,
  }
}
