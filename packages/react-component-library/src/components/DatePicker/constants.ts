import { ValueOf } from '../../helpers'

const DATE_VALIDITY = {
  VALID: 'valid',
  INVALID: 'invalid',
  DISABLED: 'disabled',
} as const

type DateValidity = ValueOf<typeof DATE_VALIDITY>

export { DATE_VALIDITY, type DateValidity }
