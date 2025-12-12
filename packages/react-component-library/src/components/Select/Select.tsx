import React, { useRef, useCallback, useMemo } from 'react'
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
import { useDropdownDirection } from './hooks/useDropdownDirection'
import {
  isRemovalAction,
  isSelectionAction,
  toggleItemInArray,
} from './helpers/multiSelectHelpers'
import { useMultiSelect } from './hooks/useMultiSelect'
import { useDisplayText } from './hooks/useDisplayText'

export interface SingleSelectProps extends SelectBaseProps {
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
  const { triggerRef, popupPosition } = useDropdownDirection()

  const filteredItems = React.Children.toArray(children).filter(
    React.isValidElement<SelectOptionProps>
  )
  const items = filteredItems.map((child) => child.props.value)
  const itemsMap = Object.fromEntries(
    filteredItems.map((item) => [item.props.value, item])
  )

  const { selectedItems, setSelectedItems } = useMultiSelect({
    isMulti,
    initialValue,
    value,
  })

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
    selectedItems: isMulti ? selectedItems : [],
    onStateChange({ selectedItems: newSelectedItems, type }) {
      if (isRemovalAction(type) && newSelectedItems) {
        setSelectedItems(newSelectedItems)
        callMultiOnChange(newSelectedItems)
      }
    },
  })

  const isMultiHookOptions: Partial<UseSelectProps<string>> = {
    selectedItem: null,
    stateReducer(state, actionAndChanges) {
      const { changes, type } = actionAndChanges

      if (isSelectionAction(type)) {
        return {
          ...changes,
          isOpen: true, // Keeps menu open after selection is made
          highlightedIndex: state.highlightedIndex,
        }
      }

      return changes
    },
    onStateChange({ type, selectedItem: newSelectedItem }) {
      if (isSelectionAction(type) && newSelectedItem) {
        const newSelectedItems = toggleItemInArray(
          selectedItems,
          newSelectedItem
        )

        setSelectedItems(newSelectedItems)
        callMultiOnChange(newSelectedItems)
      }
    },
  }

  const isControlled = value !== undefined

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
    if (!isMulti) {
      reset()
      return
    }

    setSelectedItems([])
    callMultiOnChange([])
  }, [isMulti, reset, setSelectedItems, callMultiOnChange])

  const displayText = useDisplayText({
    isMulti,
    selectedItem,
    selectedItems,
    itemsMap,
    inputRef,
  })

  const hasSelectedItem = useMemo(
    () => (isMulti ? selectedItems.length > 0 : !isNil(selectedItem)),
    [isMulti, selectedItems, selectedItem]
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
            ? selectedItems.includes(child.props.value)
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
  )
}

Select.displayName = 'Select'
