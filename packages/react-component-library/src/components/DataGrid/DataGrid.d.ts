import '@tanstack/react-table'

import { TABLE_COLUMN_ALIGNMENT } from './constants'
import { type ValueOf } from '../../helpers'

declare module '@tanstack/react-table' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    align?: ValueOf<typeof TABLE_COLUMN_ALIGNMENT>
    fullSpanColumn?: boolean
  }
}
