import { useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'

/**
 * Return a memoised unique ID as a string.
 *
 * Returns externalId if provided, otherwise generates a random ID
 * (with an optional prefix).
 */
export function useExternalId(prefix?: string, externalId?: string): string {
  return useMemo(() => {
    if (externalId) {
      return externalId
    }

    if (prefix) {
      return `${prefix}-${uuidv4()}`
    }

    return uuidv4()
  }, [externalId, prefix])
}
