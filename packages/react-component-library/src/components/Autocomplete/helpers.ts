import React from 'react'

import { SelectBaseOptionAsStringProps } from '../SelectBase'

function findIndexOfInputValue(
  items: React.ReactElement<SelectBaseOptionAsStringProps>[],
  inputValue: string
): number {
  return items.findIndex((child) => child.props.children === inputValue)
}

export { findIndexOfInputValue }
