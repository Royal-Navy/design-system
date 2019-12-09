import { useState } from 'react'
import orderBy from 'lodash/orderBy'

import { RowProps, SORT_ORDER } from '.'

function getNextSortOrder(
  currentSortOrder: SORT_ORDER.ASCENDING | SORT_ORDER.DESCENDING,
  hasSortFieldChanged: boolean
) {
  if (!currentSortOrder || hasSortFieldChanged) {
    return SORT_ORDER.DESCENDING
  }

  if (currentSortOrder === SORT_ORDER.DESCENDING) {
    return SORT_ORDER.ASCENDING
  }

  return null
}

export function useTableData(data: RowProps[]) {
  const [tableData, setTableData] = useState(data)
  const [sortOrder, setSortOrder] = useState<
    SORT_ORDER.ASCENDING | SORT_ORDER.DESCENDING
  >()
  const [sortField, setSortField] = useState<string>()

  function sortTableData(field: string) {
    const hasSortFieldChanged = field !== sortField
    const order:
      | SORT_ORDER.ASCENDING
      | SORT_ORDER.DESCENDING = getNextSortOrder(sortOrder, hasSortFieldChanged)
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
