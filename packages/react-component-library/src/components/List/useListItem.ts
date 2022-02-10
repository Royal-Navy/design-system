import { useState } from 'react'

export function useListItem() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  function isActive(currentIndex: number): boolean | undefined {
    if (activeIndex === null) {
      return undefined
    }

    return currentIndex === activeIndex
  }

  return {
    isActive,
    setActiveIndex,
  }
}
