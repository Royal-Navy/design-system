import React from 'react'
import reactStringReplace from 'react-string-replace'

import { SelectBaseOption, SelectBaseOptionAsStringProps } from '../SelectBase'

export interface AutocompleteOptionProps extends SelectBaseOptionAsStringProps {
  inputValue?: string
}

export const AutocompleteOption = React.forwardRef<
  HTMLLIElement,
  AutocompleteOptionProps
>(({ children, inputValue, ...rest }, ref) => {
  return (
    <SelectBaseOption ref={ref} {...rest}>
      {inputValue
        ? reactStringReplace(children, inputValue, (match, i) => (
            <strong key={i}>{match}</strong>
          ))
        : children}
    </SelectBaseOption>
  )
})

AutocompleteOption.displayName = 'AutocompleteOption'
