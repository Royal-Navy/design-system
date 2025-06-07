import React, { useCallback, useState } from 'react'
import styled, { css } from 'styled-components'
import { spacing } from '@royalnavy/design-tokens'
import { fn } from '@storybook/test'
import { Meta, StoryFn } from '@storybook/react'
import type {
  ColumnDef,
  SortingState,
  PaginationState,
} from '@tanstack/react-table'

import { storyAccessibilityConfig } from '../../a11y/storyAccessibilityConfig'
import { DataGrid, TABLE_COLUMN_ALIGNMENT } from '.'
import { Badge } from '../Badge'
import { Button } from '../Button'
import { DEFAULT_ROWS_PER_PAGE } from '../RowsPerPage/RowsPerPage'

type Order = {
  id: number
  productName: string
  quantity: number
  price: string
  subRows?: Order[]
}

const disableEmptyTableHeaderRule = {
  a11y: {
    config: {
      rules: storyAccessibilityConfig['Data Grid'],
    },
  },
}

// const generateRandomData = (length: number): Order[] => {
//   const data: Order[] = Array.from({ length }, (_, i) => {
//     return {
//       id: i + 1,
//       productName: faker.commerce.productName(),
//       quantity: faker.number.int({ min: 1, max: 100 }),
//       price: `£${faker.commerce.price()}`,
//     }
//   })

//   return data
// }

// Static copy from Faker (play nice with Chromatic snapshots)
const data: Order[] = [
  {
    id: 1,
    productName: 'Unbranded Steel Sausages',
    quantity: 59,
    price: '£782.00',
  },
  {
    id: 2,
    productName: 'Modern Plastic Sausages',
    quantity: 38,
    price: '£175.00',
  },
  {
    id: 3,
    productName: 'Oriental Bronze Tuna',
    quantity: 34,
    price: '£72.00',
  },
  {
    id: 4,
    productName: 'Rustic Steel Bike',
    quantity: 59,
    price: '£693.00',
  },
  {
    id: 5,
    productName: 'Electronic Frozen Chips',
    quantity: 11,
    price: '£837.00',
  },
  {
    id: 6,
    productName: 'Small Bronze Computer',
    quantity: 111,
    price: '£694.00',
  },
  {
    id: 7,
    productName: 'Licensed Steel Hat',
    quantity: 84,
    price: '£415.00',
  },
  {
    id: 8,
    productName: 'Intelligent Steel Ball',
    quantity: 14,
    price: '£441.00',
  },
  {
    id: 9,
    productName: 'Licensed Concrete Bacon',
    quantity: 68,
    price: '£337.00',
  },
  {
    id: 10,
    productName: 'Practical Wooden Ball',
    quantity: 10,
    price: '£673.00',
  },
  {
    id: 11,
    productName: 'Handcrafted Wooden Table',
    quantity: 25,
    price: '£512.00',
  },
  {
    id: 12,
    productName: 'Ergonomic Cotton Chair',
    quantity: 47,
    price: '£299.00',
  },
  {
    id: 13,
    productName: 'Fantastic Granite Shoes',
    quantity: 19,
    price: '£120.00',
  },
  {
    id: 14,
    productName: 'Incredible Plastic Gloves',
    quantity: 73,
    price: '£89.00',
  },
  {
    id: 15,
    productName: 'Tasty Fresh Tuna',
    quantity: 56,
    price: '£230.00',
  },
  {
    id: 16,
    productName: 'Awesome Rubber Keyboard',
    quantity: 33,
    price: '£410.00',
  },
  {
    id: 17,
    productName: 'Refined Concrete Soap',
    quantity: 22,
    price: '£58.00',
  },
  {
    id: 18,
    productName: 'Sleek Steel Mouse',
    quantity: 41,
    price: '£199.00',
  },
  {
    id: 19,
    productName: 'Gorgeous Wooden Pizza',
    quantity: 15,
    price: '£320.00',
  },
  {
    id: 20,
    productName: 'Incredible Fresh Salad',
    quantity: 60,
    price: '£150.00',
  },
]

