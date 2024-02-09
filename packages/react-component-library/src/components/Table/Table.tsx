import React from 'react'

import { TableColumnProps } from '.'
import { useTableData } from './useTableData'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledTableWrapper } from './partials/StyledTableWrapper'
import { StyledTable } from './partials/StyledTable'
import { StyledTableHead } from './partials/StyledTableHead'
import { StyledTableRow } from './partials/StyledTableRow'
import { StyledTableCell } from './partials/StyledTableCell'

export interface RowProps extends Record<string, unknown> {
  id: string
}

export interface TableProps extends ComponentWithClass {
  /**
   * Data to display within the table (JSON).
   */
  data: RowProps[]
  /**
   * Collection of `TableColumn` components to describe column functionality.
   */
  children: React.ReactElement<TableColumnProps>[]
  /**
   * Optional text caption to display above the component.
   */
  caption?: string
  /**
   * Optional, handler invoked when a row is clicked.
   * @param id - the id of the row
   */
  onRowClick?: (id: string) => void
}

function getKey(prefix: string, id: string) {
  return `${prefix}_${id}`
}

export const Table = ({
  data,
  caption,
  children,
  className,
  onRowClick,
  ...rest
}: TableProps) => {
  const { tableData, sortTableData, sortField, sortOrder } = useTableData(data)

  const childrenWithSort = React.Children.map(
    children,
    (child: React.ReactElement<TableColumnProps>) =>
      React.cloneElement(child, {
        ...child.props,
        sortOrder: sortField === child.props.field ? sortOrder : undefined,
        onSortClick: sortTableData,
      })
  )

  const handleRowClick = (id: string) => {
    if (!onRowClick) {
      return
    }

    onRowClick(id)
  }

  return (
    <StyledTableWrapper className={className} data-testid="table-wrapper">
      <StyledTable data-testid="table" role="grid" {...rest}>
        {caption && <caption data-testid="table-caption">{caption}</caption>}
        <StyledTableHead>
          <StyledTableRow>{childrenWithSort}</StyledTableRow>
        </StyledTableHead>
        <tbody>
          {tableData.map((row: RowProps) => (
            <StyledTableRow
              onClick={() => handleRowClick(row.id)}
              key={getKey(`table-row`, row.id)}
              data-testid="table-row"
            >
              {React.Children.map(
                children,
                (child: React.ReactElement<TableColumnProps>) => (
                  <StyledTableCell
                    key={getKey(`table-cell-${child.props.field}`, row.id)}
                  >
                    {row[child.props.field] as React.ReactNode}
                  </StyledTableCell>
                )
              )}
            </StyledTableRow>
          ))}
        </tbody>
      </StyledTable>
    </StyledTableWrapper>
  )
}
