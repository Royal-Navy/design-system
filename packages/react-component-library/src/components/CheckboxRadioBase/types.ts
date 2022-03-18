import { ValueOf } from '../../helpers'

export const CHECKBOX_RADIO_VARIANT = {
  DEFAULT: 'default',
  NO_CONTAINER: 'no-container',
} as const

export type CheckboxRadioVariantType = ValueOf<typeof CHECKBOX_RADIO_VARIANT>
