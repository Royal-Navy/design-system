import React from 'react'
import classNames from 'classnames'
import get from 'lodash/get'
import {
  IconSortAscending,
  IconSortDescending,
  IconSortUnsorted,
} from '@royalnavy/icon-library'

import { SORT_ORDER } from './constants'

export interface ColumnProps {
  field: string
  isSortable?: boolean
  onSortClick?: (field: string) => void
  sortOrder?: string
  children: string
}

const SORT_ORDER_ICONS_MAP = {
  [SORT_ORDER.ASCENDING]: <IconSortAscending data-testid="ascending" />,
  [SORT_ORDER.DESCENDING]: <IconSortDescending data-testid="descending" />,
}

function getIcon(sortable: boolean, sortOrder: string) {
  if (!sortable) {
    return null
  }

  return (
    get(SORT_ORDER_ICONS_MAP, sortOrder) || (
      <IconSortUnsorted data-testid="unsorted" />
    )
  )
}

export const Column: React.FC<ColumnProps> = ({
  field,
  isSortable,
  onSortClick,
  sortOrder,
  children,
}) => {
  const className = classNames({ 'is-sortable': isSortable })
  const icon = getIcon(isSortable, sortOrder)

  function onClick() {
    if (isSortable) {
      onSortClick(field)
    }
  }

  return (
    <th className={className} onClick={onClick}>
      {children}
      {icon}
    </th>
  )
}
