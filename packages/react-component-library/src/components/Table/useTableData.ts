import { useEffect, useState } from 'react'
import orderBy from 'lodash/orderBy'

import { RowProps, SortOrderType, TABLE_SORT_ORDER } from '.'

function getNextSortOrder(
  currentSortOrder: SortOrderType | null,
  hasSortFieldChanged: boolean
) {
  if (!currentSortOrder || hasSortFieldChanged) {
    return TABLE_SORT_ORDER.DESCENDING
  }

  if (currentSortOrder === TABLE_SORT_ORDER.DESCENDING) {
    return TABLE_SORT_ORDER.ASCENDING
  }

  return null
}

export function useTableData(data: RowProps[]) {
  const [tableData, setTableData] = useState(data)
  const [sortOrder, setSortOrder] = useState<SortOrderType | null>(null)
  const [sortField, setSortField] = useState<string | null>(null)

  function sortTableData(field: string) {
    const hasSortFieldChanged = field !== sortField
    const order = getNextSortOrder(sortOrder, hasSortFieldChanged)
    const sorted = order ? orderBy(tableData, [field], [order]) : data

    setSortOrder(order)
    setSortField(field)
    setTableData(sorted)
  }

  useEffect(() => {
    setTableData(data)
  }, [data])

  return {
    tableData,
    sortOrder,
    sortField,
    sortTableData,
  }
}
