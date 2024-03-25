import React from 'react'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import type {
  ColumnDef,
  Cell,
  Row,
  Header,
  HeaderGroup,
} from '@tanstack/react-table'

import { StyledDataGrid } from './partials/StyledDataGrid'
import { StyledTable } from './partials/StyledTable'
import { StyledHead } from './partials/StyledHead'
import { StyledBody } from './partials/StyledBody'
import { StyledCell } from './partials/StyledCell'
import { StyledRow } from './partials/StyledRow'

export interface DataGridProps<T extends object> {
  data: T[]
  columns: ColumnDef<T>[]
}

export const DataGrid = <T extends object>(props: DataGridProps<T>) => {
  const { data, columns } = props

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <StyledDataGrid>
      <StyledTable>
        <StyledHead>
          {table.getHeaderGroups().map((headerGroup: HeaderGroup<T>) => (
            <StyledRow key={headerGroup.id}>
              {headerGroup.headers.map((header: Header<T, any>) => (
                <StyledCell as="th" key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </StyledCell>
              ))}
            </StyledRow>
          ))}
        </StyledHead>
        <StyledBody>
          {table.getRowModel().rows.map((row: Row<T>) => (
            <StyledRow key={row.id}>
              {row.getVisibleCells().map((cell: Cell<T, any>) => (
                <StyledCell as="td" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </StyledCell>
              ))}
            </StyledRow>
          ))}
        </StyledBody>
      </StyledTable>
    </StyledDataGrid>
  )
}
