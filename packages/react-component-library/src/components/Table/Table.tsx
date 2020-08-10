import React from 'react'

import { TableColumnProps } from '.'
import { useTableData } from './useTableData'

export interface RowProps {
  id: string
}

interface TableProps {
  data: RowProps[]
  children: React.ReactElement<TableColumnProps>[]
  caption?: string
}

function getKey(prefix: string, id: string) {
  return `${prefix}_${id}`
}

export const Table: React.FC<TableProps> = ({ data, children, caption }) => {
  const { tableData, sortTableData, sortField, sortOrder } = useTableData(data)

  const childrenWithSort = React.Children.map(
    children,
    (child: React.ReactElement<TableColumnProps>) =>
      React.cloneElement(child, {
        ...child.props,
        sortOrder: sortField === child.props.field ? sortOrder : null,
        onSortClick: sortTableData,
      })
  )

  return (
    <div className="rn-table__wrapper" data-testid="table-wrapper">
      <table className="rn-table" data-testid="table" role="grid">
        {caption && <caption data-testid="table-caption">{caption}</caption>}
        <thead>
          <tr>{childrenWithSort}</tr>
        </thead>
        <tbody>
          {tableData.map((row: RowProps) => (
            <tr key={getKey(`table-row`, row.id)} data-testid="table-row">
              {React.Children.map(
                children,
                (child: React.ReactElement<TableColumnProps>) => (
                  <td key={getKey(`table-cell-${child.props.field}`, row.id)}>
                    {row[child.props.field]}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
