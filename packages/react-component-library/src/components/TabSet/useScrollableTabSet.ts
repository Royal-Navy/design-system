import React, { useCallback, useEffect, useRef, useState } from 'react'
import useResizeObserver from 'use-resize-observer'

import { TabSetItemProps } from './TabSetItem'

export function useScrollableTabSet(
  items: React.ReactElement<TabSetItemProps>[]
) {
  const [currentScrollToTab, setCurrentScrollToTab] = useState(0)
  const itemsRef = useRef<Array<HTMLLIElement | null>>([])
  const tabsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, items.length)
  }, [items])

  const handleResize = useCallback(() => {
    const tabs = tabsRef.current
    const firstTabItem = itemsRef.current[0]

    if (!tabs || !firstTabItem) {
      return
    }

    const newScrollTabIndex = itemsRef.current.findIndex(
      (tab) =>
        tab &&
        tab.offsetLeft + tab.offsetWidth / 2 - firstTabItem.offsetLeft >=
          tabs.scrollLeft
    )

    setCurrentScrollToTab(Math.max(0, newScrollTabIndex))
  }, [])

  useResizeObserver<HTMLDivElement>({
    ref: tabsRef,
    onResize: handleResize,
  })

  function scrollToNextTab(change: (currentTab: number) => number) {
    return () => {
      const tabs = tabsRef.current
      const nextTabIndex = change(currentScrollToTab)
      const nextTabItem = itemsRef.current[nextTabIndex]
      const firstTabItem = itemsRef.current[0]

      if (!(tabs && firstTabItem && nextTabItem)) {
        return
      }

      const maxScrollLeft = tabs.scrollWidth - tabs.clientWidth
      const newScrollLeft = nextTabItem.offsetLeft - firstTabItem.offsetLeft

      tabs.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      })

      // If this was a scroll to the very right, only update the tab index if
      // we've scrolled more than half a tab
      if (newScrollLeft - nextTabItem.offsetWidth / 2 < maxScrollLeft) {
        setCurrentScrollToTab(nextTabIndex)
      }
    }
  }

  return { itemsRef, tabsRef, scrollToNextTab }
}
