import React from 'react'
import { useSelect } from 'downshift'

import { getId } from '../../helpers'
import {
  initialSelectedItem,
  itemToString,
  SelectBaseProps,
  SelectChildType,
  SelectLayout,
} from '../SelectBase'

export const SelectE: React.FC<SelectBaseProps> = ({
  children,
  id = getId('select'),
  onChange,
  value,
  ...rest
}) => {
  const {
    getItemProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    isOpen,
    openMenu,
    reset,
    selectedItem,
    toggleMenu,
  } = useSelect({
    itemToString,
    initialSelectedItem: initialSelectedItem(children, value),
    items: React.Children.toArray(children),
    onSelectedItemChange: ({ selectedItem: newItem }) => {
      if (onChange) {
        onChange(React.isValidElement(newItem) ? newItem.props.value : null)
      }
    },
  })

  return (
    <SelectLayout
      hasSelectedItem={!!selectedItem}
      id={id}
      inputProps={{
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
      }}
      isOpen={isOpen}
      menuProps={getMenuProps()}
      onClearButtonClick={() => {
        reset()
      }}
      toggleButtonProps={getToggleButtonProps()}
      value={selectedItem ? itemToString(selectedItem) : ''}
      {...{
        readOnly: true,
        ...rest,
      }}
    >
      {isOpen &&
        React.Children.map(children, (child: SelectChildType, index) => {
          if (!React.isValidElement(child)) {
            return null
          }

          return React.cloneElement(child, {
            ...child.props,
            ...getItemProps({
              index,
              item: child,
              key: `select-option-${child.props.children}`,
            }),
            isHighlighted: highlightedIndex === index,
          })
        })}
    </SelectLayout>
  )
}

SelectE.displayName = 'SelectE'
