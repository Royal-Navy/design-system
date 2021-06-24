import { get } from 'lodash'
import { ChangeEvent, useMemo, useState } from 'react'

const EMPTY_STRING = ''

export function useInputValue(value: string) {
  const [committedValue, setCommittedValue] = useState<string>(EMPTY_STRING)

  useMemo(() => setCommittedValue(value || EMPTY_STRING), [value])

  const hasValue = useMemo(() => {
    return !!(committedValue && committedValue.length)
  }, [committedValue])

  function onValueChange<T>(event: ChangeEvent<T>) {
    const newValue = get(event, 'target.value')
    setCommittedValue(newValue || EMPTY_STRING)
  }

  return {
    committedValue,
    hasValue,
    onValueChange,
  }
}
