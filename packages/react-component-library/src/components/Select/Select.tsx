import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react'
import { useSelect, useMultipleSelection, UseSelectProps } from 'downshift'
import { isNil } from 'lodash'
import mergeRefs from 'react-merge-refs'

import {
  getSelectedItem,
  itemToString,
  SelectBaseProps,
  SelectLayout,
} from '../SelectBase'
import { useExternalId } from '../../hooks/useExternalId'
import { useMenuVisibility } from '../SelectBase/hooks/useMenuVisibility'
import { useSelectMenu } from './hooks/useSelectMenu'
import { SelectOptionProps } from './SelectOption'
import { useDropdownDirection } from '../SelectBase/hooks/useDropdownDirection'

export interface SingleSelectProps extends SelectBaseProps<string | null> {
  isMulti?: false
}

export interface MultiSelectProps extends SelectBaseProps<string[]> {
  isMulti: true
}

export type SelectProps = SingleSelectProps | MultiSelectProps

export const Select = (props: SelectProps) => {
  const {
    children,
    id: externalId,
    initialIsOpen,
    initialValue,
    onChange,
    value,
    isMulti = false,
    ...rest
  } = props

  const id = useExternalId('select', externalId)
  const inputRef = useRef<HTMLInputElement>(null)
  const measureRef = useRef<HTMLSpanElement>(null)
  const { triggerRef, popupPosition } = useDropdownDirection()
  const [useMultipleText, setUseMultipleText] = useState(false)

  const filteredItems = React.Children.toArray(children).filter(
    React.isValidElement<SelectOptionProps>
  )
  const items = filteredItems.map((child) => child.props.value)
  const itemsMap = Object.fromEntries(
    filteredItems.map((item) => [item.props.value, item])
  )

  const isControlled = value !== undefined

  // Only used when isMulti is true
  const [selectedItems, setSelectedItems] = useState<string[]>(() => {
    if (isMulti && initialValue) {
      return props.initialValue as string[] // Safe cast as when isMulti is true initialValue must be string[]
    }
    return []
  })
  const currentSelectedItems = useMemo(() => {
    if (!isMulti) {
      return []
    }

    return isControlled && Array.isArray(value) ? value : selectedItems
  }, [isMulti, isControlled, value, selectedItems])

  const callMultiOnChange = useCallback(
    (newValue: string[]) => {
      const handler = onChange as MultiSelectProps['onChange']
      handler?.(newValue)
    },
    [onChange]
  )

  const callSingleOnChange = useCallback(
    (newValue: string | null) => {
      const handler = onChange as SingleSelectProps['onChange']
      handler?.(newValue)
    },
    [onChange]
  )

  const multipleSelection = useMultipleSelection({
    selectedItems: isMulti ? currentSelectedItems : [],
    onStateChange({ selectedItems: newSelectedItems, type }) {
      switch (type) {
        case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownBackspace:
        case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete:
        case useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace:
        case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
          if (newSelectedItems) {
            if (!isControlled) {
              setSelectedItems(newSelectedItems)
            }
            callMultiOnChange(newSelectedItems)
          }
          break
        default:
          break
      }
    },
  })

  const isMultiHookOptions: Partial<UseSelectProps<string>> = {
    selectedItem: null,
    stateReducer(state, actionAndChanges) {
      const { changes, type } = actionAndChanges

      switch (type) {
        case useSelect.stateChangeTypes.MenuKeyDownEnter:
        case useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
        case useSelect.stateChangeTypes.ItemClick:
          return {
            ...changes,
            isOpen: true, // Keeps menu open after selection is made
            highlightedIndex: state.highlightedIndex,
          }
        default:
          return changes
      }
    },
    onStateChange({ type, selectedItem: newSelectedItem }) {
      switch (type) {
        case useSelect.stateChangeTypes.MenuKeyDownEnter:
        case useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
        case useSelect.stateChangeTypes.ItemClick:
          if (newSelectedItem) {
            const index = currentSelectedItems.indexOf(newSelectedItem)

            const newItems =
              index === -1
                ? [...currentSelectedItems, newSelectedItem]
                : currentSelectedItems.filter((_, i) => i !== index)

            if (!isControlled) {
              setSelectedItems(newItems)
            }
            callMultiOnChange(newItems)
          }
          break
        default:
          break
      }
    },
  }

  const isSingleHookOptions: Partial<UseSelectProps<string>> = {
    selectedItem: undefined,
    onSelectedItemChange: ({ selectedItem: newItem }) => {
      callSingleOnChange(newItem ?? null)
    },
    [isControlled ? 'selectedItem' : 'initialSelectedItem']: getSelectedItem(
      isControlled ? (value as string | null) : (initialValue as string | null),
      itemsMap
    ),
  }

  const {
    getItemProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    isOpen,
    openMenu,
    reset,
    selectedItem,
  } = useSelect<string>({
    itemToString: (item) => itemToString(item, itemsMap),
    initialIsOpen,
    items,
    ...(isMulti ? isMultiHookOptions : isSingleHookOptions),
  })

  const { onInputFocusHandler } = useMenuVisibility(isOpen, openMenu)
  const { onMenuKeyDownHandler } = useSelectMenu(inputRef)

  const handleClearButtonClick = useCallback(() => {
    if (isMulti) {
      if (!isControlled) {
        setSelectedItems([])
      }
      callMultiOnChange([])
    } else {
      reset()
    }
  }, [isMulti, isControlled, callMultiOnChange, reset])

  const getFullText = useCallback(
    (selectedValues: string[]): string => {
      if (selectedValues.length === 0) {
        return ''
      }

      return selectedValues
        .map((itemValue) => itemsMap[itemValue]?.props.children || itemValue)
        .sort((a, b) => a.localeCompare(b))
        .join(', ')
    },
    [itemsMap]
  )

  const displayText = useMemo(() => {
    if (!isMulti) {
      return isNil(selectedItem) ? '' : itemsMap[selectedItem].props.children
    }

    return useMultipleText
      ? 'Multiple selected'
      : getFullText(currentSelectedItems)
  }, [
    isMulti,
    selectedItem,
    itemsMap,
    useMultipleText,
    getFullText,
    currentSelectedItems,
  ])

  useEffect(() => {
    if (!isMulti) {
      return
    }

    if (!inputRef.current || !measureRef.current) {
      setUseMultipleText(false)
      return
    }

    const fullText = getFullText(currentSelectedItems)
    measureRef.current.textContent = fullText

    const { offsetWidth: inputWidth } = inputRef.current
    const { offsetWidth: textWidth } = measureRef.current

    const buffer = 60 // Add some buffer for padding and clear button
    setUseMultipleText(textWidth > inputWidth - buffer)
  }, [isMulti, getFullText, currentSelectedItems, props.hideClearButton])

  const hasSelectedItem = useMemo(
    () => (isMulti ? currentSelectedItems.length > 0 : !isNil(selectedItem)),
    [isMulti, currentSelectedItems, selectedItem]
  )

  const defaultOptions = {
    onFocus: onInputFocusHandler,
    onMouseDown: (event: React.MouseEvent<HTMLInputElement>) => {
      // This is crucial for correct focus and click behavior
      // Without this, Downshift internal state gets mixed up
      event.preventDefault()
    },
  }
  const toggleButtonOptions = isMulti
    ? multipleSelection.getDropdownProps(defaultOptions)
    : defaultOptions

  return (
    <>
      <SelectLayout
        hasSelectedItem={hasSelectedItem}
        id={id}
        inputProps={{
          ...getToggleButtonProps(toggleButtonOptions),
          ref: mergeRefs([inputRef, triggerRef]),
          'aria-expanded': undefined,
        }}
        isOpen={isOpen}
        menuProps={getMenuProps({
          onKeyDown: onMenuKeyDownHandler,
        })}
        onClearButtonClick={handleClearButtonClick}
        toggleButtonProps={getToggleButtonProps()}
        tooltipText={displayText}
        value={displayText}
        popupPosition={popupPosition}
        {...{
          readOnly: true,
          ...rest,
        }}
      >
        {isOpen &&
          filteredItems.map((child, index) => {
            const isSelected = isMulti
              ? currentSelectedItems.includes(child.props.value)
              : selectedItem === child.props.value

            return React.cloneElement(child, {
              ...child.props,
              ...getItemProps({
                index,
                disabled: child.props.isDisabled,
                item: child.props.value,
                key: `select-option-${child.props.value}`,
              }),
              isHighlighted: highlightedIndex === index,
              isSelected,
              showCheckbox: isMulti,
              title: child.props.children,
            })
          })}
      </SelectLayout>
      {/* Hidden span for measuring text width in multi-select mode */}
      {isMulti && (
        <span
          ref={measureRef}
          style={{
            position: 'absolute',
            visibility: 'hidden',
            whiteSpace: 'nowrap',
            fontSize: 'inherit',
            fontFamily: 'inherit',
          }}
          aria-hidden="true"
        />
      )}
    </>
  )
}

Select.displayName = 'Select'
