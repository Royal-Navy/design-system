import { Options as FocusTrapOptions } from 'focus-trap'
import React, { useMemo } from 'react'

function isEventTargetDescendantOf(
  event: Event,
  refs: React.RefObject<Element>[]
): boolean {
  return (
    event.target instanceof Node &&
    refs.some((ref) => ref.current?.contains(event.target as Node))
  )
}

export function useFocusTrapOptions(
  close: () => void,
  clickAllowedElementRefs: React.RefObject<Element>[]
): FocusTrapOptions {
  return useMemo(
    () => ({
      allowOutsideClick: (event) =>
        isEventTargetDescendantOf(event, clickAllowedElementRefs),
      clickOutsideDeactivates: (event) => {
        const shouldDeactivate = !isEventTargetDescendantOf(
          event,
          clickAllowedElementRefs
        )
        if (shouldDeactivate) {
          close()
        }
        return shouldDeactivate
      },
      escapeDeactivates: () => {
        close()
        return true
      },
      initialFocus: false,
    }),
    [clickAllowedElementRefs, close]
  )
}
