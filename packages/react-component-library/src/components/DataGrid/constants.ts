import { ValueOf } from '../../helpers'

export const TABLE_COLUMN_ALIGNMENT = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
} as const

export const TABLE_LAYOUT = {
  SCROLL: 'scroll',
  AUTO_HEIGHT: 'autoHeight',
} as const

export type TableLayout = ValueOf<typeof TABLE_LAYOUT>
export const TABLE_DEFAULT_LAYOUT: TableLayout = TABLE_LAYOUT.AUTO_HEIGHT
