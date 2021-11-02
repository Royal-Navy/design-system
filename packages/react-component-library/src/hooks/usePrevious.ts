import { useEffect, useRef } from 'react'

export function usePrevious<Value>(value: Value) {
  const ref = useRef<Value | undefined>()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
