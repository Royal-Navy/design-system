import { useEffect, useState } from 'react'

export function useValue(value: number) {
  const [committedValue, setCommittedValue] = useState(value)

  useEffect(() => {
    setCommittedValue(value)
  }, [value])

  return {
    committedValue,
    setCommittedValue,
  }
}
