import React from 'react'
import classNames from 'classnames'

export interface ColumnProps {
  field: string
  sortable?: boolean
  onSortClick?: (field: string) => void
  sortOrder?: string
  children: string
}

export const Column: React.FC<ColumnProps> = ({
  field,
  sortable,
  onSortClick,
  children,
}) => {
<<<<<<< HEAD
  const className = classNames({ sortable })
=======
  const className = classNames({ 'is-sortable': sortable })
  const icon = getIcon(sortable, sortOrder)
>>>>>>> e5644b30... fixup! Add ability to sort table data

  function onClick() {
    if (sortable) {
      onSortClick(field)
    }
  }

  return (
    <th className={className} onClick={onClick}>
      {children}
    </th>
  )
}
