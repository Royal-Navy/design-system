import React from 'react'

import { SelectEOption, SelectEOptionProps } from '../SelectE'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AutocompleteEOptionProps extends SelectEOptionProps {}

export const AutocompleteEOption = React.forwardRef<
  HTMLLIElement,
  AutocompleteEOptionProps
>((props, ref) => <SelectEOption {...props} ref={ref} />)

AutocompleteEOption.displayName = 'AutocompleteEOption'
