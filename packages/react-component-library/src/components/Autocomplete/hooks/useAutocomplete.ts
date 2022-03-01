import React, { useRef, useState } from 'react'
import { UseComboboxStateChange } from 'downshift'

import { findIndexOfInputValue } from '../helpers'
import { SelectChildWithStringType } from '../../SelectBase'

export function useAutocomplete(
  children: SelectChildWithStringType[],
  isInvalid: boolean
): {
  hasError: boolean
  inputRef: React.RefObject<HTMLInputElement>
  items: SelectChildWithStringType[]
  onInputValueChange: (
    changes: UseComboboxStateChange<SelectChildWithStringType>
  ) => void
  onIsOpenChange: (
    changes: UseComboboxStateChange<SelectChildWithStringType>
  ) => void
} {
  const [hasError, setHasError] = useState<boolean>(isInvalid)
  const inputRef = useRef<HTMLInputElement>(null)
  const [items, setItems] = useState<SelectChildWithStringType[]>(children)

  function onInputValueChange({
    inputValue,
    isOpen,
  }: UseComboboxStateChange<SelectChildWithStringType>) {
    if (isOpen) {
      setItems(
        children.filter((item) => {
          if (!React.isValidElement(item)) {
            return false
          }
          const filter = (inputValue as string).toLowerCase()
          return item.props.children.toLowerCase().indexOf(filter) > -1
        })
      )
    } else {
      setHasError(getHasError(inputValue))
    }
  }

  function getHasError(inputValue: string | undefined): boolean {
    if (!inputValue) {
      return false
    }

    return findIndexOfInputValue(items, inputValue) === -1
  }

  function onIsOpenChange({
    inputValue,
    isOpen,
  }: UseComboboxStateChange<SelectChildWithStringType>) {
    if (isOpen) {
      inputRef.current?.focus()
    } else {
      const newHasError = getHasError(inputValue)
      setHasError(newHasError)

      if (!newHasError) {
        setItems(children)
      }

      inputRef.current?.blur()
    }
  }

  return {
    hasError,
    inputRef,
    items,
    onInputValueChange,
    onIsOpenChange,
  }
}
