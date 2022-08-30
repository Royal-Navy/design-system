import React from 'react'

import {
  SelectBaseOptionAsStringProps,
  SelectChildWithStringType,
} from '../SelectBase'

function findIndexOfInputValue(
  items: SelectChildWithStringType[],
  inputValue: string
): number {
  return items.findIndex((child: SelectChildWithStringType) => {
    return (
      React.isValidElement<SelectBaseOptionAsStringProps>(child) &&
      child.props.children === inputValue
    )
  })
}

export { findIndexOfInputValue }
