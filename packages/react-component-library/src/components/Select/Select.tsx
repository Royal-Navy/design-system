import React, { useRef } from 'react'
import { useSelect } from 'downshift'
import { isNil } from 'lodash'

import {
  getSelectedItem,
  itemToString,
  SelectBaseOptionAsStringProps,
  SelectBaseProps,
  SelectLayout,
} from '../SelectBase'
import { useExternalId } from '../../hooks/useExternalId'
import { useMenuVisibility } from '../SelectBase/hooks/useMenuVisibility'
import { useSelectMenu } from './hooks/useSelectMenu'

export const Select: React.FC<SelectBaseProps> = ({
  children,
  id: externalId,
  initialIsOpen,
  initialValue,
  onChange,
  value,
  ...rest
}) => {
  const id = useExternalId('select', externalId)
  const inputRef = useRef<HTMLInputElement>(null)

  const filteredItems = React.Children.toArray(children).filter(
    React.isValidElement<SelectBaseOptionAsStringProps>
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
        onFocus: onInputFocusHandler,
        ref: inputRef,
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
