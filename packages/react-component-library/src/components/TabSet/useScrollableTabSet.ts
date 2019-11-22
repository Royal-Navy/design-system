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
        const currentScrollPosition = tabsRef.current.scrollLeft
        const newScrollPosition =
          itemsRef.current[nextTab].offsetLeft - tabsRef.current.offsetLeft

        tabsRef.current.scrollTo(newScrollPosition, 0)

        const isScrollPositionTheSame =
          currentScrollPosition === tabsRef.current.scrollLeft

        if (!isScrollPositionTheSame) {
          setCurrentScrollToTab(nextTab)
        }
      }
    }
  }

  return {
    itemsRef,
    tabsRef,
    updateCurrentScrollToTab,
  }
}
