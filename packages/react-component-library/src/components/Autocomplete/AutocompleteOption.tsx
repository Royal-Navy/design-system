import React from 'react'
import reactStringReplace from 'react-string-replace'

import { SelectBaseOption, SelectBaseOptionAsStringProps } from '../SelectBase'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AutocompleteOptionProps extends SelectBaseOptionAsStringProps {
  inputValue?: string
}

export const AutocompleteOption = React.forwardRef<
  HTMLLIElement,
  AutocompleteOptionProps
>(({ children, inputValue, ...rest }, ref) => {
  return (
    <SelectBaseOption ref={ref} {...rest}>
      {reactStringReplace(children, inputValue, (match, i) => (
        <strong key={i}>{match}</strong>
      ))}
    </SelectBaseOption>
  )
})

AutocompleteOption.displayName = 'AutocompleteOption'
