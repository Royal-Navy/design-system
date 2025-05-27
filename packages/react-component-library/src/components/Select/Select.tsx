import React, { useRef } from 'react'
import { useSelect } from 'downshift'
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

export const Select = ({
  children,
  id: externalId,
  initialIsOpen,
  initialValue,
  onChange,
  value,
  ...rest
}: SelectBaseProps) => {
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

  const isControlled = value !== undefined

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
    onSelectedItemChange: ({ selectedItem: newItem }) => {
      onChange?.(newItem ?? null)
    },
    ...{
      [isControlled ? 'selectedItem' : 'initialSelectedItem']: getSelectedItem(
        isControlled ? value : initialValue,
        itemsMap
      ),
    },
  })

  const { onInputFocusHandler } = useMenuVisibility(isOpen, openMenu)

  const { onMenuKeyDownHandler } = useSelectMenu(inputRef)

  const selectedItemText = isNil(selectedItem)
    ? ''
    : itemsMap[selectedItem].props.children

  return (
    <SelectLayout
      hasSelectedItem={!isNil(selectedItem)}
      id={id}
      inputProps={{
        ...getToggleButtonProps({
          onFocus: onInputFocusHandler,
          onMouseDown: (event) => {
            // This is crucial for correct focus and click behavior
            // Without this, Downshift internal state gets mixed up
            event.preventDefault()
          },
        }),
        ref: mergeRefs([inputRef, triggerRef]),
        'aria-expanded': undefined,
      }}
      isOpen={isOpen}
      menuProps={getMenuProps({
        onKeyDown: onMenuKeyDownHandler,
      })}
      onClearButtonClick={() => {
        reset()
      }}
      toggleButtonProps={getToggleButtonProps()}
      tooltipText={selectedItemText}
      value={selectedItemText}
      popupPosition={popupPosition}
      {...{
        readOnly: true,
        ...rest,
      }}
    >
      {isOpen &&
        filteredItems.map((child, index) => {
          return React.cloneElement(child, {
            ...child.props,
            ...getItemProps({
              index,
              disabled: child.props.isDisabled,
              item: child.props.value,
              key: `select-option-${child.props.value}`,
            }),
            isHighlighted: highlightedIndex === index,
            title: child.props.children,
          })
        })}
    </SelectLayout>
  )
}

Select.displayName = 'Select'