const subRowsData = [
  {
    id: 1,
    productName: 'Unbranded Steel Sausages',
    quantity: 59,
    price: '£782.00',
    subRows: [
      {
        id: 2,
        productName: 'Modern Plastic Sausages',
        quantity: 38,
        price: '£175.00',
      },
      {
        id: 3,
        productName: 'Oriental Bronze Tuna',
        quantity: 34,
        price: '£72.00',
      },
    ],
  },
  {
    id: 4,
    productName: 'Rustic Steel Bike',
    quantity: 59,
    price: '£693.00',
    subRows: [
      {
        id: 5,
        productName: 'Electronic Frozen Chips',
        quantity: 79,
        price: '£837.00',
      },
      {
        id: 6,
        productName: 'Small Bronze Computer',
        quantity: 86,
        price: '£694.00',
      },
    ],
  },
  {
    id: 8,
    productName: 'Intelligent Steel Ball',
    quantity: 14,
    price: '£111.00',
  },
  {
    id: 9,
    productName: 'Licensed Concrete Bacon',
    quantity: 68,
    price: '£337.00',
  },
  {
    id: 10,
    productName: 'Practical Wooden Ball',
    quantity: 10,
    price: '£673.00',
  },
]

const columns = [
  {
    header: 'Product Name',
    accessorKey: 'productName',
    enableSorting: false,
    enableColumnFilter: false,
  },
  {
    header: 'Qty',
    accessorKey: 'quantity',
    enableSorting: false,
    enableColumnFilter: false,
    filterFn: 'equalsString',
  },
  {
    header: 'Price',
    accessorKey: 'price',
    enableSorting: false,
    enableColumnFilter: false,
  },
]

const Wrapper = styled.div<{ $hasScrolling?: boolean }>`
  ${({ $hasScrolling }) =>
    $hasScrolling &&
    css`
      height: 400px;
    `};

  padding: ${spacing('4')};
`

export default {
  component: DataGrid,
  subcomponents: {},
  title: 'Components/Data Grid',
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
  argTypes: {
    columns: {
      control: false,
    },
    data: { control: false },
    layout: {
      control: 'select',
      options: ['scroll', 'autoHeight'],
    },
  },
} as Meta<typeof DataGrid>

export const Default: StoryFn<typeof DataGrid> = (props) => {
  return (
    <Wrapper $hasScrolling={props.layout === 'scroll'}>
      <DataGrid {...props} />
    </Wrapper>
  )
}

Default.args = {
  columns,
  data,
  isFullWidth: true,
  onSelectedRowsChange: fn(),
  onExpandedChange: fn(),
  onColumnFiltersChange: fn(),
}

export const ScrollingContent: StoryFn<typeof DataGrid> = (props) => {
  return (
    <Wrapper $hasScrolling>
      <DataGrid {...props} />
    </Wrapper>
  )
}

ScrollingContent.args = {
  ...Default.args,
  layout: 'scroll',
}

const columnsWithSorting = columns.map((item) => ({
  ...item,
  enableSorting: true,
}))

export const Sorting: StoryFn<typeof DataGrid> = (props) => {
  return (
    <Wrapper>
      <DataGrid {...props} />
    </Wrapper>
  )
}

Sorting.args = {
  columns: columnsWithSorting,
  data,
  isFullWidth: true,
  onSelectedRowsChange: fn(),
  onExpandedChange: fn(),
  onColumnFiltersChange: fn(),
}

Sorting.parameters = {
  docs: {
    description: {
      story:
        'https://tanstack.com/table/v8/docs/api/features/sorting#sortingfn',
    },
  },
}

const arbitraryData = [
  ...data,
  {
    id: 11,
    productName:
      'Long product name: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    quantity: 10,
    price: '£673.00',
  },
]

const StyledCell = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const columnsWithArbitraryContent = columns.map((item) => {
  if (item.accessorKey !== 'productName') {
    return {
      ...item,
      cell: (info) => {
        const value = info.getValue() as string
        return <Badge>{value}</Badge>
      },
    }
  }

  return {
    ...item,
    cell: (info) => {
      const value = info.getValue() as string

      return <StyledCell>{value}</StyledCell>
    },
  }
})

export const ArbitraryCellContent: StoryFn<typeof DataGrid> = (props) => {
  return (
    <Wrapper>
      <DataGrid {...props} />
    </Wrapper>
  )
}

