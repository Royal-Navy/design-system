import React, { useState } from 'react'
import { UseComboboxStateChange } from 'downshift'

import { SelectChildType } from '../../SelectE'

export function useItems(children: SelectChildType[]): {
  items: SelectChildType[]
  onInputValueChange: (changes: UseComboboxStateChange<SelectChildType>) => void
} {
  const [items, setItems] = useState<SelectChildType[]>(children)

  function onInputValueChange({
    inputValue,
  }: UseComboboxStateChange<SelectChildType>) {
    setItems(
      children.filter((item) => {
        if (!React.isValidElement(item)) {
          return false
        }
        return item.props.children
          .toLowerCase()
          .startsWith(inputValue.toLowerCase())
      })
    )
  }

  return {
    items,
    onInputValueChange,
  }
}
