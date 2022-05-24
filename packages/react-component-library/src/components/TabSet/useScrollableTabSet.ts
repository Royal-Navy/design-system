import React, { useEffect, useRef, useState } from 'react'

import { TabSetItemProps } from './TabSetItem'

export function useScrollableTabSet(
  items: React.ReactElement<TabSetItemProps>[]
) {
  const currentScrollToTab = useRef(0)
  const itemsRef = useRef<Array<HTMLLIElement | null>>([])
  const tabsRef = useRef<HTMLDivElement>(null)
  const [lastTabsWidth, setLastTabsWidth] = useState<number>()

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, items.length)
  }, [items])

  function checkForResize() {
    const tabs = tabsRef.current
    const firstTabItem = itemsRef.current[0]

    if (!tabs || !firstTabItem) {
      return
    }

    setLastTabsWidth(tabs.offsetWidth)

    if (lastTabsWidth === tabs.offsetWidth) {
      return
    }

    const newScrollTabIndex = itemsRef.current.findIndex(
      (tab) =>
        tab &&
        tab.offsetLeft + tab.offsetWidth / 2 - firstTabItem.offsetLeft >=
          tabs.scrollLeft
    )
    currentScrollToTab.current = Math.max(0, newScrollTabIndex)
  }

  function scrollToNextTab(change: (currentTab: number) => number) {
    return () => {
      checkForResize()

      const tabs = tabsRef.current
      const nextTabIndex = change(currentScrollToTab.current)
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
        currentScrollToTab.current = nextTabIndex
      }
    }
  }

  return { itemsRef, tabsRef, scrollToNextTab }
}
