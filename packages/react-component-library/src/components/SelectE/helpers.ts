import React from 'react'
import { SelectChildrenType, SelectChildType } from './SelectE'

function itemToString(item: SelectChildType) {
  return React.isValidElement(item) ? item.props.children : null
}

function initialSelectedItem(children: SelectChildrenType, value: string) {
  return React.Children.toArray(children).find((child) => {
    return React.isValidElement(child) ? child.props.value === value : null
  })
}

export { initialSelectedItem, itemToString }
