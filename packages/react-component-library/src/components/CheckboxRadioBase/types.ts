export const CHECKBOX_RADIO_VARIANT = {
  DEFAULT: 'default',
  NO_CONTAINER: 'no-container',
} as const

export type CheckboxRadioVariantType =
  typeof CHECKBOX_RADIO_VARIANT[keyof typeof CHECKBOX_RADIO_VARIANT]