ArbitraryCellContent.storyName = 'Arbitrary cell content'
ArbitraryCellContent.args = {
  columns: columnsWithArbitraryContent,
  data: arbitraryData,
  isFullWidth: true,
  onSelectedRowsChange: fn(),
  onExpandedChange: fn(),
  onColumnFiltersChange: fn(),
}

ArbitraryCellContent.parameters = {
  docs: {
    description: {
      story:
        'https://tanstack.com/table/v8/docs/guide/column-defs#cell-formatting',
    },
  },
}

export const RowSelection: StoryFn<typeof DataGrid> = (props) => {
  return (
    <Wrapper>
      <DataGrid {...props} enableRowSelection />
    </Wrapper>
  )
}

RowSelection.storyName = 'Row selection'
RowSelection.args = {
  columns,
  data,
  initialRowSelection: {
    1: true,
    3: true,
    4: true,
    5: true,
  },
  isFullWidth: true,
  onSelectedRowsChange: fn(),
  onExpandedChange: fn(),
  onColumnFiltersChange: fn(),
}

RowSelection.parameters = {
  docs: {
    description: {
      story:
        'https://tanstack.com/table/v8/docs/guide/row-selection#enable-row-selection-conditionally',
    },
  },
}

export const RowSelectionWithHover: StoryFn<typeof DataGrid> = (props) => {
  return (
    <Wrapper>
      <DataGrid {...props} enableRowSelection hasHover hideCheckboxes />
    </Wrapper>
  )
}

RowSelectionWithHover.storyName = 'Row selection with hover'
RowSelectionWithHover.args = {
  columns,
  data,
  initialRowSelection: {
    1: true,
    3: true,
    4: true,
    5: true,
  },
  isFullWidth: true,
  onSelectedRowsChange: fn(),
  onExpandedChange: fn(),
  onColumnFiltersChange: fn(),
}

export const Caption: StoryFn<typeof DataGrid> = (props) => {
  return (
    <Wrapper>
      <DataGrid {...props} caption="Example Caption" />
    </Wrapper>
  )
}

Caption.args = {
  columns,
  data,
  isFullWidth: true,
  onSelectedRowsChange: fn(),
  onExpandedChange: fn(),
  onColumnFiltersChange: fn(),
}

const columnsWithSizing = columns.map((item, index) => ({
  ...item,
  size: index === 0 ? '200' : '100',
}))

export const ColumnSizing: StoryFn<typeof DataGrid> = (props) => {
  return (
    <Wrapper>
      <DataGrid {...props} />
    </Wrapper>
  )
}

ColumnSizing.storyName = 'Column sizing'
ColumnSizing.args = {
  columns: columnsWithSizing,
  data,
  onSelectedRowsChange: fn(),
  onExpandedChange: fn(),
  onColumnFiltersChange: fn(),
}

const columnsWithAlignment = columns.map((item) => ({
  ...item,
  meta: { align: TABLE_COLUMN_ALIGNMENT.RIGHT },
}))

export const ColumnAlignment: StoryFn<typeof DataGrid> = (props) => {
  return (
    <Wrapper>
      <DataGrid {...props} />
    </Wrapper>
  )
}

ColumnAlignment.storyName = 'Column alignment'
ColumnAlignment.args = {
  columns: columnsWithAlignment,
  data,
  isFullWidth: true,
  onSelectedRowsChange: fn(),
  onExpandedChange: fn(),
  onColumnFiltersChange: fn(),
}

const groupedColumns = [
  {
    header: 'Group 1',
    columns: [
      {
        header: 'Product Name',
        accessorKey: 'productName',
        enableSorting: false,
      },
      {
        header: 'Price',
        accessorKey: 'price',
        enableSorting: false,
      },
    ],
  },
  {
    header: 'Group 2',
    columns: [
      {
        header: 'Quantity',
        accessorKey: 'quantity',
        enableSorting: false,
      },
    ],
  },
]

export const ColumnGrouping: StoryFn<typeof DataGrid> = (props) => {
  return (
    <Wrapper>
      <DataGrid {...props} columns={groupedColumns} />
    </Wrapper>
  )
}

