import React from 'react'

export interface ColumnProps {
  field: string
  children: string
}

export const Column: React.FC<ColumnProps> = ({ children }) => (
  <th>{children}</th>
)
