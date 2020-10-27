import { useEffect, useRef, useState } from 'react'
import { DateUtils, RangeModifier } from 'react-day-picker'
import { differenceInMinutes, format, setHours } from 'date-fns'

import { DATE_FORMAT } from '../../constants'

export interface StateObject {
  from?: Date
  to?: Date
}

interface TimeState {
  from: string
  to: string
}

function getTime(hasTime: boolean, from: Date, to: Date) {
  if (hasTime && from && to) {
    return {
      from: format(from, 'HH:00'),
      to: format(to, 'HH:00'),
    }
  }

  return { from: null, to: null }
}

export function useDateTime(
  from: Date,
  to: Date,
  isRange: boolean,
  value: string,
  hasTime: boolean,
  onChange: (data: { startDate: Date; endDate: Date }) => void
) {
  const [date, setDate] = useState<StateObject>({ from, to })
  const [time, setTime] = useState<TimeState>(getTime(hasTime, from, to))
  const [enriched, setEnriched] = useState<StateObject>({
    from: null,
    to: null,
  })
  const [formatted, setFormatted] = useState<string>('')
  const didMount = useRef(false)

  function appendDay(day: Date) {
    function getDate() {
      if (isRange) {
        if (date.from && (date.to || date.from > day)) {
          return { from: day }
        }

        return DateUtils.addDayToRange(day, date as RangeModifier)
      }

      return { from: day, to: day }
    }

    setDate(getDate())
  }

  function appendTime(type: string, optionValue: string) {
    const newTime = { ...time, [type]: optionValue }
    if (!isRange) {
      newTime.to = newTime.from
    }

    setTime(newTime)
  }

  function getFormatPattern(timeKey: string) {
    return time[timeKey] ? DATE_FORMAT.SHORT_WITH_TIME : DATE_FORMAT.SHORT
  }

  function formatDates(newEnriched: StateObject) {
    if (
      newEnriched.from &&
      newEnriched.to &&
      differenceInMinutes(newEnriched.to, newEnriched.from) > 0
    ) {
      return `${format(newEnriched.from, getFormatPattern('from'))} - ${format(
        newEnriched.to,
        getFormatPattern('to')
      )}`
    }

    if (newEnriched.from) {
      return format(newEnriched.from, getFormatPattern('from'))
    }

    return ''
  }

  useEffect(() => {
    const newEnriched = {
      from: time.from
        ? setHours(date.from, parseInt(time.from.split(':')[0], 10))
        : date.from,
      to: time.to
        ? setHours(date.to, parseInt(time.to.split(':')[0], 10))
        : date.to,
    }

    setEnriched(newEnriched)
    setFormatted(formatDates(newEnriched))

    if (didMount.current) {
      onChange({
        startDate: newEnriched.from,
        endDate: newEnriched.to,
      })
    } else {
      didMount.current = true
    }
  }, [time, date])

  return {
    appendDay,
    appendTime,
    enriched,
    formatted,
    time,
    hasContent: !!(value || date.from),
    modifiers: { start: date.from, end: date.to },
  }
}
