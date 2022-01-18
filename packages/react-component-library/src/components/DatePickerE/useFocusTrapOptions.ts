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
      clickOutsideDeactivates: (event) =>
        !isEventTargetDescendantOf(event, clickAllowedElementRefs),
      // Temporary workaround until we update to react-day-picker v8, which has a way
      // to set the initial focus to the selected date (or today if no date selected)
      initialFocus: '[role="button"]',
      onDeactivate: close,
    }),
    [clickAllowedElementRefs, close]
  )
}
