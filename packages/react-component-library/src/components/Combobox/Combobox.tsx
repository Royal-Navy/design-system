import { isNil } from 'lodash'
import React, { useCallback } from 'react'
import { useCombobox } from 'downshift'

import { getSelectedItem, itemToString, SelectLayout } from '../SelectBase'
import { useAutocomplete } from '../Autocomplete/hooks/useAutocomplete'
import { useToggleButton } from '../Autocomplete/hooks/useToggleButton'
import { useExternalId } from '../../hooks/useExternalId'
import { useHighlightedIndex } from '../Autocomplete/hooks/useHighlightedIndex'
import { useMenuVisibility } from '../SelectBase/hooks/useMenuVisibility'
import { AutocompleteProps } from '../Autocomplete'

export type ComboboxProps = Omit<
  AutocompleteProps,
  'initialIsOpen'
> & {
  /**
   * Called after the text input is changed and there is no match
   * @param newValue
   */
  onNotInList?: (newValue: string) => void
}

export const Combobox: React.FC<ComboboxProps> = (props: ComboboxProps) => {
  const {
    children,
    id: externalId,
    initialValue,
    isInvalid = false,
    onNotInList,
    hideClearButton,
    value,
    onBlur,
    onChange,
    ...rest
  } = props

  const {
    filteredItems,
    hasError: hasNoMatchingItems,
    hasFilter,
    inputRef,
    itemsMap,
    onInputValueChange,
    onIsOpenChange,
    onSelectedItemChange,
    isExactMatch
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
  } = useCombobox<string>({
    initialIsOpen: false,
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
    initialSelectedItem: getSelectedItem(initialValue, itemsMap),
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
    isNil(selectedItem) || isNil(itemsMap[selectedItem]) || hasFilter 
      ? ''
      : itemsMap[selectedItem].props.children

  const isNewValue = !!(inputValue && !filteredItems.length)
  const hasMatches = !isNewValue

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && isNewValue) {
        if (onNotInList) {
          onNotInList(inputValue)
        }

        // @ts-ignore - prevents the inputText being reset
        e.nativeEvent.preventDownshiftDefault = true
      }

      if (e.key === 'Tab' && isNewValue) {
        if (onNotInList) {
          onNotInList(inputValue)
        }
      }

      if(e.key === 'Escape'){
        if(isExactMatch){
          // Is the current text an exact match?
          // We use the original behaviour and clear
          setHighlightedIndex(-1)
        } else if(onNotInList){
          // If it is a partial match we assume that we want to create a new
          // entry with the partial text
          onNotInList(inputValue)
          // @ts-ignore - prevents the inputText being reset
          e.nativeEvent.preventDownshiftDefault = true
        }
      }

      onInputTabKeyHandler(e)
      onInputEscapeKeyHandler(e)
    },
    [
      inputValue,
      isNewValue,
      onInputEscapeKeyHandler,
      onInputTabKeyHandler,
      onNotInList,
      setHighlightedIndex,
    ]
  )

  return (
    <SelectLayout
      hasLabelFocus={isOpen}
      hasSelectedItem={!!inputValue}
      hideClearButton={hideClearButton}
      hideArrowButton={isNewValue}
      id={id}
      inputProps={getInputProps({
        onBlur: handleInputBlur,
        onFocus: onInputFocusHandler,
        onKeyDown: handleKeyDown,
        onScroll: handleInputScroll,
        ref: inputRef,
      })}
      inputWrapperProps={getComboboxProps({
        'aria-expanded': isOpen,
      })}
      isInvalid={isInvalid}
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
    </SelectLayout>
  )
}

Combobox.displayName = 'Combobox'
