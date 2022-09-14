import React, { useCallback, useEffect } from 'react'

import { findIndexOfInputValue } from '../helpers'
import { SelectBaseOptionAsStringProps } from '../../SelectBase'

export function useHighlightedIndex(
  highlightedIndex: number,
  inputValue: string,
  isOpen: boolean,
  items: React.ReactElement<SelectBaseOptionAsStringProps>[],
  setHighlightedIndex: (index: number) => void,
  setInputValue: (value: string) => void
): {
  onInputBlurHandler: () => void
  onInputTabKeyHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void
} {
  useEffect(() => {
    if (inputValue && highlightedIndex < 0) {
      if (isOpen) {
        const index = findIndexOfInputValue(items, inputValue)
        setHighlightedIndex(index === -1 ? 0 : index)
      } else {
        setHighlightedIndex(0)
      }
    }
  }, [highlightedIndex, inputValue, isOpen, items, setHighlightedIndex])

  function resetHighlightedIndex() {
    setHighlightedIndex(-1)
  }

  const onInputBlurHandler = useCallback(resetHighlightedIndex, [
    setHighlightedIndex,
  ])

  const onInputTabKeyHandler = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== 'Tab') {
        return
      }

      const item = items[highlightedIndex]

      if (item) {
        setInputValue(item.props.children)
      }
    },
    [highlightedIndex, items, setInputValue]
  )

  return {
    onInputBlurHandler,
    onInputTabKeyHandler,
  }
}
