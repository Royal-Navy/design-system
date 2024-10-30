import { useCallback, useState } from 'react'

/**
 * Hook to keep track of the date being hovered over or focused
 * when in range mode.
 */
export function useRangeHoverOrFocusDate(isRange: boolean): {
  rangeHoverOrFocusDate: Date | null
  handleDayFocusOrMouseEnter: (date: Date) => void
  handleDayBlurOrMouseLeave: () => void
} {
  const [rangeHoverOrFocusDate, setRangeHoverOrFocusDate] =
    useState<Date | null>(null)

  const handleDayFocusOrMouseEnter = useCallback(
    (date: Date) => {
      if (isRange) {
        setRangeHoverOrFocusDate(date)
      }
    },
    [isRange]
  )

  const handleDayBlurOrMouseLeave = useCallback(() => {
    if (isRange) {
      setRangeHoverOrFocusDate(null)
    }
  }, [isRange])

  return {
    rangeHoverOrFocusDate,
    handleDayFocusOrMouseEnter,
    handleDayBlurOrMouseLeave,
  }
}
