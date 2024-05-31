import React from 'react'
import styled from 'styled-components'
import { spacing } from '@royalnavy/design-tokens'
import { fn } from '@storybook/test'
import { Meta, StoryFn } from '@storybook/react'
import { ColumnDef } from '@tanstack/react-table'

import { storyAccessibilityConfig } from '../../a11y/storyAccessibilityConfig'
import { DataGrid, TABLE_COLUMN_ALIGNMENT } from '.'
import { Badge } from '../Badge'

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
    quantity: 79,
    price: '£837.00',
  },
  {
    id: 6,
    productName: 'Small Bronze Computer',
    quantity: 86,
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
]

const columns = [
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
]

const Wrapper = styled.div`
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
} as Meta<typeof DataGrid>

export const Default: StoryFn<typeof DataGrid> = (props) => {
  return (
    <Wrapper>
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
const columnsWithArbitraryContent: ColumnDef<object>[] = columns.map((item) => {
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
}

const columnsWithSizing = columns.map((item) => ({
  ...item,
  size: 200,
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
}
