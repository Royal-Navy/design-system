import React, { useRef } from 'react'
import { useSelect } from 'downshift'

import {
  initialSelectedItem,
  itemToString,
  SelectBaseProps,
  SelectChildWithStringType,
  SelectLayout,
} from '../SelectBase'
import { useExternalId } from '../../hooks/useExternalId'
import { useMenuVisibility } from '../SelectBase/hooks/useMenuVisibility'
import { useSelectMenu } from './hooks/useSelectMenu'

export const Select: React.FC<SelectBaseProps> = ({
  children,
  id: externalId,
  onChange,
  value = null,
  ...rest
}) => {
  const id = useExternalId('select', externalId)
  const inputRef = useRef<HTMLInputElement>(null)
  const {
    getItemProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    isOpen,
    openMenu,
    reset,
    selectedItem,
  } = useSelect<SelectChildWithStringType>({
    itemToString,
    initialSelectedItem: initialSelectedItem(children, value),
    items: React.Children.toArray(children),
    onSelectedItemChange: ({ selectedItem: newItem }) => {
      if (onChange) {
        onChange(React.isValidElement(newItem) ? newItem.props.value : null)
      }
    },
  })

  const { onInputFocusHandler } = useMenuVisibility(isOpen, openMenu)

  const { onMenuKeyDownHandler } = useSelectMenu(inputRef)

  return (
    <SelectLayout
      hasSelectedItem={!!selectedItem}
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
      value={selectedItem ? itemToString(selectedItem) : ''}
      {...{
        readOnly: true,
        ...rest,
      }}
    >
      {isOpen &&
        React.Children.map(
          children,
          (child: SelectChildWithStringType, index) => {
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
              title: child.props.children,
            })
          }
        )}
    </SelectLayout>
  )
}

Select.displayName = 'Select'
