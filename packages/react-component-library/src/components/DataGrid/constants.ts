import { ValueOf } from '../../helpers'

/**
 * Alignment options for table columns.
 */
export const TABLE_COLUMN_ALIGNMENT = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
} as const

/**
 * Layout options for the DataGrid.
 */
export const TABLE_LAYOUT = {
  SCROLL: 'scroll',
  AUTO_HEIGHT: 'autoHeight',
} as const

/**
 * Type representing the possible layout values for the DataGrid.
 */
export type TableLayout = ValueOf<typeof TABLE_LAYOUT>
/**
 * Default layout type for the DataGrid (autoHeight).
 */
export const TABLE_DEFAULT_LAYOUT: TableLayout = TABLE_LAYOUT.AUTO_HEIGHT

/**
 * Pagination styles for the DataGrid footer.
 */
export const DATA_GRID_PAGINATION_VARIANT = {
  LEGACY: 'legacy',
  STANDARD: 'standard',
} as const

/**
 * Type representing the possible pagination variants for the DataGrid.
 */
export type DataGridPaginationVariant = ValueOf<
  typeof DATA_GRID_PAGINATION_VARIANT
>
