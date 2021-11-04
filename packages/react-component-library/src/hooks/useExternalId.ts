import { useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'

/**
 * Return a memoised unique ID as a string.
 *
 * Returns externalId if provided, otherwise generates a random ID.
 */
export function useExternalId(externalId?: string) {
  return useMemo(() => externalId || uuidv4(), [externalId])
}
