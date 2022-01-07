import React from 'react'
import { useCombobox } from 'downshift'

import { getId } from '../../helpers'
import { initialSelectedItem, itemToString } from '../SelectE/helpers'
import { SelectChildType, SelectEProps } from '../SelectE'
import { SelectLayout } from '../SelectE/SelectLayout'
import { useInput } from './hooks/useInput'
import { useItems } from './hooks/useItems'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AutocompleteEProps extends SelectEProps {}

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
    isOpen,
    openMenu,
    reset,
    selectedItem,
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

  return (
    <SelectLayout
      hasLabelFocus={isOpen}
      hasSelectedItem={!!selectedItem}
      id={id}
      inputProps={getInputProps({
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
        React.Children.map(items, (child: SelectChildType, index) => {
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
            isHighlighted: highlightedIndex === index,
          })
        })}
    </SelectLayout>
  )
}

AutocompleteE.displayName = 'AutocompleteE'
