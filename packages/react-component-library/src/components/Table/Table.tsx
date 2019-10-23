import React from 'react'

import { ColumnProps } from './Column'

interface RowProps {
  id: string
}

interface TableProps {
  data: RowProps[]
  children: React.ReactElement<ColumnProps>[]
}

function getKey(prefix: string, id: string) {
  return `${prefix}_${id}`
}

export const Table: React.FC<TableProps> = ({ data, children }) => (
  <div className="rn-table__wrapper">
    <table className="rn-table">
      <thead>
        <tr>{children}</tr>
      </thead>
      <tbody>
        {data.map((row: RowProps) => (
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
