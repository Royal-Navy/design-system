import React from 'react'

import { ColumnProps } from '.'
import { useTableData } from './useTableData'

export interface RowProps {
  id: string
}

interface TableProps {
  data: RowProps[]
  children: React.ReactElement<ColumnProps>[]
}

function getKey(prefix: string, id: string) {
  return `${prefix}_${id}`
}

export const Table: React.FC<TableProps> = ({ data, children }) => {
  const { tableData, sortTableData, sortField, sortOrder } = useTableData(data)

  const childrenWithSort = React.Children.map(
    children,
    (child: React.ReactElement<ColumnProps>) =>
      React.cloneElement(child, {
        ...child.props,
        sortOrder: sortField === child.props.field ? sortOrder : null,
        onSortClick: sortTableData,
      })
  )

  return (
    <div className="rn-table__wrapper">
      <table className="rn-table">
        <thead>
          <tr>{childrenWithSort}</tr>
        </thead>
        <tbody>
          {tableData.map((row: RowProps) => (
            <tr key={getKey(`table-row`, row.id)}>
              {children.map(({ props }) => (
                <td key={getKey(`table-cell-${props.field}`, row.id)}>
                  {row[props.field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
