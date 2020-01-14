import { useEffect, useState } from 'react'
import orderBy from 'lodash/orderBy'

import { RowProps, TABLE_SORT_ORDER } from '.'

type sortType =
  | typeof TABLE_SORT_ORDER.ASCENDING
  | typeof TABLE_SORT_ORDER.DESCENDING

function getNextSortOrder(
  currentSortOrder: sortType,
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
  const [sortOrder, setSortOrder] = useState<sortType>()
  const [sortField, setSortField] = useState<string>()

  function sortTableData(field: string) {
    const hasSortFieldChanged = field !== sortField
    const order: sortType = getNextSortOrder(sortOrder, hasSortFieldChanged)
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
