export const COMPONENT_SIZE = {
  FORMS: 'forms',
  SMALL: 'small',
} as const

export type ComponentSizeType =
  | typeof COMPONENT_SIZE.SMALL
  | typeof COMPONENT_SIZE.FORMS