ColumnGrouping.storyName = 'Column grouping'
ColumnGrouping.args = {
  data,
  isFullWidth: true,
  onSelectedRowsChange: fn(),
  onExpandedChange: fn(),
  onColumnFiltersChange: fn(),
}

export const ExpandableRows: StoryFn<typeof DataGrid> = (props) => {
  return (
    <Wrapper>
      <DataGrid {...props} />
    </Wrapper>
  )
}

ExpandableRows.storyName = 'Expandable rows'
ExpandableRows.args = {
  columns,
  data: subRowsData,
  isFullWidth: true,
  onSelectedRowsChange: fn(),
  onExpandedChange: fn(),
  onColumnFiltersChange: fn(),
}

export const Paginated: StoryFn<typeof DataGrid> = (props) => {
  return (
    <Wrapper>
      <DataGrid {...props} />
    </Wrapper>
  )
}
Paginated.args = {
  columns,
  data,
  isFullWidth: true,
  onSelectedRowsChange: fn(),
  onExpandedChange: fn(),
  onColumnFiltersChange: fn(),
  pageSize: 5,
}

const fullSpanColumnData = data.slice(0, 3).map((item) => {
  return {
    ...item,
    fullSpanColumn:
      'This is a full span column, it renders within a seperate row.',
    fullSpanColumn2:
      'This is a another full span column, it renders within a seperate row.',
  }
})

export const FullSpanColumn: StoryFn<typeof DataGrid> = (props) => {
  return (
    <Wrapper>
      <DataGrid {...props} />
    </Wrapper>
  )
}
FullSpanColumn.storyName = 'Full span column'
FullSpanColumn.args = {
  columns: [
    {
      header: 'Product Name',
      accessorKey: 'productName',
      enableSorting: false,
    },
    {
      header: 'Qty',
      accessorKey: 'quantity',
      enableSorting: false,
    },
    {
      header: 'Price',
      accessorKey: 'price',
      enableSorting: false,
    },
    {
      accessorKey: 'fullSpanColumn',
      meta: {
        fullSpanColumn: true,
      },
      cell: (info) => {
        const value = info.getValue() as string
        return <h2>{value}</h2>
      },
    },
    {
      accessorKey: 'fullSpanColumn2',
      meta: {
        fullSpanColumn: true,
      },
      cell: (info) => {
        const value = info.getValue() as string
        return <p>{value}</p>
      },
    },
  ],
  data: fullSpanColumnData,
  isFullWidth: true,
  onSelectedRowsChange: fn(),
  onExpandedChange: fn(),
  onColumnFiltersChange: fn(),
}

const columnsWithFiltering = columns.map((item) => ({
  ...item,
  enableColumnFilter: true,
}))

export const ColumnFiltering: StoryFn<typeof DataGrid> = (props) => {
  return (
    <Wrapper>
      <DataGrid {...props} />
    </Wrapper>
  )
}
ColumnFiltering.storyName = 'Column filtering'
ColumnFiltering.args = {
  columns: columnsWithFiltering,
  data,
  isFullWidth: true,
  onSelectedRowsChange: fn(),
  onExpandedChange: fn(),
  onColumnFiltersChange: fn(),
}

const mergedColumns = groupedColumns.map((group) => ({
  ...group,
  columns: group.columns.map((column) => ({
    ...column,
    ...columnsWithArbitraryContent.find(
      // @ts-ignore
      (c) => c.accessorKey === column.accessorKey
    ),
    enableSorting: true,
    enableColumnFilter: true,
  })),
}))

export const KitchenSink: StoryFn<typeof DataGrid> = (props) => {
  return (
    <Wrapper>
      <DataGrid
        {...props}
        enableRowSelection
        isFullWidth
        hasHover
        caption="Example Caption"
      />
    </Wrapper>
  )
}

KitchenSink.storyName = 'Kitchen sink'
KitchenSink.parameters = disableEmptyTableHeaderRule
KitchenSink.args = {
  columns: mergedColumns,
  data: subRowsData,
  initialRowSelection: {
    1: true,
  },
  onSelectedRowsChange: fn(),
  onExpandedChange: fn(),
  onColumnFiltersChange: fn(),
  pageSize: 3,
}

