import React, { useEffect, useRef, useState } from 'react'

import { TabProps } from './Tab'

export function useScrollableTabSet(items: React.ReactElement<TabProps>[]) {
  const [currentScrollToTab, setCurrentScrollToTab] = useState(0)
  const itemsRef = useRef<Array<HTMLLIElement>>([])
  const tabsRef = useRef<HTMLDivElement>()

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, items.length)
  }, [items])

  function updateCurrentScrollToTab(change: (currentTab: number) => number) {
    return () => {
      const nextTab = change(currentScrollToTab)
      const nextTabExists = nextTab > -1 && nextTab < items.length
      if (nextTabExists) {
        const currentPosition = tabsRef.current.scrollLeft
        const newPosition =
          itemsRef.current[nextTab].offsetLeft - tabsRef.current.offsetLeft

        tabsRef.current.scrollTo(newPosition, 0)

        const isPositionTheSame = currentPosition === tabsRef.current.scrollLeft

        if (!isPositionTheSame) setCurrentScrollToTab(nextTab)
      }
    }
  }

  return { itemsRef, tabsRef, updateCurrentScrollToTab }
}
