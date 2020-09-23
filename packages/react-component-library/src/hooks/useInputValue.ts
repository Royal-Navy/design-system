import { get } from 'lodash'
import { ChangeEvent, useMemo, useState } from 'react'

export function useInputValue(value: string) {
  const [committedValue, setCommittedValue] = useState<string>()

  useMemo(() => setCommittedValue(value), [value])

  const hasValue = useMemo(() => {
    return !!(committedValue && committedValue.length)
  }, [committedValue])

  function onValueChange<T>(event: ChangeEvent<T>) {
    const newValue = get(event, 'target.value')
    setCommittedValue(newValue)
  }

  return {
    committedValue,
    hasValue,
    onValueChange,
  }
}
