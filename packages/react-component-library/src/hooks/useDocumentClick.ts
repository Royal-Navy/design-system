import React, { useEffect } from 'react'
import { find } from 'lodash'

// workaround for undefined error in typescript, node.current might not be defined
const NODE_CURRENT = {
  contains: (target: any): boolean => target === null,
}

/**
 * Handle document click
 * @param nodes - if the click is inside a node then document click event will
 * not be raised
 *
 * @param onDocumentClick - if the click is outside of nodes then the callback
 * will be raised
 *
 * @param deps - monitored for change when assigning the document click
 */
export function useDocumentClick(
  nodes:
    | React.MutableRefObject<undefined>
    | React.MutableRefObject<undefined>[],
  onDocumentClick: (event: Event) => void,
  deps?: ReadonlyArray<any>
) {
  function handleDocumentClick(event: Event) {
    const nonClickableRefs = Array.isArray(nodes) ? nodes : [nodes]

    const nonClickableRef = find(
      nonClickableRefs,
      (node: React.MutableRefObject<undefined>) => {
        const current = node.current || NODE_CURRENT
        return current.contains(event.target)
      }
    )

    if (!nonClickableRef) {
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
