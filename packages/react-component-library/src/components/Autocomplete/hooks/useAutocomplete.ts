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
  /**
   * @deprecated Prefer to use hasMatchingValues
   */
  hasError: boolean
  hasMatchingValues: boolean
  hasFilter: boolean
  inputRef: React.RefObject<HTMLInputElement>
  itemsMap: ItemsMap
  onInputValueChange: (changes: UseComboboxStateChange<string>) => void
  onIsOpenChange: (changes: UseComboboxStateChange<string>) => void
  resetFilterValue: () => void
} {
  const [hasMatchingValues, setHasMatchingValues] = useState<boolean>(false)
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

  const itemsMap = Object.fromEntries(
    validChildren.map((child) => [child.props.value, child])
  )

  function getHasMatchingValues(inputValue: string | undefined): boolean {
    if (!inputValue) {
      return false
    }

    return findIndexOfInputValue(filteredItems, inputValue) === -1
  }

  function onInputValueChange(props: UseComboboxStateChange<string>) {
    const { inputValue, isOpen, type } = props

    const isControlledValueUpdate =
      type === useCombobox.stateChangeTypes.ControlledPropUpdatedSelectedItem

    // Code golf!?
    if (!inputValue || (isOpen && !isControlledValueUpdate)) {
      console.log('resetting filter value')
      setFilterValue(inputValue || '')
    }

    if (!isOpen) {
      setHasMatchingValues(getHasMatchingValues(inputValue))
    }
  }

  function onIsOpenChange(props: UseComboboxStateChange<string>) {
    const { inputValue, isOpen } = props

    if (isOpen) {
      inputRef.current?.focus()
    } else {
      if (!filterValue && inputRef.current) {
        // Scroll to the beginning of the input in Firefox
        inputRef.current.scrollLeft = 0
      }

      const newHasError = getHasMatchingValues(inputValue)
      setHasMatchingValues(newHasError)

      inputRef.current?.blur()
    }
  }

  function resetFilterValue() {
    setFilterValue('')
  }

  return {
    filteredItems,
    hasFilter: Boolean(filterValue),
    hasError: hasMatchingValues,
    hasMatchingValues,
    inputRef,
    itemsMap,
    onInputValueChange,
    onIsOpenChange,
    resetFilterValue,
  }
}