export const ManualSorting: StoryFn<typeof DataGrid> = () => {
  const [sortedData, setSortedData] = useState(data)
  const [sorting, setSorting] = useState<SortingState>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSortingChange = useCallback(
    (newSorting: SortingState) => {
      setSorting(newSorting)
      setIsLoading(true)

      setTimeout(() => {
        const sorted = [...sortedData]

        if (newSorting.length) {
          const { id: sortKey, desc } = newSorting[0]

          sorted.sort((a: Order, b: Order) => {
            const aValue = a[sortKey]
            const bValue = b[sortKey]

            if (typeof aValue === 'number') {
              return desc ? bValue - aValue : aValue - bValue
            }

            if (sortKey === 'price') {
              const aPrice = parseFloat(aValue.replace('£', ''))
              const bPrice = parseFloat(bValue.replace('£', ''))
              return desc ? bPrice - aPrice : aPrice - bPrice
            }

            return desc
              ? bValue.localeCompare(aValue)
              : aValue.localeCompare(bValue)
          })
        }

        setSortedData(sorted)
        setIsLoading(false)
      }, 500)
    },
    [sortedData]
  )

  return (
    <Wrapper>
      <DataGrid
        columns={columnsWithSorting as ColumnDef<Order>[]}
        data={sortedData}
        manualSorting
        isLoading={isLoading}
        onSortingChange={(updaterOrValue) => {
          const newSorting =
            typeof updaterOrValue === 'function'
              ? updaterOrValue(sorting)
              : updaterOrValue

          handleSortingChange(newSorting)
        }}
        sorting={sorting}
        isFullWidth
      />
    </Wrapper>
  )
}

ManualSorting.storyName = 'Manual sorting'
ManualSorting.parameters = {
  docs: {
    description: {
      story: `Manual sorting allows you to handle the sorting logic externally, typically on the server side (simulated with a 500ms delay).`,
    },
  },
}

export const ManualPagination: StoryFn<typeof DataGrid> = () => {
  const [paginatedData, setPaginatedData] = useState(
    data.slice(0, DEFAULT_ROWS_PER_PAGE)
  )
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: DEFAULT_ROWS_PER_PAGE,
  })
  const [isLoading, setIsLoading] = useState(false)
  const totalCount = data.length
  const [totalPages, setTotalPages] = useState(
    Math.ceil(data.length / DEFAULT_ROWS_PER_PAGE)
  )

  const handlePaginationChange = useCallback(
    (newPagination: PaginationState) => {
      setPagination(newPagination)
      setIsLoading(true)

      setTimeout(() => {
        const startIndex = newPagination.pageIndex * newPagination.pageSize
        const endIndex = startIndex + newPagination.pageSize
        const newPageData = data.slice(startIndex, endIndex)
        setPaginatedData(newPageData)
        setTotalPages(Math.ceil(totalCount / newPagination.pageSize))
        setIsLoading(false)
      }, 500)
    },
    [totalCount]
  )

  return (
    <Wrapper>
      <DataGrid
        columns={columns as ColumnDef<Order>[]}
        data={paginatedData}
        manualPagination
        pageCount={totalPages}
        isLoading={isLoading}
        onPaginationChange={(updaterOrValue) => {
          const newPagination =
            typeof updaterOrValue === 'function'
              ? updaterOrValue(pagination)
              : updaterOrValue

          handlePaginationChange(newPagination)
        }}
        pagination={pagination}
        isFullWidth
      />
    </Wrapper>
  )
}

ManualPagination.storyName = 'Manual pagination'
ManualPagination.parameters = {
  docs: {
    description: {
      story: `Manual pagination allows you to handle the pagination logic externally, typically on the server side (simulated with a 500ms delay).`,
    },
  },
}

export const Loading: StoryFn<typeof DataGrid> = (props) => {
  return (
    <Wrapper>
      <DataGrid {...props} isLoading />
    </Wrapper>
  )
}

Loading.args = {
  columns,
  data,
  isFullWidth: true,
  onSelectedRowsChange: fn(),
  onExpandedChange: fn(),
  onColumnFiltersChange: fn(),
}

