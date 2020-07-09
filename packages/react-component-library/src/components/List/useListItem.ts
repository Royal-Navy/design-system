import { useState } from 'react'

export function useListItem() {
  const [activeIndex, setActiveIndex] = useState<number>(null)

  function isActive(currentIndex: number): boolean {
    if (activeIndex === null) {
      return null
    }

    return currentIndex === activeIndex
  }

  return {
    isActive,
    setActiveIndex,
  }
}
