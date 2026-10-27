import { type Column } from '@tanstack/react-table'

// Relies on DataGrid clearing defaultColumn.size so unsized columns stay auto
export function getColumnWidth<T>(column: Column<T>): number | undefined {
  return column.columnDef.size === undefined ? undefined : column.getSize()
}
