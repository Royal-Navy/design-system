import React from 'react'

import { SelectBaseOption, SelectBaseOptionProps } from '../SelectBase'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AutocompleteEOptionProps extends SelectBaseOptionProps {}

export const AutocompleteEOption = React.forwardRef<
  HTMLLIElement,
  AutocompleteEOptionProps
>((props, ref) => <SelectBaseOption {...props} ref={ref} />)

AutocompleteEOption.displayName = 'AutocompleteEOption'
