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
  sortable?: boolean
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
  sortable,
  onSortClick,
  sortOrder,
  children,
}) => {
  const className = classNames({ 'is-sortable': sortable })
  const icon = getIcon(sortable, sortOrder)

  function onClick() {
    if (sortable) {
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
