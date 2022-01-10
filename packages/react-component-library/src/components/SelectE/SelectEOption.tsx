import React from 'react'

import { SelectBaseOption, SelectBaseOptionProps } from '../SelectBase'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SelectEOptionProps extends SelectBaseOptionProps {}

export const SelectEOption = React.forwardRef<
  HTMLLIElement,
  SelectEOptionProps
>((props, ref) => <SelectBaseOption {...props} ref={ref} />)

SelectEOption.displayName = 'SelectEOption'
