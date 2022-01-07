import { useRef } from 'react'
import { UseComboboxStateChange } from 'downshift'

import { SelectChildType } from '../../SelectE'

export function useInput(): {
  inputRef: React.RefObject<HTMLInputElement>
  onIsOpenChange: (changes: UseComboboxStateChange<SelectChildType>) => void
} {
  const inputRef = useRef<HTMLInputElement>()

  function onIsOpenChange({ isOpen }: UseComboboxStateChange<SelectChildType>) {
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