Loading.parameters = {
  docs: {
    description: {
      story:
        'The `isLoading` prop displays a loading overlay with a progress indicator. This is useful when loading data from a server.',
    },
  },
}

export const RowsPerPage: StoryFn<typeof DataGrid> = (props) => {
  return (
    <Wrapper>
      <DataGrid {...props} />
    </Wrapper>
  )
}

RowsPerPage.args = {
  columns: [
    {
      header: 'Product Name',
      accessorKey: 'productName',
    },
  ],
  data: Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    productName: `Product ${i + 1}`,
  })),
  hasRowsPerPage: true,
  isFullWidth: true,
  onSelectedRowsChange: fn(),
  onExpandedChange: fn(),
  onColumnFiltersChange: fn(),
}

export const WithFooterLeftSlot: StoryFn<typeof DataGrid> = (props) => {
  return (
    <Wrapper>
      <DataGrid
        {...props}
        footerLeftSlot={<Button variant="primary">Download</Button>}
      />
    </Wrapper>
  )
}

WithFooterLeftSlot.storyName = 'With footer left slot'
WithFooterLeftSlot.args = {
  columns,
  data,
  isFullWidth: true,
  onSelectedRowsChange: fn(),
  onExpandedChange: fn(),
  onColumnFiltersChange: fn(),
}

WithFooterLeftSlot.parameters = {
  docs: {
    description: {
      story:
        'The `footerLeftSlot` prop allows you to inject arbitrary content (like a button) into the left side of the DataGrid footer.',
    },
  },
}

export const WithRowsPerPageItemRange: StoryFn<typeof DataGrid> = (props) => {
  return (
    <Wrapper>
      <DataGrid {...props} />
    </Wrapper>
  )
}

WithRowsPerPageItemRange.storyName = 'With rows per page item range'
WithRowsPerPageItemRange.args = {
  columns,
  data,
  isFullWidth: true,
  showRowsPerPageItemRange: true,
  onSelectedRowsChange: fn(),
  onExpandedChange: fn(),
  onColumnFiltersChange: fn(),
}

WithRowsPerPageItemRange.parameters = {
  docs: {
    description: {
      story:
        'The `showRowsPerPageItemRange` prop displays "Showing X to Y of Z" text next to the rows per page selector.',
    },
  },
}

export const ManualPaginationWithItemRange: StoryFn<typeof DataGrid> = () => {
  const [paginatedData, setPaginatedData] = useState(
    data.slice(0, DEFAULT_ROWS_PER_PAGE)
  )
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: DEFAULT_ROWS_PER_PAGE,
  })
  const [isLoading, setIsLoading] = useState(false)
  const totalCount = data.length
  const [totalPages, setTotalPages] = useState(
    Math.ceil(totalCount / DEFAULT_ROWS_PER_PAGE)
  )

  const handlePaginationChange = useCallback(
    (newPagination: PaginationState) => {
      setPagination(newPagination)
      setIsLoading(true)

      setTimeout(() => {
        const startIndex = newPagination.pageIndex * newPagination.pageSize
        const endIndex = startIndex + newPagination.pageSize
        const newPageData = data.slice(startIndex, endIndex)
        setPaginatedData(newPageData)
        setTotalPages(Math.ceil(totalCount / newPagination.pageSize))
        setIsLoading(false)
      }, 500)
    },
    [totalCount]
  )

  return (
    <Wrapper>
      <DataGrid
        columns={columns as ColumnDef<Order>[]}
        data={paginatedData}
        manualPagination
        pageCount={totalPages}
        totalCount={totalCount}
        isLoading={isLoading}
        showRowsPerPageItemRange
        onPaginationChange={(updaterOrValue) => {
          const newPagination =
            typeof updaterOrValue === 'function'
              ? updaterOrValue(pagination)
              : updaterOrValue

          handlePaginationChange(newPagination)
        }}
        pagination={pagination}
        isFullWidth
      />
    </Wrapper>
  )
}

ManualPaginationWithItemRange.storyName = 'Manual pagination with item range'
ManualPaginationWithItemRange.parameters = {
  docs: {
    description: {
      story: `This example shows manual pagination with the item range display.`,
    },
  },
}
