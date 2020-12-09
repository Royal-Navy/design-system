import React, { useEffect } from 'react'

// workaround for undefined error in typescript, node.current might not be defined
const NODE_CURRENT = {
  contains: (target: any): boolean => target === null,
}

export function useDocumentClick(
  node: React.MutableRefObject<undefined>,
  onDocumentClick: (event: Event) => void,
  deps?: ReadonlyArray<any>
) {
  function handleDocumentClick(event: Event) {
    const current = node.current || NODE_CURRENT

    if (!current.contains(event.target)) {
      onDocumentClick(event)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleDocumentClick)

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick)
    }
  }, deps)
}
