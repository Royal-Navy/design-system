import React, { useState } from 'react'
import { UseComboboxStateChange } from 'downshift'

import { SelectChildWithStringType } from '../../SelectBase'

export function useItems(children: SelectChildWithStringType[]): {
  items: SelectChildWithStringType[]
  onInputValueChange: (
    changes: UseComboboxStateChange<SelectChildWithStringType>
  ) => void
} {
  const [items, setItems] = useState<SelectChildWithStringType[]>(children)

  function onInputValueChange({
    inputValue,
  }: UseComboboxStateChange<SelectChildWithStringType>) {
    setItems(
      children.filter((item) => {
        if (!React.isValidElement(item)) {
          return false
        }
        const filter = inputValue.toLowerCase()
        return item.props.children.toLowerCase().indexOf(filter) > -1
      })
    )
  }

  return {
    items,
    onInputValueChange,
  }
}
