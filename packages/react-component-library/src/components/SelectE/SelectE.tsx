import React from 'react'
import { useSelect } from 'downshift'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { getId } from '../../helpers'
import { SelectEOptionProps } from './SelectEOption'
import { SelectLayout } from './SelectLayout'
import { initialSelectedItem, itemToString } from './helpers'

export type SelectChildType =
  | React.ReactElement<SelectEOptionProps>
  | React.ReactFragment
  | false
  | null
  | undefined

export type SelectChildrenType = SelectChildType | SelectChildType[]

export interface SelectEProps extends ComponentWithClass {
  /**
   * Collection of options to display within the Select.
   */
  children: SelectChildrenType
  /**
   * Optional HTML `id` attribute to apply to the component.
   */
  id?: string
  /**
   * Toggles whether the component is disabled or not (preventing user interaction).
   */
  isDisabled?: boolean
  /**
   * Toggles whether the component is invalid or not.
   */
  isInvalid?: boolean
  /**
   * Text label to display within the component.
   */
  label: string
  /**
   * Optional handler invoked when the selected value changes.
   */
  onChange?: (value: string | null) => void
  /**
   * Optional HTML `value` attribute to apply to the component.
   */
  value?: string
}

export const SelectE: React.FC<SelectEProps> = ({
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
