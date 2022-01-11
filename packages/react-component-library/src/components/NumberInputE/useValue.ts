import React, { useEffect, useState } from 'react'

export function useValue(value: string): {
  committedValue: string
  setCommittedValue: React.Dispatch<React.SetStateAction<string>>
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
