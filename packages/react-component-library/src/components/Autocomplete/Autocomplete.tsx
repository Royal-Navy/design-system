import { isNil } from 'lodash'
import React, { useCallback } from 'react'
import { useCombobox } from 'downshift'

import {
  getSelectedItem,
  itemToString,
  SelectBaseProps,
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
  /**
   * Called when the input loses focus.
   */
  onBlur?: (event: React.FocusEvent) => void
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  children,
  id: externalId,
  initialIsOpen,
  initialValue,
  isInvalid = false,
  onBlur,
  onChange,
  value,
  ...rest
}) => {
  const {
    filteredItems,
    hasError,
    hasFilter,
    inputRef,
    itemsMap,
    onInputValueChange,
    onIsOpenChange,
    onSelectedItemChange,
  } = useAutocomplete(React.Children.toArray(children))

  const {
    buttonRef,
    focusToggleButton,
    onInputEscapeKeyHandler,
    onToggleButtonKeyDownHandler,
  } = useToggleButton(inputRef)
  const id = useExternalId('autocomplete', externalId)

  const isControlled = value !== undefined

  const {
    getComboboxProps,
    getInputProps,
    getItemProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    inputValue,
    isOpen = false,
    openMenu,
    reset,
    selectedItem,
    setHighlightedIndex,
    setInputValue,
  } = useCombobox<string>({
    initialIsOpen,
    items: filteredItems.map((item) => item.props.value),
    itemToString: (item) => itemToString(item, itemsMap),
    onInputValueChange,
    onIsOpenChange,
    onSelectedItemChange: (changes) => {
      onSelectedItemChange(changes)

      const { selectedItem: newValue } = changes

      if (onChange) {
        onChange(newValue ?? null)
      }

      focusToggleButton()
    },
    ...{
      [isControlled ? 'selectedItem' : 'initialSelectedItem']: getSelectedItem(
        isControlled ? value : initialValue,
        itemsMap
      ),
    },
  })

  const { onInputBlurHandler, onInputTabKeyHandler } = useHighlightedIndex(
    highlightedIndex,
    inputValue,
    isOpen,
    filteredItems,
    setHighlightedIndex,
    setInputValue
  )

  const { onInputFocusHandler } = useMenuVisibility(isOpen, openMenu)

  const handleInputBlur: React.FocusEventHandler<HTMLInputElement> =
    useCallback(
      (...args) => {
        onInputBlurHandler()
        onBlur?.(...args)
      },
      [onBlur, onInputBlurHandler]
    )

  const handleInputScroll: React.UIEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const input = event.currentTarget

      if (document.activeElement !== input && !hasFilter) {
        // Scroll to the beginning of the input in Firefox
        input.scrollLeft = 0
      }
    },
    [hasFilter]
  )

  const selectedItemText =
    isNil(selectedItem) || hasFilter
      ? ''
      : itemsMap[selectedItem].props.children

  return (
    <SelectLayout
      hasLabelFocus={isOpen}
      hasSelectedItem={!!inputValue}
      id={id}
      inputProps={getInputProps({
        onBlur: handleInputBlur,
        onFocus: onInputFocusHandler,
        onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
          onInputTabKeyHandler(e)
          onInputEscapeKeyHandler(e)
        },
        onScroll: handleInputScroll,
        ref: inputRef,
      })}
      inputWrapperProps={getComboboxProps({
        'aria-expanded': isOpen,
      })}
      isInvalid={hasError || isInvalid}
      isOpen={isOpen}
      menuProps={getMenuProps()}
      onClearButtonClick={() => {
        reset()
      }}
      toggleButtonProps={getToggleButtonProps({
        onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => {
          onToggleButtonKeyDownHandler(e)
        },
        ref: buttonRef,
      })}
      tooltipText={selectedItemText}
      {...rest}
    >
      {isOpen &&
        filteredItems.map((child, index) => {
          return React.cloneElement(child, {
            ...child.props,
            ...getItemProps({
              index,
              item: child.props.value,
              key: `autocomplete-option-${child.props.value}`,
            }),
            inputValue,
            isHighlighted: highlightedIndex === index,
            title: child.props.children,
          })
        })}
      {inputValue && !filteredItems.length && (
        <NoResults>{inputValue}</NoResults>
      )}
    </SelectLayout>
  )
}

Autocomplete.displayName = 'Autocomplete'
