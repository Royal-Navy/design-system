import React, { useRef, useState } from 'react'

export function useMastheadSearch() {
  const [showSearch, setShowSearch] = useState(false)
  const [containerWidth, setContainerWidth] = useState(0)
  const mastheadContainerRef = useRef<HTMLDivElement>(null)

  function toggleSearch(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    if (!mastheadContainerRef.current) {
      return
    }

    event.currentTarget.blur()
    const newShowSearch = !showSearch

    // if opening the searchbar then get the container width and set that
    // as the width of the searchbar so that it does not spill
    // over to other parts of the page, such as the sidebar.
    if (newShowSearch) {
      setContainerWidth(mastheadContainerRef.current.offsetWidth)
    }

    setShowSearch(!showSearch)
  }

  return {
    containerWidth,
    mastheadContainerRef,
    setShowSearch,
    showSearch,
    toggleSearch,
  }
}
