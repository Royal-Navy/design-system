import React, { useEffect, useRef, useState } from 'react'

import { TabProps } from './Tab'

function hasTab(tabIndex: number, itemsRef: Array<HTMLLIElement>) {
  return tabIndex > -1 && tabIndex < itemsRef.length
}

function scrollTo(element: HTMLDivElement, left: number): Promise<void> {
  return new Promise(resolve => {
    function onScroll() {
      if (Math.ceil(element.scrollLeft) >= left) {
        element.removeEventListener('scroll', onScroll)
        resolve()
      }
    }
    element.addEventListener('scroll', onScroll)
    element.scrollTo({
      left,
      behavior: 'smooth',
    })
  })
}

export function useScrollableTabSet(items: React.ReactElement<TabProps>[]) {
  const [currentScrollToTab, setCurrentScrollToTab] = useState(0)
  const itemsRef = useRef<Array<HTMLLIElement>>([])
  const tabsRef = useRef<HTMLDivElement>()

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, items.length)
  }, [items])

  function scrollToNextTab(change: (currentTab: number) => number) {
    return async () => {
      const nextTab = change(currentScrollToTab)

      if (hasTab(nextTab, itemsRef.current)) {
        const currentPosition = tabsRef.current.scrollLeft
        const newPosition =
          itemsRef.current[nextTab].offsetLeft - tabsRef.current.offsetLeft

        await scrollTo(tabsRef.current, newPosition).then(() => {
          const isPositionTheSame = currentPosition === tabsRef.current.scrollLeft

          if (!isPositionTheSame) setCurrentScrollToTab(nextTab)
        })
      }
    }
  }

  return { itemsRef, tabsRef, scrollToNextTab }
}
