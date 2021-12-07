import { useCallback, useState } from 'react'

/**
 * Hook to keep track of the date being hovered over or focused
 * when in range mode.
 *
 * @todo Add handleDayBlur after upgrading to react-day-picker v8.
 */
export function useRangeHoverOrFocusDate(isRange: boolean): {
  rangeHoverOrFocusDate: Date
  handleDayFocus: (date: Date) => void
  handleDayMouseEnter: (date: Date) => void
  handleDayMouseLeave: () => void
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

  const handleDayMouseLeave = useCallback(() => {
    if (isRange) {
      setRangeHoverOrFocusDate(null)
    }
  }, [isRange])

  return {
    rangeHoverOrFocusDate,
    handleDayFocus: handleDayFocusOrMouseEnter,
    handleDayMouseEnter: handleDayFocusOrMouseEnter,
    handleDayMouseLeave,
  }
}
