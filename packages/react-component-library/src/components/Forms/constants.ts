import { ValueOf } from '../../helpers'

export const COMPONENT_SIZE = {
  FORMS: 'forms',
  SMALL: 'small',
} as const

export type ComponentSizeType = ValueOf<typeof COMPONENT_SIZE>
