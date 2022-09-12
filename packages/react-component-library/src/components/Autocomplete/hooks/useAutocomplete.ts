import React, { useRef, useState } from 'react'
import { UseComboboxStateChange } from 'downshift'

import { findIndexOfInputValue } from '../helpers'
import {
  SelectBaseOptionAsStringProps,
  SelectChildWithStringType,
} from '../../SelectBase'

export function useAutocomplete(children: SelectChildWithStringType[]): {
  hasError: boolean
  inputRef: React.RefObject<HTMLInputElement>
  items: SelectChildWithStringType[]
  onInputValueChange: (
    changes: UseComboboxStateChange<SelectChildWithStringType>
  ) => void
  onIsOpenChange: (
    changes: UseComboboxStateChange<SelectChildWithStringType>
  ) => void
  onSelectedItemChange: (
    changes: UseComboboxStateChange<SelectChildWithStringType>
  ) => void
} {
  const [hasError, setHasError] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [filterValue, setFilterValue] = useState<string>('')

  const items = React.Children.toArray(children).filter((child) => {
    if (!React.isValidElement<SelectBaseOptionAsStringProps>(child)) {
      return false
    }

    if (!filterValue) {
      return true
    }

    return (
      (child.props.children || '')
        .toLowerCase()
        .indexOf(filterValue.toLowerCase()) > -1
    )
  })

  function onInputValueChange({
    inputValue,
    isOpen,
  }: UseComboboxStateChange<SelectChildWithStringType>) {
    if (isOpen || !inputValue) {
      setFilterValue(inputValue || '')
    }

    if (!isOpen) {
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

      inputRef.current?.blur()
    }
  }

  function onSelectedItemChange() {
    setFilterValue('')
  }

  return {
    hasError,
    inputRef,
    items,
    onInputValueChange,
    onIsOpenChange,
    onSelectedItemChange,
  }
}
