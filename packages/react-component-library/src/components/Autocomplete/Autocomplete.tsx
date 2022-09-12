import React, { useCallback } from 'react'
import { useCombobox } from 'downshift'

import {
  initialSelectedItem,
  itemToString,
  SelectBaseOptionAsStringProps,
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
  /**
   * Called when the input loses focus.
   */
  onBlur?: (event: React.FocusEvent) => void
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  children,
  id: externalId,
  initialIsOpen,
  isInvalid = false,
  onBlur,
  onChange,
  value = null,
  ...rest
}) => {
  const {
    hasError,
    inputRef,
    items,
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
  } = useCombobox<SelectChildWithStringType>({
    initialIsOpen,
    items,
    itemToString,
    onInputValueChange,
    onIsOpenChange,
    initialSelectedItem: initialSelectedItem(children, value),
    onSelectedItemChange: (changes) => {
      onSelectedItemChange(changes)

      const { selectedItem: newItem } = changes

      if (onChange) {
        onChange(
          React.isValidElement<SelectBaseOptionAsStringProps>(newItem)
            ? newItem.props.value
            : null
        )
      }

      focusToggleButton()
    },
  })

  const { onInputBlurHandler, onInputTabKeyHandler } = useHighlightedIndex(
    highlightedIndex,
    inputValue,
    isOpen,
    items,
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
      value={selectedItem ? itemToString(selectedItem) : ''}
      {...rest}
    >
      {isOpen &&
        React.Children.map(items, (child: SelectChildWithStringType, index) => {
          if (!React.isValidElement<SelectBaseOptionAsStringProps>(child)) {
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
