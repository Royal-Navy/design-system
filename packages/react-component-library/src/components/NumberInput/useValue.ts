import React, { useEffect, useMemo, useState } from 'react'
import isNil from 'lodash/isNil'

function isWithinRange(max: number, min: number, newValue: number) {
  const isNotBelowMin = isNil(min) || newValue >= min
  const isNotAboveMax = isNil(max) || newValue <= max

  return isNotBelowMin && isNotAboveMax
}

function transformEvent(name: string, newValue: number) {
  return {
    target: {
      name,
      value: newValue,
    },
  }
}

export function useValue(value: number) {
  const [committedValue, setCommittedValue] = useState(value)
  const [nextValue, setNextValue] = useState<number>()

  const displayValue = useMemo(() => {
    return nextValue || committedValue
  }, [committedValue, nextValue])

  useEffect(() => {
    setCommittedValue(value)
  }, [value])

  function setCommittedValueIfWithinRange(
    max: number,
    min: number,
    name: string,
    onChange: (event: any) => void
  ) {
    return (event: React.FormEvent, newValue: number) => {
      if (isWithinRange(max, min, newValue)) {
        setCommittedValue(newValue)
        onChange(transformEvent(name, newValue))
      }
    }
  }

  return {
    displayValue,
    setNextValue,
    setCommittedValueIfWithinRange,
  }
}
