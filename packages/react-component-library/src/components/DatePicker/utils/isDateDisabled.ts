import {
  isAfter,
  isBefore,
  isEqual,
  isWithinInterval,
  startOfDay,
} from 'date-fns'
import { type Modifier } from 'react-day-picker'

export const isDateDisabled = (
  date: Date,
  disabledDays: Modifier | Modifier[]
) => {
  const disabledDaysArray = Array.isArray(disabledDays)
    ? disabledDays
    : [disabledDays]

  return disabledDaysArray.some((disabledDay) => {
    if (!disabledDay) {
      return false
    }

    const isExactMatch =
      disabledDay instanceof Date && isEqual(date, startOfDay(disabledDay))

    const isAfterDate =
      'after' in disabledDay && isAfter(date, startOfDay(disabledDay.after))

    const isBeforeDate =
      'before' in disabledDay && isBefore(date, startOfDay(disabledDay.before))

    const isWithinRange =
      'from' in disabledDay &&
      'to' in disabledDay &&
      isWithinInterval(date, {
        start: startOfDay(disabledDay.from!),
        end: startOfDay(disabledDay.to!),
      })

    const isDayOfWeek =
      'daysOfWeek' in disabledDay &&
      disabledDay.daysOfWeek.includes(date.getDay())

    return (
      isExactMatch ||
      isAfterDate ||
      isBeforeDate ||
      isWithinRange ||
      isDayOfWeek
    )
  })
}
