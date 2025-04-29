const TABLE_COLUMN_ALIGNMENT = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
} as const

export { TABLE_COLUMN_ALIGNMENT }

export type TableLayout = 'scroll' | 'autoHeight'
export const TABLE_DEFAULT_LAYOUT = 'autoHeight'
