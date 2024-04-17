import React from 'react'
import { fn } from '@storybook/test'
import { faker } from '@faker-js/faker'
import { StoryFn, Meta } from '@storybook/react'
import { ColumnDef } from '@tanstack/react-table'

import { DataGrid, TABLE_COLUMN_ALIGNMENT } from '.'
import { Badge } from '../Badge'

type Order = {
  id: number
  productName: string
  quantity: number
}

const generateRandomData = (length: number): Order[] => {
  const data: Order[] = Array.from({ length }, (_, i) => {
    return {
      id: i + 1,
      productName: faker.commerce.productName(),
      quantity: faker.number.int({ min: 1, max: 100 }),
    }
  })

  return data
}

const data: Order[] = generateRandomData(10)

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
]

export default {
  component: DataGrid,
  subcomponents: {},
  title: 'Data Grid',
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
  return <DataGrid {...props} />
}

Default.args = {
  columns,
  data,
  isFullWidth: true,
  onSelectedRowsChange: fn(),
}

const columnsWithSorting = columns.map((item) => ({
  ...item,
  enableSorting: true,
}))

export const Sorting: StoryFn<typeof DataGrid> = (props) => {
  return <DataGrid {...props} />
}

Sorting.args = {
  columns: columnsWithSorting,
  data,
  isFullWidth: true,
  onSelectedRowsChange: fn(),
}

Sorting.parameters = {
  docs: {
    description: {
      story:
        'https://tanstack.com/table/v8/docs/api/features/sorting#sortingfn',
    },
  },
}

const columnsWithArbitraryContent: ColumnDef<object>[] = columns.map(
  (item) => ({
    ...item,
    cell: (info) => {
      const value = info.getValue() as string

      return <Badge>{value}</Badge>
    },
  })
)

export const ArbitraryCellContent: StoryFn<typeof DataGrid> = (props) => {
  return <DataGrid {...props} />
}

ArbitraryCellContent.storyName = 'Arbitrary cell content'
ArbitraryCellContent.args = {
  columns: columnsWithArbitraryContent,
  data,
  isFullWidth: true,
  onSelectedRowsChange: fn(),
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
  return <DataGrid {...props} enableRowSelection />
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
  return <DataGrid {...props} enableRowSelection hasHover hideCheckboxes />
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
}

export const Caption: StoryFn<typeof DataGrid> = (props) => {
  return <DataGrid {...props} caption="Example Caption" />
}

Caption.args = {
  columns,
  data,
  isFullWidth: true,
  onSelectedRowsChange: fn(),
}

const columnsWithSizing = columns.map((item) => ({
  ...item,
  size: 200,
}))

export const ColumnSizing: StoryFn<typeof DataGrid> = (props) => {
  return <DataGrid {...props} />
}

ColumnSizing.storyName = 'Column sizing'
ColumnSizing.args = {
  columns: columnsWithSizing,
  data,
  onSelectedRowsChange: fn(),
}

const columnsWithAlignment = columns.map((item) => ({
  ...item,
  meta: { align: TABLE_COLUMN_ALIGNMENT.RIGHT },
}))

export const ColumnAlignment: StoryFn<typeof DataGrid> = (props) => {
  return <DataGrid {...props} />
}

ColumnAlignment.storyName = 'Column alignment'
ColumnAlignment.args = {
  columns: columnsWithAlignment,
  data,
  isFullWidth: true,
  onSelectedRowsChange: fn(),
}

const mergedColumns = columns.map((item, index) => ({
  ...item,
  ...columnsWithSorting[index],
  ...columnsWithArbitraryContent[index],
}))

export const KitchenSink: StoryFn<typeof DataGrid> = (props) => {
  return (
    <DataGrid
      {...props}
      enableRowSelection
      hasHover
      isFullWidth
      caption="Example Caption"
    />
  )
}

KitchenSink.storyName = 'Kitchen sink'
KitchenSink.args = {
  columns: mergedColumns,
  data,
  initialRowSelection: {
    1: true,
    3: true,
    4: true,
    5: true,
  },
  onSelectedRowsChange: fn(),
}
