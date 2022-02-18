import React, { useEffect, useState } from 'react'

export function useValue(value: string | null): {
  committedValue: string | null
  setCommittedValue: React.Dispatch<React.SetStateAction<string | null>>
} {
  const [committedValue, setCommittedValue] = useState(value)

  useEffect(() => {
    setCommittedValue(value)
  }, [value])

  return {
    committedValue,
    setCommittedValue,
  }
}
