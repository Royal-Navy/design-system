import { useEffect } from 'react'

export function useHighlightedIndex(
  highlightedIndex: number,
  inputValue: string,
  isOpen: boolean,
  setHighlightedIndex: (index: number) => void
): {
  resetHighlightedIndex: () => void
} {
  useEffect(() => {
    if (inputValue && isOpen && highlightedIndex < 0) {
      setHighlightedIndex(0)
    }
  }, [highlightedIndex, inputValue, isOpen, setHighlightedIndex])

  function resetHighlightedIndex() {
    setHighlightedIndex(-1)
  }

  return {
    resetHighlightedIndex,
  }
}
