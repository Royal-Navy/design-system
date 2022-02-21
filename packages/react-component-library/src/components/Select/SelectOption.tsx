import React from 'react'

import { SelectBaseOption, SelectBaseOptionAsStringProps } from '../SelectBase'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SelectOptionProps
  extends Omit<SelectBaseOptionAsStringProps, 'title'> {}

export const SelectOption = React.forwardRef<HTMLLIElement, SelectOptionProps>(
  (props, ref) => <SelectBaseOption {...props} ref={ref} />
)

SelectOption.displayName = 'SelectOption'
