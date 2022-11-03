import React from 'react'

import { SelectBaseOption, SelectBaseOptionAsStringProps } from '../SelectBase'

export interface SelectOptionProps
  extends Omit<SelectBaseOptionAsStringProps, 'title'> {
  isDisabled?: boolean
}

export const SelectOption = React.forwardRef<HTMLLIElement, SelectOptionProps>(
  (props, ref) => <SelectBaseOption {...props} ref={ref} />
)

SelectOption.displayName = 'SelectOption'
