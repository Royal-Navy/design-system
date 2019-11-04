import { useState } from 'react'
import orderBy from 'lodash/orderBy'

import { ASCENDING, DESCENDING } from './constants'
import { RowProps } from './Table'

function getNextSortOrder (currentSortOrder: 'asc' | 'desc', hasSortFieldChanged: boolean) {
  if (!currentSortOrder || hasSortFieldChanged) {
    return DESCENDING
  }

  if (currentSortOrder === DESCENDING) {
    return ASCENDING
  }

  return null
}

export function useTableData(data: RowProps[]) {
  const [tableData, setTableData] = useState(data)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>()
  const [sortField, setSortField] = useState<string>()

  function sortTableData(field: string) {
    const hasSortFieldChanged = field !== sortField
    const order: 'asc' | 'desc' = getNextSortOrder(sortOrder, hasSortFieldChanged)
    const sorted = order ? orderBy(tableData, [field], [order]) : data

    setSortOrder(order)
    setSortField(field)
    setTableData(sorted)
  }

  return {
    tableData,
    sortOrder,
    sortField,
    sortTableData,
  }
}
