import { useEffect } from 'react'
import { findIndexOfInputValue } from '../helpers'
import { SelectChildWithStringType } from '../../SelectBase'

export function useHighlightedIndex(
  highlightedIndex: number,
  inputValue: string,
  isOpen: boolean,
  items: SelectChildWithStringType[],
  setHighlightedIndex: (index: number) => void
): {
  resetHighlightedIndex: () => void
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

  return {
    resetHighlightedIndex,
  }
}
