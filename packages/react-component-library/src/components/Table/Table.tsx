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
}

function getKey(prefix: string, id: string) {
  return `${prefix}_${id}`
}

export const Table: React.FC<TableProps> = ({
  data,
  caption,
  children,
  className,
  ...rest
}) => {
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
              key={getKey(`table-row`, row.id)}
              data-testid="table-row"
            >
              {React.Children.map(
                children,
                (child: React.ReactElement<TableColumnProps>) => (
                  <StyledTableCell
                    key={getKey(`table-cell-${child.props.field}`, row.id)}
                  >
                    {row[child.props.field]}
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
