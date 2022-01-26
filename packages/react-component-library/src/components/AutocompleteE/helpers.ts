import React from 'react'

import { SelectChildWithStringType } from '../SelectBase'

function findIndexOfInputValue(
  items: SelectChildWithStringType[],
  inputValue: string
): number {
  return items.findIndex((child: SelectChildWithStringType) => {
    return React.isValidElement(child) && child.props.children === inputValue
  })
}

export { findIndexOfInputValue }
