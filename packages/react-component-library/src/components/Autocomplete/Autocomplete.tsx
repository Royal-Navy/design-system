import React from 'react'
import { useCombobox } from 'downshift'

import {
  initialSelectedItem,
  itemToString,
  SelectBaseProps,
  SelectChildWithStringType,
  SelectLayout,
} from '../SelectBase'
import { NoResults } from './NoResults'
import { useHighlightedIndex } from './hooks/useHighlightedIndex'
import { useAutocomplete } from './hooks/useAutocomplete'
import { useMenuVisibility } from '../SelectBase/hooks/useMenuVisibility'
import { useExternalId } from '../../hooks/useExternalId'
import { useToggleButton } from './hooks/useToggleButton'

export interface AutocompleteProps extends SelectBaseProps {
  /**
   * Whether to hide the clear button. (Note that the component can still
   * be cleared by manually deleting the text in the input.)
   */
  hideClearButton?: boolean
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  children,
  id: externalId,
  isInvalid = false,
  onChange,
  value = null,
  ...rest
}) => {
  const { hasError, inputRef, items, onInputValueChange, onIsOpenChange } =
    useAutocomplete(React.Children.toArray(children), isInvalid)
  const { onToggleButtonKeyDownHandler } = useToggleButton(inputRef)
  const id = useExternalId('autocomplete', externalId)

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
    setInputValue,
    toggleMenu,
  } = useCombobox<SelectChildWithStringType>({
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

  const { onInputBlurHandler, onInputKeyDownHandler } = useHighlightedIndex(
    highlightedIndex,
    inputValue,
    isOpen,
    items,
    setHighlightedIndex,
    setInputValue
  )

  const { onInputFocusHandler, onInputMouseDownHandler } = useMenuVisibility(
    isOpen,
    openMenu,
    toggleMenu
  )

  return (
    <SelectLayout
      hasLabelFocus={isOpen}
      hasSelectedItem={!!inputValue}
      id={id}
      inputProps={getInputProps({
        onBlur: onInputBlurHandler,
        onFocus: onInputFocusHandler,
        onKeyDown: onInputKeyDownHandler,
        onMouseDown: onInputMouseDownHandler,
        ref: inputRef,
      })}
      inputWrapperProps={getComboboxProps()}
      isInvalid={hasError}
      isOpen={isOpen}
      menuProps={getMenuProps()}
      onClearButtonClick={() => {
        reset()
      }}
      toggleButtonProps={getToggleButtonProps({
        onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => {
          onToggleButtonKeyDownHandler(e)
        },
      })}
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
            title: child.props.children,
          })
        })}
      {inputValue && !items.length && <NoResults>{inputValue}</NoResults>}
    </SelectLayout>
  )
}

Autocomplete.displayName = 'Autocomplete'
