import React from 'react'

import { SelectBaseOption, SelectBaseOptionAsStringProps } from '../SelectBase'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SelectEOptionProps extends SelectBaseOptionAsStringProps {}

export const SelectEOption = React.forwardRef<
  HTMLLIElement,
  SelectEOptionProps
>((props, ref) => <SelectBaseOption {...props} ref={ref} />)

SelectEOption.displayName = 'SelectEOption'
