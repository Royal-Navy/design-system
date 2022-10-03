import React, { useCallback, useEffect } from 'react'
import { find } from 'lodash'

/**
 * Handle document click
 * @param nodes - if the click is inside a node then document click event will
 * not be raised
 *
 * @param onDocumentClick - if the click is outside of nodes then the callback
 * will be raised. Use useCallback for this to avoid the event listener being
 * reattached unnecessarily
 *
 * @param isEnabled - whether the on click handler is enabled. Can be set
 * to false if the hook needs to be enabled or disabled dynamically
 */
export function useDocumentClick(
  nodes: React.RefObject<Element | null> | React.RefObject<Element | null>[],
  onDocumentClick: (event: Event) => void,
  isEnabled = true
) {
  const handleDocumentClick = useCallback(
    (event: Event) => {
      const nonClickableRefs = Array.isArray(nodes) ? nodes : [nodes]

      const nonClickableRef = find(
        nonClickableRefs,
        (node: React.RefObject<Element>) => {
          return node.current?.contains(event.target as Element)
        }
      )

      if (!nonClickableRef) {
        onDocumentClick(event)
      }
    },
    [nodes, onDocumentClick]
  )

  useEffect(() => {
    if (!isEnabled) {
      return undefined
    }

    document.addEventListener('mousedown', handleDocumentClick)

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick)
    }
  }, [handleDocumentClick, isEnabled])
}
