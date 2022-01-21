import React, { useRef, useState } from 'react'
import { UseComboboxStateChange } from 'downshift'

import { findIndexOfInputValue } from '../helpers'
import { SelectChildWithStringType } from '../../SelectBase'

export function useAutocomplete(children: SelectChildWithStringType[]): {
  inputRef: React.RefObject<HTMLInputElement>
  items: SelectChildWithStringType[]
  onInputValueChange: (
    changes: UseComboboxStateChange<SelectChildWithStringType>
  ) => void
  onIsOpenChange: (
    changes: UseComboboxStateChange<SelectChildWithStringType>
  ) => void
} {
  const inputRef = useRef<HTMLInputElement>()
  const [items, setItems] = useState<SelectChildWithStringType[]>(children)

  function onInputValueChange({
    inputValue,
  }: UseComboboxStateChange<SelectChildWithStringType>) {
    setItems(
      children.filter((item) => {
        if (!React.isValidElement(item)) {
          return false
        }
        const filter = inputValue.toLowerCase()
        return item.props.children.toLowerCase().indexOf(filter) > -1
      })
    )
  }

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
    items,
    onInputValueChange,
    onIsOpenChange,
  }
}
