import React from 'react'

import { SelectChildrenType, SelectChildWithStringType } from './types'

function itemToString(item: SelectChildWithStringType) {
  return React.isValidElement(item) ? item.props.children : null
}

function initialSelectedItem(children: SelectChildrenType, value: string) {
  return React.Children.toArray(children).find((child) => {
    return React.isValidElement(child) ? child.props.value === value : null
  })
}

export { initialSelectedItem, itemToString }
