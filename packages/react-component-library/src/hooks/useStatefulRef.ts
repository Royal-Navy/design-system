import { useState } from 'react'

/**
 * Small wrapper around useState for keeping a ref value in the state.
 *
 * @example
 * const [element, setElement] = useStatefulRef()
 * <input ref={setElement} />
 */
export function useStatefulRef<ValueType = Element>() {
  return useState<ValueType | null>(null)
}
