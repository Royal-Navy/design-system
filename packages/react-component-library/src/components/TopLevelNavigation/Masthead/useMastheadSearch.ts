import React, { useCallback, useRef, useState } from 'react'

export function useMastheadSearch(initialIsOpen: boolean) {
  const [showSearch, setShowSearch] = useState(initialIsOpen)
  const [containerWidth, setContainerWidth] = useState(0)
  const mastheadRefObject = useRef<HTMLDivElement | null>(null)

  const mastheadRef = useCallback((element) => {
    mastheadRefObject.current = element

    if (element) {
      setContainerWidth(element.offsetWidth)
    }
  }, [])

  function toggleSearch(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    if (!mastheadRefObject.current) {
      return
    }

    event.currentTarget.blur()
    const newShowSearch = !showSearch

    // if opening the searchbar then get the container width and set that
    // as the width of the searchbar so that it does not spill
    // over to other parts of the page, such as the sidebar.
    if (newShowSearch) {
      setContainerWidth(mastheadRefObject.current.offsetWidth)
    }

    setShowSearch(!showSearch)
  }

  return {
    containerWidth,
    mastheadRef,
    setShowSearch,
    showSearch,
    toggleSearch,
  }
}
