import React, { useRef, useState } from 'react'
import { useCombobox, UseComboboxStateChange } from 'downshift'

import { findIndexOfInputValue } from '../helpers'
import {
  ItemsMap,
  SelectBaseOptionAsStringProps,
  SelectChildWithStringType,
} from '../../SelectBase'

export function useAutocomplete(children: SelectChildWithStringType[]): {
  filteredItems: React.ReactElement<SelectBaseOptionAsStringProps>[]
  hasError: boolean
  hasFilter: boolean,
  isExactMatch: boolean,
  inputRef: React.RefObject<HTMLInputElement>
  itemsMap: ItemsMap
  onInputValueChange: (changes: UseComboboxStateChange<string>) => void
  onIsOpenChange: (changes: UseComboboxStateChange<string>) => void
  onSelectedItemChange: (changes: UseComboboxStateChange<string>) => void
} {
  const [hasError, setHasError] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [filterValue, setFilterValue] = useState<string>('')

  const validChildren = React.Children.toArray(children).filter(
    React.isValidElement<SelectBaseOptionAsStringProps>
  )

  const filteredItems = validChildren.filter((child) => {
    if (!filterValue) {
      return true
    }

    return (
      (child.props.children || '')
        .toLowerCase()
        .indexOf(filterValue.toLowerCase()) > -1
    )
  })

  const isExactMatch = validChildren.some(child => {
    return (
      (child.props.children || '').toLowerCase() === filterValue.toLowerCase()
    )
  })

  const itemsMap = Object.fromEntries(
    validChildren.map((child) => [child.props.value, child])
  )

  function getHasError(inputValue: string | undefined): boolean {
    if (!inputValue) {
      return false
    }

    return findIndexOfInputValue(filteredItems, inputValue) === -1
  }

  function onInputValueChange({
    inputValue,
    isOpen,
    type,
  }: UseComboboxStateChange<string>) {
    const isControlledValueUpdate =
      type === useCombobox.stateChangeTypes.ControlledPropUpdatedSelectedItem

    if (!inputValue || (isOpen && !isControlledValueUpdate)) {
      setFilterValue(inputValue || '')
    }

    if (!isOpen) {
      setHasError(getHasError(inputValue))
    }
  }

  function onIsOpenChange({
    inputValue,
    isOpen,
  }: UseComboboxStateChange<string>) {
    if (isOpen) {
      inputRef.current?.focus()
    } else {
      if (!filterValue && inputRef.current) {
        // Scroll to the beginning of the input in Firefox
        inputRef.current.scrollLeft = 0
      }

      const newHasError = getHasError(inputValue)
      setHasError(newHasError)

      inputRef.current?.blur()
    }
  }

  function onSelectedItemChange() {
    setFilterValue('')
  }

  return {
    filteredItems,
    hasFilter: Boolean(filterValue),
    hasError,
    inputRef,
    itemsMap,
    onInputValueChange,
    onIsOpenChange,
    onSelectedItemChange,
    isExactMatch
  }
}
