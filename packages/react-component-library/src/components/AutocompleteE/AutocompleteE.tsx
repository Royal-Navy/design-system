import React, { useEffect } from 'react'
import { useCombobox } from 'downshift'

import { getId } from '../../helpers'
import {
  initialSelectedItem,
  itemToString,
  SelectBaseProps,
  SelectChildWithStringType,
  SelectLayout,
} from '../SelectBase'
import { NoResults } from './NoResults'
import { useHighlightedIndex } from './hooks/useHighlightedIndex'
import { useInput } from './hooks/useInput'
import { useItems } from './hooks/useItems'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AutocompleteEProps extends SelectBaseProps {}

export const AutocompleteE: React.FC<AutocompleteEProps> = ({
  children,
  id = getId('autocomplete'),
  onChange,
  value,
  ...rest
}) => {
  const { items, onInputValueChange } = useItems(
    React.Children.toArray(children)
  )
  const { inputRef, onIsOpenChange } = useInput()

  const {
    getComboboxProps,
    getInputProps,
    getItemProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    inputValue,
    isOpen,
    openMenu,
    reset,
    selectedItem,
    setHighlightedIndex,
    toggleMenu,
  } = useCombobox({
    items,
    itemToString,
    onInputValueChange,
    onIsOpenChange,
    initialSelectedItem: initialSelectedItem(children, value),
    onSelectedItemChange: ({ selectedItem: newItem }) => {
      if (onChange) {
        onChange(React.isValidElement(newItem) ? newItem.props.value : null)
      }
    },
  })

  const { resetHighlightedIndex } = useHighlightedIndex(
    highlightedIndex,
    inputValue,
    isOpen,
    setHighlightedIndex
  )

  return (
    <SelectLayout
      hasLabelFocus={isOpen}
      hasSelectedItem={!!inputValue}
      id={id}
      inputProps={getInputProps({
        onBlur: () => {
          resetHighlightedIndex()
        },
        onFocus: () => {
          if (!isOpen) {
            openMenu()
          }
        },
        onMouseDown: (e: React.MouseEvent) => {
          toggleMenu()
          e.stopPropagation()
          e.preventDefault()
        },
        ref: inputRef,
      })}
      inputWrapperProps={getComboboxProps()}
      isOpen={isOpen}
      menuProps={getMenuProps()}
      onClearButtonClick={() => {
        reset()
      }}
      toggleButtonProps={getToggleButtonProps()}
      value={selectedItem ? itemToString(selectedItem) : ''}
      {...rest}
    >
      {isOpen &&
        React.Children.map(items, (child: SelectChildWithStringType, index) => {
          if (!React.isValidElement(child)) {
            return null
          }

          return React.cloneElement(child, {
            ...child.props,
            ...getItemProps({
              index,
              item: child,
              key: `autocomplete-option-${child.props.children}`,
            }),
            inputValue,
            isHighlighted: highlightedIndex === index,
          })
        })}
      {inputValue && !items.length && <NoResults>{inputValue}</NoResults>}
    </SelectLayout>
  )
}

AutocompleteE.displayName = 'AutocompleteE'
