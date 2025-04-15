import React, { useCallback, useEffect, useState } from 'react'
import { fn } from '@storybook/test'
import { Meta, StoryFn } from '@storybook/react'
import { faker } from '@faker-js/faker'
import type { SortingState, ColumnSort } from '@tanstack/react-table'

import { DataGrid } from '.'

type Order = {
  id: number
  productName: string
  quantity: number
  price: string
  subRows?: Order[]
}

const columns = [
  {
    header: 'Product Name',
    accessorKey: 'productName',
    enableSorting: true,
    enableColumnFilter: true,
  },
  {
    header: 'Qty',
    accessorKey: 'quantity',
    enableSorting: true,
    enableColumnFilter: true,
    filterFn: 'equalsString',
  },
  {
    header: 'Price',
    accessorKey: 'price',
    enableSorting: true,
    enableColumnFilter: true,
  },
]

const generateRandomData = (length: number): Order[] => {
  return Array.from({ length }, (_, i) => {
    return {
      id: i + 1,
      productName: faker.commerce.productName(),
      quantity: faker.number.int({ min: 1, max: 100 }),
      price: `£${faker.commerce.price()}`,
    }
  })
}

export default {
  component: DataGrid,
  subcomponents: {},
  title: 'Components/Data Grid Server Side',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'This component is built on top of the headless `@tanstack/react-table` library. You can find the documentation for the library [here](https://tanstack.com/table/v8/docs/introduction).',
      },
    },
  },
} as Meta<typeof DataGrid>

const rowData = generateRandomData(1000)

function useFetchData({
  pagination: { limit = 5, skip = 0 } = {},
  sorting = []
}: {
  pagination?: { limit?: number; skip?: number }
  sorting?: SortingState
}) {
  const [data, setData] = useState<Order[]>([])
  const [count, setCount] = useState<number>(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      const sortedData = [...rowData]
      
      if (sorting.length > 0) {
        sortedData.sort((a, b) => {
          const sort = sorting[0] as ColumnSort
          const aValue = a[sort.id as keyof Order] ?? ''
          const bValue = b[sort.id as keyof Order] ?? ''
          
          if (sort.desc) {
            return aValue > bValue ? -1 : 1
          }
          return aValue < bValue ? -1 : 1
        })
      }

      setData(sortedData.slice(skip, skip + limit))
      setCount(rowData.length)
      setLoading(false)
    }, 1000)
  }, [limit, skip, sorting])

  return { data, count, loading }
}

export const Default: StoryFn<typeof DataGrid> = (props) => {
  const [skip, setSkip] = useState<number>(0)
  const [sorting, setSorting] = useState<SortingState>([])

  const { data, count } = useFetchData({ pagination: { skip }, sorting })

  const handleSortingChange = useCallback((newSorting: SortingState) => {
    console.log('newSorting', newSorting)
    setSorting(newSorting)
  }, [])

  const handlePageChange = useCallback(
    (currentPage: number) => {
      setSkip(currentPage * props.pageSize!)
    },
    [props.pageSize]
  )

  return (
    <DataGrid
      debugTable
      manualPagination
      manualSorting
      rowCount={count}
      sorting={sorting}
      onPageChange={handlePageChange}
      onSortingChange={(updaterOrValue) => {
        const newSorting =
          typeof updaterOrValue === 'function'
            ? updaterOrValue(sorting)
            : updaterOrValue

        handleSortingChange(newSorting)
      }}
      {...props}
      data={data}
    />
  )
}

Default.args = {
  columns,
  pageSize: 5,
  isFullWidth: false,
  onSelectedRowsChange: fn(),
  onExpandedChange: fn(),
  onColumnFiltersChange: fn(),
}
