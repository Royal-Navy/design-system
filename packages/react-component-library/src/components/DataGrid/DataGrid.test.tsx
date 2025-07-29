import React, { useState } from 'react'
import {
  render,
  screen,
  within,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import type {
  ColumnDef,
  SortingState,
  PaginationState,
} from '@tanstack/react-table'
import { userEvent, PointerEventsCheckLevel } from '@testing-library/user-event'
import { color } from '@royalnavy/design-tokens'

import { DataGrid } from './DataGrid'
import { Button } from '../Button'
import { DEFAULT_ROWS_PER_PAGE } from '../RowsPerPage'

type DataRow = {
  first: string
  second: string
  third: string
}

async function hackyWaitFor(customDelay?: number) {
  // @tanstack/react-table updates asynchronously and
  // waitFor swallows failed assertions (untrustworthy)
  return new Promise((resolve) => setTimeout(resolve, customDelay ?? 100))
}

const PAGINATED_DATA = Array.from({ length: 1000 }, (_, i) => ({
  first: `a${i + 1}`,
  second: `b${i + 1}`,
  third: `c${i + 1}`,
}))

describe('DataGrid', () => {
  const columns: ColumnDef<DataRow>[] = [
    {
      accessorKey: 'first',
      header: 'First',
      cell: (info) => info.getValue(),
      enableSorting: true,
      enableColumnFilter: false,
    },
    {
      accessorKey: 'second',
      header: 'Second',
      cell: (info) => info.getValue(),
      enableSorting: false,
      enableColumnFilter: false,
    },
    {
      accessorKey: 'third',
      header: 'Third',
      cell: (info) => info.getValue(),
      enableSorting: true,
      enableColumnFilter: false,
    },
  ]

  const data = [
    {
      first: 'b1',
      second: 'b2',
      third: 'c6',
    },
    {
      first: 'a1',
      second: 'a2',
      third: 'c5',
    },
    {
      first: 'c1',
      second: 'c2',
      third: 'c4',
    },
  ]

  it('renders table cells and headers correctly', () => {
    render(<DataGrid data={data} columns={columns} />)

    expect(screen.getByRole('grid')).toBeInTheDocument()

    expect(
      within(screen.getAllByRole('row')[0]).getByText('First')
    ).toBeInTheDocument()
    expect(
      within(screen.getAllByRole('row')[0]).getByText('Second')
    ).toBeInTheDocument()
    expect(
      within(screen.getAllByRole('row')[0]).getByText('Third')
    ).toBeInTheDocument()

    expect(screen.getAllByRole('row')).toHaveLength(4)

    expect(
      within(screen.getAllByRole('row')[1]).getByText('b1')
    ).toBeInTheDocument()
    expect(
      within(screen.getAllByRole('row')[1]).getByText('b2')
    ).toBeInTheDocument()
    expect(
      within(screen.getAllByRole('row')[1]).getByText('c6')
    ).toBeInTheDocument()
  })

  it('renders table with arbitrary cell content', () => {
    const columnsWithCustomCell: ColumnDef<DataRow>[] = [
      {
        accessorKey: 'first',
        header: 'First',
        cell: (info) => <strong>{info.getValue() as string}</strong>,
      },
      {
        accessorKey: 'second',
        header: 'Second',
        cell: (info) => <em>{info.getValue() as string}</em>,
      },
      {
        accessorKey: 'third',
        header: 'Third',
        cell: (info) => <div>{info.getValue() as string}</div>,
      },
    ]

    render(<DataGrid data={data} columns={columnsWithCustomCell} />)

    expect(screen.getByText('b1')).toBeInTheDocument()
    expect(screen.getByText('b2')).toBeInTheDocument()
    expect(screen.getByText('c6')).toBeInTheDocument()
    expect(screen.getByText('b1').tagName).toBe('STRONG')
    expect(screen.getByText('b2').tagName).toBe('EM')
    expect(screen.getByText('c6').tagName).toBe('DIV')
  })

  it('renders footerLeftSlot content in the footer', () => {
    render(
      <DataGrid
        data={data}
        columns={columns}
        footerLeftSlot={<Button>Download</Button>}
      />
    )

    expect(screen.getByRole('button', { name: 'Download' })).toBeInTheDocument()
  })

  it('renders table with row selection', async () => {
    render(<DataGrid data={data} columns={columns} enableRowSelection />)

    const checkboxes = screen.getAllByRole('checkbox')

    expect(checkboxes).toHaveLength(4)
    expect(checkboxes[0]).not.toBeChecked()
    expect(checkboxes[1]).not.toBeChecked()
    expect(checkboxes[2]).not.toBeChecked()
    expect(checkboxes[3]).not.toBeChecked()

    userEvent.click(checkboxes[1], {
      pointerEventsCheck: PointerEventsCheckLevel.Never,
    })

    await hackyWaitFor()

    expect(checkboxes[0]).not.toBeChecked()
    expect(checkboxes[1]).toBeChecked()
    expect(checkboxes[2]).not.toBeChecked()
    expect(checkboxes[3]).not.toBeChecked()
  })

  it('renders table with row selection and initial selection', async () => {
    render(
      <DataGrid
        data={data}
        columns={columns}
        enableRowSelection
        initialRowSelection={{ 1: true }}
      />
    )

    await hackyWaitFor()

    const checkboxes = screen.getAllByRole('checkbox')

    expect(checkboxes).toHaveLength(4)
    expect(checkboxes[1]).not.toBeChecked()
    expect(checkboxes[2]).toBeChecked()
    expect(checkboxes[3]).not.toBeChecked()
  })

  it('clicking rows with hasHover highlights the row', async () => {
    render(
      <DataGrid data={data} columns={columns} enableRowSelection hasHover />
    )

    const rows = screen.getAllByRole('row')

    userEvent.click(within(rows[1]).getAllByRole('cell')[1], {
      pointerEventsCheck: PointerEventsCheckLevel.Never,
    })

    await hackyWaitFor()

    expect(rows[1]).toHaveStyleRule('background-color', color('action', '100'))

    userEvent.click(within(rows[1]).getAllByRole('cell')[1], {
      pointerEventsCheck: PointerEventsCheckLevel.Never,
    })

    await hackyWaitFor()

    expect(rows[1]).not.toHaveStyleRule('background-color')
  })

  it('caption is rendered correctly', () => {
    render(<DataGrid data={data} columns={columns} caption="Example Caption" />)

    expect(screen.getByRole('grid')).toHaveAccessibleName('Example Caption')
  })

  it('should update the table data when the data updates externally', async () => {
    const initialFixture = data
    const updatedFixture = [initialFixture[0], initialFixture[1]]

    const TableWithUpdate = () => {
      const [tableData, updateTableData] = useState(initialFixture)

      return (
        <>
          <Button onClick={() => updateTableData(updatedFixture)}>
            Update
          </Button>
          <DataGrid data={tableData} columns={columns} />
        </>
      )
    }

    render(<TableWithUpdate />)

    screen.getByText('Update').click()

    await waitForElementToBeRemoved(() => screen.queryAllByText('c1'))

    const rows = screen.queryAllByRole('row')
    expect(rows).toHaveLength(3)
  })

  it('invokes the onSelectedRowsChange callback when a row is selected', async () => {
    const onSelectedRowsChange = jest.fn()

    render(
      <DataGrid
        data={data}
        columns={columns}
        enableRowSelection
        onSelectedRowsChange={onSelectedRowsChange}
      />
    )

    const checkboxes = screen.getAllByRole('checkbox')

    userEvent.click(checkboxes[1], {
      pointerEventsCheck: PointerEventsCheckLevel.Never,
    })

    await hackyWaitFor()

    expect(onSelectedRowsChange).toHaveBeenCalledTimes(2)
    expect(onSelectedRowsChange).toHaveBeenNthCalledWith(1, [])
    expect(onSelectedRowsChange).toHaveBeenNthCalledWith(2, [data[0]])
  })

  it('aligns the table cells correctly', () => {
    const columnsWithAlignment: ColumnDef<DataRow>[] = [
      {
        accessorKey: 'first',
        header: 'First',
        cell: (info) => info.getValue(),
        meta: {
          align: 'center',
        },
      },
      {
        accessorKey: 'second',
        header: 'Second',
        cell: (info) => info.getValue(),
        meta: {
          align: 'right',
        },
      },
      {
        accessorKey: 'third',
        header: 'Third',
        cell: (info) => info.getValue(),
        meta: {
          align: 'left',
        },
      },
    ]

    render(<DataGrid data={data} columns={columnsWithAlignment} />)

    const rows = screen.getAllByRole('row')

    expect(within(rows[1]).getAllByRole('cell')[0]).toHaveStyleRule(
      'text-align',
      'center'
    )
    expect(within(rows[1]).getAllByRole('cell')[1]).toHaveStyleRule(
      'text-align',
      'right'
    )
    expect(within(rows[1]).getAllByRole('cell')[2]).toHaveStyleRule(
      'text-align',
      'left'
    )
  })

  describe('with sortable columns', () => {
    beforeEach(() => {
      render(<DataGrid data={data} columns={columns} />)
    })

    it('should have sort icons', () => {
      expect(screen.queryAllByTestId('unsorted').length).toEqual(2)
      expect(screen.queryAllByTestId('descending').length).toEqual(0)
      expect(screen.queryAllByTestId('ascending').length).toEqual(0)
    })

    it('should set the `aria-sort` attribute on the table header cells', () => {
      const tableHeaderCells = screen.queryAllByRole('columnheader')

      expect(tableHeaderCells[0]).toHaveAttribute('aria-sort', 'none')
      expect(tableHeaderCells[1]).not.toHaveAttribute('aria-sort')
      expect(tableHeaderCells[2]).toHaveAttribute('aria-sort', 'none')
    })

    it('should not have a sort button in the second cell header', () => {
      const secondColumnHeader = screen.getByRole('columnheader', {
        name: 'Second',
      })
      const sortButton = within(secondColumnHeader).queryByRole('button')
      expect(sortButton).not.toBeInTheDocument()
    })

    describe('when the first cell header sort button is clicked for the first time', () => {
      beforeEach(async () => {
        const firstColumnHeader = screen.getByRole('columnheader', {
          name: 'First',
        })
        const sortButton = within(firstColumnHeader).getByRole('button')
        userEvent.click(sortButton)
        await hackyWaitFor()
      })

      it('should have sort icons', () => {
        const unsortedIcon = screen.getByTestId('unsorted')
        const ascendingIcon = screen.getByTestId('ascending')

        expect(unsortedIcon).toBeInTheDocument()
        expect(screen.queryByTestId('descending')).toBeNull()
        expect(ascendingIcon).toBeInTheDocument()
      })

      it('should apply `aria-hidden` to sort icons', () => {
        const unsortedIcon = screen.getAllByTestId('unsorted')
        const sortedIcon = screen.getAllByTestId('ascending')

        expect(unsortedIcon[0]).toHaveAttribute('aria-hidden')
        expect(sortedIcon[0]).toHaveAttribute('aria-hidden')
      })

      it('should set the `aria-sort` attribute on the table header cells', () => {
        const tableHeaderCells = screen.getAllByRole('columnheader')

        expect(tableHeaderCells[0]).toHaveAttribute('aria-sort', 'ascending')
        expect(tableHeaderCells[1]).not.toHaveAttribute('aria-sort')
        expect(tableHeaderCells[2]).toHaveAttribute('aria-sort', 'none')
      })

      it('should sort the data in ascending order of the first column', () => {
        const rows = screen.getAllByRole('row')

        expect(rows[1].children[0].textContent).toEqual('a1')
        expect(rows[2].children[0].textContent).toEqual('b1')
        expect(rows[3].children[0].textContent).toEqual('c1')
      })

      describe('when the first cell header sort button is clicked for the second time', () => {
        beforeEach(async () => {
          const firstColumnHeader = screen.getByRole('columnheader', {
            name: 'First',
          })
          const sortButton = within(firstColumnHeader).getByRole('button')
          userEvent.click(sortButton)
          await hackyWaitFor()
        })

        it('should have sort icons', () => {
          const unsortedIcon = screen.getByTestId('unsorted')
          const descendingIcon = screen.getByTestId('descending')

          expect(unsortedIcon).toBeInTheDocument()
          expect(screen.queryByTestId('ascending')).toBeNull()
          expect(descendingIcon).toBeInTheDocument()
        })

        it('should apply `aria-hidden` to sort icons', () => {
          const unsortedIcon = screen.getAllByTestId('unsorted')
          const sortedIcon = screen.getAllByTestId('descending')

          expect(unsortedIcon[0]).toHaveAttribute('aria-hidden')
          expect(sortedIcon[0]).toHaveAttribute('aria-hidden')
        })

        it('should set the `aria-sort` attribute on the table header cells', () => {
          const tableHeaderCells = screen.queryAllByRole('columnheader')

          expect(tableHeaderCells[0]).toHaveAttribute('aria-sort', 'descending')
          expect(tableHeaderCells[1]).not.toHaveAttribute('aria-sort')
          expect(tableHeaderCells[2]).toHaveAttribute('aria-sort', 'none')
        })

        it('should sort the data in descending order of the first column', () => {
          const rows = screen.getAllByRole('row')

          expect(rows[1].children[0].textContent).toEqual('c1')
          expect(rows[2].children[0].textContent).toEqual('b1')
          expect(rows[3].children[0].textContent).toEqual('a1')
        })

        describe('when the first cell header sort button is clicked for the third time', () => {
          beforeEach(async () => {
            const firstColumnHeader = screen.getByRole('columnheader', {
              name: 'First',
            })
            const sortButton = within(firstColumnHeader).getByRole('button')
            userEvent.click(sortButton)
            await hackyWaitFor()
          })

          it('should have sort icons', () => {
            expect(screen.queryAllByTestId('unsorted').length).toEqual(2)
            expect(screen.queryAllByTestId('descending').length).toEqual(0)
            expect(screen.queryAllByTestId('ascending').length).toEqual(0)
          })

          it('should set the `aria-sort` attribute on the table header cells', () => {
            const tableHeaderCells = screen.queryAllByRole('columnheader')

            expect(tableHeaderCells[0]).toHaveAttribute('aria-sort', 'none')
            expect(tableHeaderCells[1]).not.toHaveAttribute('aria-sort')
            expect(tableHeaderCells[2]).toHaveAttribute('aria-sort', 'none')
          })

          it('should unsort the data in the first column', () => {
            const rows = screen.getAllByRole('row')

            expect(rows[1].children[0].textContent).toEqual('b1')
            expect(rows[2].children[0].textContent).toEqual('a1')
            expect(rows[3].children[0].textContent).toEqual('c1')
          })
        })
      })
    })

    describe('when the first cell header sort button is clicked once and then the third cell header sort button is clicked', () => {
      beforeEach(async () => {
        const firstColumnHeader = screen.getByRole('columnheader', {
          name: 'First',
        })
        const firstSortButton = within(firstColumnHeader).getByRole('button')
        userEvent.click(firstSortButton)
        await hackyWaitFor()

        const thirdColumnHeader = screen.getByRole('columnheader', {
          name: 'Third',
        })
        const thirdSortButton = within(thirdColumnHeader).getByRole('button')
        userEvent.click(thirdSortButton)
        await hackyWaitFor()
      })

      it('should have sort icons', () => {
        expect(screen.queryAllByTestId('unsorted').length).toEqual(1)
        expect(screen.queryAllByTestId('descending').length).toEqual(0)
        expect(screen.queryAllByTestId('ascending').length).toEqual(1)
      })

      it('should set the `aria-sort` attribute on the table header cells', () => {
        const tableHeaderCells = screen.queryAllByRole('columnheader')

        expect(tableHeaderCells[0]).toHaveAttribute('aria-sort', 'none')
        expect(tableHeaderCells[1]).not.toHaveAttribute('aria-sort')
        expect(tableHeaderCells[2]).toHaveAttribute('aria-sort', 'ascending')
      })

      it('should sort the data in ascending order of the third column', () => {
        const rows = screen.getAllByRole('row')

        expect(rows[1].children[2].textContent).toEqual('c4')
        expect(rows[2].children[2].textContent).toEqual('c5')
        expect(rows[3].children[2].textContent).toEqual('c6')
      })
    })
  })

  describe('with column grouping', () => {
    const columnGroups: ColumnDef<DataRow>[] = [
      {
        header: 'Group 1',
        columns: [
          {
            accessorKey: 'first',
            header: 'First',
            cell: (info) => info.getValue(),
            enableSorting: true,
          },
          {
            accessorKey: 'second',
            header: 'Second',
            cell: (info) => info.getValue(),
            enableSorting: false,
          },
        ],
      },
      {
        header: 'Group 2',
        columns: [
          {
            accessorKey: 'third',
            header: 'Third',
            cell: (info) => info.getValue(),
            enableSorting: true,
          },
        ],
      },
    ]

    beforeEach(() => {
      render(<DataGrid data={data} columns={columnGroups} />)
    })

    it('should render the column groups correctly', () => {
      expect(screen.getByText('Group 1')).toBeInTheDocument()
      expect(screen.getByText('Group 2')).toBeInTheDocument()

      expect(screen.getByText('First')).toBeInTheDocument()
      expect(screen.getByText('Second')).toBeInTheDocument()
      expect(screen.getByText('Third')).toBeInTheDocument()
    })

    it('should render the column groups with the correct order', () => {
      const firstRow = screen.getAllByRole('row')[0]
      const firstRowHeaders = within(firstRow).getAllByRole('columnheader')

      expect(firstRowHeaders[0]).toHaveTextContent('Group 1')
      expect(firstRowHeaders[1]).toHaveTextContent('Group 2')

      const secondRow = screen.getAllByRole('row')[1]
      const secondRowHeaders = within(secondRow).getAllByRole('columnheader')

      expect(secondRowHeaders[0]).toHaveTextContent('First')
      expect(secondRowHeaders[1]).toHaveTextContent('Second')
      expect(secondRowHeaders[2]).toHaveTextContent('Third')
    })
  })

  describe('with sub rows', () => {
    const subRowData = [
      {
        first: 'b1',
        second: 'b2',
        third: 'c6',
        subRows: [
          {
            first: 'b1',
            second: 'b2',
            third: 'c6',
          },
          {
            first: 'b1',
            second: 'b2',
            third: 'c6',
          },
        ],
      },
      {
        first: 'a1',
        second: 'a2',
        third: 'c5',
        subRows: [
          {
            first: 'a1',
            second: 'a2',
            third: 'c5',
          },
          {
            first: 'a1',
            second: 'a2',
            third: 'c5',
          },
        ],
      },
      {
        first: 'c1',
        second: 'c2',
        third: 'c4',
        subRows: [
          {
            first: 'c1',
            second: 'c2',
            third: 'c4',
          },
          {
            first: 'c1',
            second: 'c2',
            third: 'c4',
          },
        ],
      },
    ]

    const onExpandedChangeStub = jest.fn()

    beforeEach(() => {
      render(
        <DataGrid
          data={subRowData}
          columns={columns}
          onExpandedChange={onExpandedChangeStub}
        />
      )
    })

    it('should render only the top level rows when collapsed', () => {
      const rows = screen.getAllByRole('row')

      expect(rows).toHaveLength(4)

      expect(rows[1]).toHaveTextContent('b1')
      expect(rows[2]).toHaveTextContent('a1')
      expect(rows[3]).toHaveTextContent('c1')
    })

    it('should show all the rows when the "Expand all rows" button is clicked', async () => {
      const expandAllButton = screen.getByRole('button', {
        name: 'Expand / collapse all rows',
      })

      expect(screen.getAllByRole('row')).toHaveLength(4)

      userEvent.click(expandAllButton)
      await hackyWaitFor()

      expect(screen.getAllByRole('row')).toHaveLength(10)

      const rows = screen.getAllByRole('row')

      expect(rows[1]).toHaveTextContent('b1')
      expect(rows[2]).toHaveTextContent('b1') // Sub row
      expect(rows[3]).toHaveTextContent('b1') // Sub row
      expect(rows[4]).toHaveTextContent('a1')
      expect(rows[5]).toHaveTextContent('a1') // Sub row
      expect(rows[6]).toHaveTextContent('a1') // Sub row
      expect(rows[7]).toHaveTextContent('c1')
      expect(rows[8]).toHaveTextContent('c1') // Sub row
      expect(rows[9]).toHaveTextContent('c1') // Sub row

      expect(onExpandedChangeStub).toHaveBeenNthCalledWith(3, true)
    })

    it('should show individual groups of sub rows when an "Expand row" button is clicked', async () => {
      const expandRowButtons = screen.getAllByRole('button', {
        name: 'Expand / collapse row',
      })

      expect(screen.getAllByRole('row')).toHaveLength(4)

      userEvent.click(expandRowButtons[0])
      await hackyWaitFor()

      expect(screen.getAllByRole('row')).toHaveLength(6)
    })
  })

  describe('paginated data', () => {
    it('should render the correct rows on initial render', async () => {
      render(<DataGrid data={PAGINATED_DATA} columns={columns} pageSize={10} />)

      expect(screen.getAllByRole('row')).toHaveLength(DEFAULT_ROWS_PER_PAGE + 1)
      expect(screen.getByText('a1')).toBeVisible()
    })

    it('should render the correct rows when the page is changed', async () => {
      const onPageChangeSpy = jest.fn()

      render(
        <DataGrid
          data={PAGINATED_DATA}
          columns={columns}
          pageSize={10}
          // @ts-ignore
          onPageChange={onPageChangeSpy}
        />
      )

      userEvent.click(
        screen.getByRole('button', {
          name: 'Next page',
        })
      )
      await hackyWaitFor()

      expect(screen.getAllByRole('row')).toHaveLength(DEFAULT_ROWS_PER_PAGE + 1)

      expect(screen.queryByText('a1')).not.toBeInTheDocument()
      expect(screen.getByText('a51')).toBeVisible()

      expect(onPageChangeSpy).toHaveBeenCalledTimes(1)
      expect(onPageChangeSpy).toHaveBeenCalledWith(expect.any(Object), 2, 20)
    })
  })

  describe('custom column sizing', () => {
    const columnsWithWidths: ColumnDef<DataRow>[] = [
      {
        accessorKey: 'first',
        header: 'First',
        cell: (info) => info.getValue(),
        size: 100,
      },
      {
        accessorKey: 'second',
        header: 'Second',
        cell: (info) => info.getValue(),
        size: 200,
      },
      {
        accessorKey: 'third',
        header: 'Third',
        cell: (info) => info.getValue(),
        size: 300,
      },
    ]

    it('should render the columns with the correct widths', () => {
      render(<DataGrid data={data} columns={columnsWithWidths} />)

      const columnHeaders = screen.getAllByRole('columnheader')

      expect(columnHeaders[0]).toHaveStyleRule('width', '100px')
      expect(columnHeaders[1]).toHaveStyleRule('width', '200px')
      expect(columnHeaders[2]).toHaveStyleRule('width', '300px')
    })
  })

  describe('with fullSpanColumn', () => {
    const columnsWithFullSpan: ColumnDef<DataRow>[] = [
      {
        accessorKey: 'first',
        header: 'First',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'second',
        header: 'Second',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'third',
        header: 'Third',
        cell: (info) => info.getValue(),
      },
      {
        id: 'fullSpan',
        header: 'Full Span',
        cell: () => 'Full Span Content',
        meta: { fullSpanColumn: true },
      },
    ]

    const dataWithFullSpan = [
      {
        first: 'a1',
        second: 'a2',
        third: 'a3',
      },
      {
        first: 'b1',
        second: 'b2',
        third: 'b3',
      },
    ]

    it('renders fullSpanColumn correctly', () => {
      render(<DataGrid data={dataWithFullSpan} columns={columnsWithFullSpan} />)

      const fullSpanContent = screen.getAllByText('Full Span Content')
      expect(fullSpanContent).toHaveLength(2) // One for each row

      fullSpanContent.forEach((content) => {
        const parentRow = content.closest('tr')
        expect(parentRow).toHaveAttribute(
          'id',
          expect.stringContaining('-fullspan')
        )
      })
    })

    it('calculates totalColumns correctly with fullSpanColumn', () => {
      render(
        <DataGrid
          data={dataWithFullSpan}
          columns={columnsWithFullSpan}
          enableRowSelection
        />
      )

      const fullSpanCells = screen.getAllByText('Full Span Content')
      fullSpanCells.forEach((cell) => {
        // 3 normal columns + 1 selection column
        expect(cell.closest('td')).toHaveAttribute('colspan', '4')
      })
    })

    it('renders normal cells and fullSpanColumn cells in separate rows', () => {
      render(<DataGrid data={dataWithFullSpan} columns={columnsWithFullSpan} />)

      const rows = screen.getAllByRole('row')
      // 1 header row + 2 normal rows + 2 fullSpan rows
      expect(rows).toHaveLength(5)

      // Check normal rows
      expect(within(rows[1]).getByText('a1')).toBeInTheDocument()
      expect(within(rows[1]).getByText('a2')).toBeInTheDocument()
      expect(within(rows[1]).getByText('a3')).toBeInTheDocument()
      expect(
        within(rows[1]).queryByText('Full Span Content')
      ).not.toBeInTheDocument()

      // Check fullSpan rows
      expect(within(rows[2]).getByText('Full Span Content')).toBeInTheDocument()
      expect(within(rows[2]).queryByText('a1')).not.toBeInTheDocument()
      expect(within(rows[2]).queryByText('a2')).not.toBeInTheDocument()
      expect(within(rows[2]).queryByText('a3')).not.toBeInTheDocument()
    })

    it('does not render fullSpanColumn in the header', () => {
      render(<DataGrid data={dataWithFullSpan} columns={columnsWithFullSpan} />)

      const headerRow = screen.getAllByRole('row')[0]
      expect(within(headerRow).queryByText('Full Span')).not.toBeInTheDocument()
    })

    it('handles sorting correctly with fullSpanColumn', async () => {
      render(<DataGrid data={dataWithFullSpan} columns={columnsWithFullSpan} />)

      // Click to sort by 'First' column
      userEvent.click(screen.getByText('First'))
      await hackyWaitFor()

      const rows = screen.getAllByRole('row')

      // Check that the main rows are sorted
      expect(within(rows[1]).getByText('a1')).toBeInTheDocument()
      expect(within(rows[3]).getByText('b1')).toBeInTheDocument()

      // Check that fullSpanColumns follow their respective rows
      expect(within(rows[2]).getByText('Full Span Content')).toBeInTheDocument()
      expect(within(rows[4]).getByText('Full Span Content')).toBeInTheDocument()
    })

    it('handles row selection correctly with fullSpanColumn', async () => {
      render(
        <DataGrid
          data={dataWithFullSpan}
          columns={columnsWithFullSpan}
          enableRowSelection
        />
      )

      const checkboxes = screen.getAllByRole('checkbox')

      userEvent.click(checkboxes[1], {
        pointerEventsCheck: PointerEventsCheckLevel.Never,
      })

      await hackyWaitFor()

      expect(checkboxes[1]).toBeChecked()

      const fullSpanRows = screen.getAllByText('Full Span Content')
      fullSpanRows.forEach((row) => {
        expect(
          within(row.closest('tr') as HTMLElement).queryByRole('checkbox')
        ).not.toBeInTheDocument()
      })
    })

    it('renders multiple fullSpanColumn cells correctly', () => {
      const columnsWithMultipleFullSpan = [
        {
          accessorKey: 'first',
          header: 'First',
          cell: (info) => info.getValue(),
        },
        {
          accessorKey: 'second',
          header: 'Second',
          cell: (info) => info.getValue(),
        },
        {
          id: 'fullSpan1',
          header: 'Full Span 1',
          cell: () => 'Full Span Content 1',
          meta: { fullSpanColumn: true },
        },
        {
          id: 'fullSpan2',
          header: 'Full Span 2',
          cell: () => 'Full Span Content 2',
          meta: { fullSpanColumn: true },
        },
      ]

      const dataWithMultipleFullSpan = [
        {
          first: 'a1',
          second: 'a2',
        },
        {
          first: 'b1',
          second: 'b2',
        },
      ]

      render(
        <DataGrid
          data={dataWithMultipleFullSpan}
          columns={columnsWithMultipleFullSpan}
        />
      )

      const rows = screen.getAllByRole('row')

      // Expected: 1 header row + 2 * (1 normal row + 2 fullSpan rows) = 7 rows total
      expect(rows).toHaveLength(7)

      // Check normal rows
      expect(within(rows[1]).getByText('a1')).toBeInTheDocument()
      expect(within(rows[1]).getByText('a2')).toBeInTheDocument()
      expect(within(rows[4]).getByText('b1')).toBeInTheDocument()
      expect(within(rows[4]).getByText('b2')).toBeInTheDocument()

      // Check fullSpan rows
      expect(
        within(rows[2]).getByText('Full Span Content 1')
      ).toBeInTheDocument()
      expect(
        within(rows[3]).getByText('Full Span Content 2')
      ).toBeInTheDocument()
      expect(
        within(rows[5]).getByText('Full Span Content 1')
      ).toBeInTheDocument()
      expect(
        within(rows[6]).getByText('Full Span Content 2')
      ).toBeInTheDocument()

      // Check that fullSpan cells are in separate rows
      expect(
        within(rows[2]).queryByText('Full Span Content 2')
      ).not.toBeInTheDocument()
      expect(
        within(rows[3]).queryByText('Full Span Content 1')
      ).not.toBeInTheDocument()
      expect(
        within(rows[5]).queryByText('Full Span Content 2')
      ).not.toBeInTheDocument()
      expect(
        within(rows[6]).queryByText('Full Span Content 1')
      ).not.toBeInTheDocument()

      // Check colspan for fullSpan cells (should be 2 for normal columns)
      const fullSpanCells = screen.getAllByText(/Full Span Content [12]/)
      fullSpanCells.forEach((cell) => {
        expect(cell.closest('td')).toHaveAttribute('colspan', '2')
      })
    })
  })

  describe('with column filtering', () => {
    const columnsWithFiltering: ColumnDef<DataRow>[] = [
      {
        accessorKey: 'first',
        header: 'First',
        cell: (info) => info.getValue(),
        enableColumnFilter: true,
      },
      {
        accessorKey: 'second',
        header: 'Second',
        cell: (info) => info.getValue(),
        enableColumnFilter: true,
      },
      {
        accessorKey: 'third',
        header: 'Third',
        cell: (info) => info.getValue(),
        enableColumnFilter: false,
      },
      {
        accessorKey: 'numeric',
        header: 'Numeric',
        cell: (info) => info.getValue(),
        enableColumnFilter: true,
        filterFn: 'equalsString',
      },
    ]

    const dataWithFiltering = [
      { first: 'alpha', second: 'bravo', third: 'charlie', numeric: 11 },
      { first: 'delta', second: 'echo', third: 'foxtrot', numeric: 111 },
      { first: 'golf', second: 'hotel', third: 'india', numeric: 3 },
    ]

    it('renders filter buttons for columns with enableColumnFilter', () => {
      render(
        <DataGrid data={dataWithFiltering} columns={columnsWithFiltering} />
      )

      const filterButtons = screen.getAllByRole('button', { name: /filter/i })
      expect(filterButtons).toHaveLength(3)
    })

    it('opens filter input when filter button is clicked', async () => {
      render(
        <DataGrid data={dataWithFiltering} columns={columnsWithFiltering} />
      )

      const firstColumnFilterButton = screen.getByRole('button', {
        name: 'Filter First',
      })
      userEvent.click(firstColumnFilterButton)

      await hackyWaitFor()

      const filterInput = screen.getByPlaceholderText('Filter First')
      expect(filterInput).toBeInTheDocument()
    })

    it('filters numeric data', async () => {
      render(
        <DataGrid data={dataWithFiltering} columns={columnsWithFiltering} />
      )

      const filterButton = screen.getByRole('button', {
        name: 'Filter Numeric',
      })
      userEvent.click(filterButton)

      await hackyWaitFor()

      const filterInput = screen.getByPlaceholderText('Filter Numeric')
      userEvent.type(filterInput, '11')

      await hackyWaitFor()

      const rows = screen.getAllByRole('row')
      expect(rows).toHaveLength(2) // Header row + 1 data row
    })

    it('filters data when input is provided', async () => {
      render(
        <DataGrid data={dataWithFiltering} columns={columnsWithFiltering} />
      )

      const firstColumnFilterButton = screen.getByRole('button', {
        name: 'Filter First',
      })
      userEvent.click(firstColumnFilterButton)

      await hackyWaitFor()

      const filterInput = screen.getByPlaceholderText('Filter First')
      userEvent.type(filterInput, 'alpha')

      await hackyWaitFor()

      const rows = screen.getAllByRole('row')
      expect(rows).toHaveLength(2) // Header row + 1 data row
      expect(within(rows[1]).getByText('alpha')).toBeInTheDocument()
      expect(screen.queryByText('delta')).not.toBeInTheDocument()
      expect(screen.queryByText('golf')).not.toBeInTheDocument()
    })

    it('shows all data when filter is cleared', async () => {
      render(
        <DataGrid data={dataWithFiltering} columns={columnsWithFiltering} />
      )

      const firstColumnFilterButton = screen.getByRole('button', {
        name: 'Filter First',
      })
      userEvent.click(firstColumnFilterButton)

      await hackyWaitFor()

      const filterInput = screen.getByPlaceholderText('Filter First')
      userEvent.type(filterInput, 'alpha')

      await hackyWaitFor()

      userEvent.clear(filterInput)

      await hackyWaitFor()

      const rows = screen.getAllByRole('row')
      expect(screen.getByText('alpha')).toBeInTheDocument()
      expect(screen.getByText('delta')).toBeInTheDocument()
      expect(screen.getByText('golf')).toBeInTheDocument()
      expect(rows).toHaveLength(4) // Header row + 3 data rows
    })

    it('does not render filter button for columns with enableColumnFilter set to false', () => {
      render(
        <DataGrid data={dataWithFiltering} columns={columnsWithFiltering} />
      )

      const filterThirdButton = screen.queryByRole('button', {
        name: 'Filter Third',
      })
      expect(filterThirdButton).not.toBeInTheDocument()
    })

    it('applies multiple filters correctly', async () => {
      render(
        <DataGrid data={dataWithFiltering} columns={columnsWithFiltering} />
      )

      const firstColumnFilterButton = screen.getByRole('button', {
        name: 'Filter First',
      })
      userEvent.click(firstColumnFilterButton)

      await hackyWaitFor()

      const firstFilterInput = screen.getByPlaceholderText('Filter First')
      userEvent.type(firstFilterInput, 'alpha')

      await hackyWaitFor()

      const secondColumnFilterButton = screen.getByRole('button', {
        name: 'Filter Second',
      })
      userEvent.click(secondColumnFilterButton)

      await hackyWaitFor()

      const secondFilterInput = screen.getByPlaceholderText('Filter Second')
      userEvent.type(secondFilterInput, 'bravo')

      await hackyWaitFor()

      const rows = screen.getAllByRole('row')
      expect(rows).toHaveLength(2) // Header row + 1 data row
      expect(within(rows[1]).getByText('alpha')).toBeInTheDocument()
      expect(within(rows[1]).getByText('bravo')).toBeInTheDocument()
      expect(screen.queryByText('delta')).not.toBeInTheDocument()
      expect(screen.queryByText('golf')).not.toBeInTheDocument()
    })

    it('calls onColumnFiltersChange when a filter is applied', async () => {
      const onColumnFiltersChange = jest.fn()
      render(
        <DataGrid
          data={dataWithFiltering}
          columns={columnsWithFiltering}
          onColumnFiltersChange={onColumnFiltersChange}
        />
      )

      const firstColumnFilterButton = screen.getByRole('button', {
        name: 'Filter First',
      })
      userEvent.click(firstColumnFilterButton)

      await hackyWaitFor()

      const filterInput = screen.getByPlaceholderText('Filter First')
      userEvent.type(filterInput, 'alpha')

      await hackyWaitFor()

      expect(onColumnFiltersChange).toHaveBeenCalledWith([
        { id: 'first', value: 'alpha' },
      ])
    })

    it('calls onColumnFiltersChange when a filter is cleared', async () => {
      const onColumnFiltersChange = jest.fn()
      render(
        <DataGrid
          data={dataWithFiltering}
          columns={columnsWithFiltering}
          onColumnFiltersChange={onColumnFiltersChange}
        />
      )

      const firstColumnFilterButton = screen.getByRole('button', {
        name: 'Filter First',
      })
      userEvent.click(firstColumnFilterButton)

      await hackyWaitFor()

      const filterInput = screen.getByPlaceholderText('Filter First')
      userEvent.type(filterInput, 'alpha')

      await hackyWaitFor()

      expect(onColumnFiltersChange).toHaveBeenCalledWith([
        { id: 'first', value: 'alpha' },
      ])

      userEvent.clear(filterInput)

      await hackyWaitFor()

      expect(onColumnFiltersChange).toHaveBeenCalledWith([])
    })

    it('calls onColumnFiltersChange with multiple filters', async () => {
      const onColumnFiltersChange = jest.fn()
      render(
        <DataGrid
          data={dataWithFiltering}
          columns={columnsWithFiltering}
          onColumnFiltersChange={onColumnFiltersChange}
        />
      )

      const firstColumnFilterButton = screen.getByRole('button', {
        name: 'Filter First',
      })
      userEvent.click(firstColumnFilterButton)

      await hackyWaitFor()

      const firstFilterInput = screen.getByPlaceholderText('Filter First')
      userEvent.type(firstFilterInput, 'alpha')

      await hackyWaitFor()

      expect(onColumnFiltersChange).toHaveBeenCalledWith([
        { id: 'first', value: 'alpha' },
      ])

      const secondColumnFilterButton = screen.getByRole('button', {
        name: 'Filter Second',
      })
      userEvent.click(secondColumnFilterButton)

      await hackyWaitFor()

      const secondFilterInput = screen.getByPlaceholderText('Filter Second')
      userEvent.type(secondFilterInput, 'bravo')

      await hackyWaitFor()

      expect(onColumnFiltersChange).toHaveBeenCalledWith([
        { id: 'first', value: 'alpha' },
        { id: 'second', value: 'bravo' },
      ])
    })
  })

  describe('with manual sorting', () => {
    it('updates sort icons and maintains correct sorting state', async () => {
      const mockOnSortingChange = jest.fn()
      const TestComponent = () => {
        const [sorting, setSorting] = useState<SortingState>([])

        const handleSortingChange = (
          updaterOrValue: SortingState | ((prev: SortingState) => SortingState)
        ) => {
          const newSorting =
            typeof updaterOrValue === 'function'
              ? updaterOrValue(sorting)
              : updaterOrValue

          setSorting(newSorting)
          mockOnSortingChange(newSorting)
        }

        return (
          <DataGrid
            data={data}
            columns={columns}
            manualSorting
            onSortingChange={handleSortingChange}
            sorting={sorting}
          />
        )
      }

      render(<TestComponent />)

      const firstColumnHeader = screen.getByRole('columnheader', {
        name: 'First',
      })
      const sortButton = within(firstColumnHeader).getByRole('button')

      expect(
        within(firstColumnHeader).getByTestId('unsorted')
      ).toBeInTheDocument()
      expect(mockOnSortingChange).not.toHaveBeenCalled()

      userEvent.click(sortButton)
      await hackyWaitFor()
      expect(
        within(firstColumnHeader).getByTestId('ascending')
      ).toBeInTheDocument()
      expect(mockOnSortingChange).toHaveBeenCalledWith([
        { id: 'first', desc: false },
      ])

      userEvent.click(sortButton)
      await hackyWaitFor()
      expect(
        within(firstColumnHeader).getByTestId('descending')
      ).toBeInTheDocument()
      expect(mockOnSortingChange).toHaveBeenCalledWith([
        { id: 'first', desc: true },
      ])

      userEvent.click(sortButton)
      await hackyWaitFor()
      expect(
        within(firstColumnHeader).getByTestId('unsorted')
      ).toBeInTheDocument()
      expect(mockOnSortingChange).toHaveBeenCalledWith([])

      expect(mockOnSortingChange).toHaveBeenCalledTimes(3)
    })

    it('handles multiple column sorting correctly', async () => {
      const mockOnSortingChange = jest.fn()
      const TestComponent = () => {
        const [sorting, setSorting] = useState<SortingState>([])

        const handleSortingChange = (
          updaterOrValue: SortingState | ((prev: SortingState) => SortingState)
        ) => {
          const newSorting =
            typeof updaterOrValue === 'function'
              ? updaterOrValue(sorting)
              : updaterOrValue
          setSorting(newSorting)
          mockOnSortingChange(newSorting)
        }

        return (
          <DataGrid
            data={data}
            columns={columns}
            manualSorting
            onSortingChange={handleSortingChange}
            sorting={sorting}
          />
        )
      }

      render(<TestComponent />)

      const firstColumnHeader = screen.getByRole('columnheader', {
        name: 'First',
      })
      const thirdColumnHeader = screen.getByRole('columnheader', {
        name: 'Third',
      })

      userEvent.click(within(firstColumnHeader).getByRole('button'))
      await hackyWaitFor()
      expect(
        within(firstColumnHeader).getByTestId('ascending')
      ).toBeInTheDocument()
      expect(
        within(thirdColumnHeader).getByTestId('unsorted')
      ).toBeInTheDocument()
      expect(mockOnSortingChange).toHaveBeenLastCalledWith([
        { id: 'first', desc: false },
      ])

      userEvent.click(within(thirdColumnHeader).getByRole('button'))
      await hackyWaitFor()
      expect(
        within(firstColumnHeader).getByTestId('unsorted')
      ).toBeInTheDocument()
      expect(
        within(thirdColumnHeader).getByTestId('ascending')
      ).toBeInTheDocument()
      expect(mockOnSortingChange).toHaveBeenLastCalledWith([
        { id: 'third', desc: false },
      ])
    })
  })

  describe('with manual pagination', () => {
    const paginatedTestData = [
      { first: 'page1-item1', second: 'a2', third: 'a3' },
      { first: 'page1-item2', second: 'b2', third: 'b3' },
      { first: 'page1-item3', second: 'c2', third: 'c3' },
      { first: 'page2-item1', second: 'd2', third: 'd3' },
      { first: 'page2-item2', second: 'e2', third: 'e3' },
      { first: 'page2-item3', second: 'f2', third: 'f3' },
      { first: 'page3-item1', second: 'g2', third: 'g3' },
      { first: 'page3-item2', second: 'h2', third: 'h3' },
      { first: 'page3-item3', second: 'i2', third: 'i3' },
    ]

    it('handles pagination correctly with external state and changes displayed data', async () => {
      const pageSize = 3
      const pageCount = 3

      function TestComponent() {
        const [pageData, setPageData] = useState(
          paginatedTestData.slice(0, pageSize)
        )
        const [pagination, setPagination] = useState<PaginationState>({
          pageIndex: 0,
          pageSize,
        })

        const handlePaginationChange = (
          updaterOrValue:
            | PaginationState
            | ((prev: PaginationState) => PaginationState)
        ) => {
          const newPagination =
            typeof updaterOrValue === 'function'
              ? updaterOrValue(pagination)
              : updaterOrValue

          setPagination(newPagination)

          const startIndex = newPagination.pageIndex * pageSize
          const endIndex = startIndex + pageSize
          setPageData(paginatedTestData.slice(startIndex, endIndex))
        }

        return (
          <DataGrid
            data={pageData}
            columns={columns}
            manualPagination
            pageSize={pageSize}
            pageCount={pageCount}
            onPaginationChange={handlePaginationChange}
            pagination={pagination}
          />
        )
      }

      render(<TestComponent />)

      // Check initial render shows first page data
      expect(screen.getByText('page1-item1')).toBeInTheDocument()
      expect(screen.getByText('page1-item2')).toBeInTheDocument()
      expect(screen.getByText('page1-item3')).toBeInTheDocument()
      expect(screen.queryByText('page2-item1')).not.toBeInTheDocument()

      // Test clicking the next page button
      const nextPageButton = screen.getByRole('button', { name: 'Next page' })
      userEvent.click(nextPageButton)
      await hackyWaitFor()

      // Check that second page data is now displayed
      expect(screen.getByText('page2-item1')).toBeInTheDocument()
      expect(screen.getByText('page2-item2')).toBeInTheDocument()
      expect(screen.getByText('page2-item3')).toBeInTheDocument()

      // First page data should no longer be visible
      expect(screen.queryByText('page1-item1')).not.toBeInTheDocument()
      expect(screen.queryByText('page1-item3')).not.toBeInTheDocument()

      // Go to third page
      userEvent.click(nextPageButton)
      await hackyWaitFor()

      // Check that third page data is now displayed
      expect(screen.getByText('page3-item1')).toBeInTheDocument()
      expect(screen.getByText('page3-item2')).toBeInTheDocument()
      expect(screen.getByText('page3-item3')).toBeInTheDocument()

      // Second page data should no longer be visible
      expect(screen.queryByText('page2-item1')).not.toBeInTheDocument()
      expect(screen.queryByText('page2-item3')).not.toBeInTheDocument()
    })

    it('calls onPaginationChange with the correct page index and page size when rows per page is changed', async () => {
      const onPaginationChangeSpy = jest.fn()

      render(
        <DataGrid
          columns={columns}
          data={paginatedTestData}
          manualPagination
          onPaginationChange={onPaginationChangeSpy}
          pagination={{
            pageIndex: 0,
            pageSize: 5,
          }}
        />
      )

      await userEvent.click(screen.getByTestId('select-arrow-button'))

      const options = screen.getAllByRole('option')

      await userEvent.click(options[1])

      expect(onPaginationChangeSpy).toHaveBeenCalledWith({
        pageIndex: 0,
        pageSize: 250,
      })
    })
  })

  describe('loading state', () => {
    it('should render ProgressIndicator when isLoading is true', () => {
      render(<DataGrid data={data} columns={columns} isLoading />)

      expect(screen.getByTestId('progress-indicator')).toBeInTheDocument()
      expect(screen.getByTestId('loader')).toBeInTheDocument()
      expect(screen.getByText('Loading...')).toBeInTheDocument()
    })

    it('should not render ProgressIndicator when isLoading is false', () => {
      render(<DataGrid data={data} columns={columns} isLoading={false} />)

      expect(screen.queryByTestId('progress-indicator')).not.toBeInTheDocument()
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    })

    it('should render loading overlay only over the data grid and not the pagination', async () => {
      render(<DataGrid data={data} columns={columns} pageSize={10} isLoading />)

      // Verify that the progress indicator is present
      expect(screen.getByTestId('progress-indicator')).toBeInTheDocument()

      // Check that pagination controls are still clickable/visible
      expect(
        screen.getByRole('button', { name: 'Next page' })
      ).toBeInTheDocument()
    })

    it('should contain loading overlay within the table container', () => {
      const { container } = render(
        <DataGrid data={data} columns={columns} pageSize={10} isLoading />
      )

      const tableContainer = container.querySelector(
        'div[class^="StyledTableContainer"]'
      ) as HTMLElement
      const loadingOverlay = container.querySelector(
        'div[class^="StyledLoadingOverlay"]'
      ) as HTMLElement

      expect(tableContainer).toContainElement(loadingOverlay)
    })
  })

  describe('rows per page', () => {
    it('updates the page size when the rows per page component is changed', async () => {
      render(<DataGrid data={PAGINATED_DATA} columns={columns} />)

      await userEvent.click(screen.getByTestId('select-arrow-button'))

      const options = screen.getAllByRole('option')

      await userEvent.click(options[1])

      expect(screen.getByLabelText('Enter page number')).toHaveValue('1')
      expect(screen.getByText('of 4')).toBeInTheDocument()
    })

    it('resets to the first page when the rows per page component is changed', async () => {
      render(<DataGrid data={PAGINATED_DATA} columns={columns} />)

      await userEvent.click(screen.getByLabelText('Next page'))

      expect(screen.getByLabelText('Enter page number')).toHaveValue('2')

      await userEvent.click(screen.getByTestId('select-arrow-button'))

      const options = screen.getAllByRole('option')

      await userEvent.click(options[1])

      expect(screen.getByLabelText('Enter page number')).toHaveValue('1')
      expect(screen.getByText('of 4')).toBeInTheDocument()
    })
  })

  describe('Layout', () => {
    it('should expand the container when layout is autoHeight', () => {
      const { container } = render(
        <DataGrid data={data} columns={columns} pageSize={0} isLoading />
      )

      expect(
        within(container).getByTestId('styled-datagrid')
      ).not.toHaveStyleRule('height', '100%')

      expect(
        within(container).getByTestId('styled-tablehead')
      ).not.toHaveStyleRule('position', 'sticky')
    })

    it('should not expand when layout is normal', () => {
      const { container } = render(
        <DataGrid
          data={data}
          columns={columns}
          pageSize={0}
          isLoading
          isFullWidth
          layout="scroll"
        />
      )

      expect(within(container).getByTestId('styled-datagrid')).toHaveStyleRule(
        'height',
        '100%'
      )

      expect(within(container).getByTestId('styled-tablehead')).toHaveStyleRule(
        'position',
        'sticky'
      )
    })
  })

  describe('with showRowsPerPageItemRange', () => {
    const largeData = Array.from({ length: 1500 }, (_, i) => ({
      first: `a${i + 1}`,
      second: `b${i + 1}`,
      third: `c${i + 1}`,
    }))

    it('shows the item range text when showRowsPerPageItemRange is true', () => {
      render(
        <DataGrid columns={columns} data={largeData} showRowsPerPageItemRange />
      )

      expect(screen.getByText(/Showing/)).toBeInTheDocument()
      expect(screen.getByText('1')).toBeInTheDocument()
      expect(screen.getByText('50')).toBeInTheDocument()
      expect(screen.getByText('1500')).toBeInTheDocument()
    })

    it('does not show the item range text when showRowsPerPageItemRange is false', () => {
      render(
        <DataGrid
          columns={columns}
          data={largeData}
          showRowsPerPageItemRange={false}
        />
      )

      expect(screen.queryByText(/Showing/)).not.toBeInTheDocument()
    })

    it('updates the item range when changing pages', async () => {
      render(
        <DataGrid columns={columns} data={largeData} showRowsPerPageItemRange />
      )

      // Initially showing 1 to 50 (default page size)
      expect(screen.getByText('1')).toBeInTheDocument()
      expect(screen.getByText('50')).toBeInTheDocument()

      // Go to next page
      await userEvent.click(screen.getByRole('button', { name: 'Next page' }))

      // Now showing 11 to 20
      expect(screen.getByText('51')).toBeInTheDocument()
      expect(screen.getByText('100')).toBeInTheDocument()
    })

    it('updates the item range when changing rows per page', async () => {
      render(
        <DataGrid columns={columns} data={largeData} showRowsPerPageItemRange />
      )

      // Initially showing 1 to 50
      expect(screen.getByText('1')).toBeInTheDocument()
      expect(screen.getByText('50')).toBeInTheDocument()

      // Change to 250 rows per page
      await userEvent.click(screen.getByTestId('select-arrow-button'))
      const options = screen.getAllByRole('option')
      await userEvent.click(options[1]) // 250

      // Now showing 1 to 250
      expect(screen.getByText('1')).toBeInTheDocument()
      expect(screen.getByText('250')).toBeInTheDocument()
    })

    it('works with manual pagination', () => {
      const totalItems = 134
      const pageSize = 25
      const currentPage = 2
      const pageCount = Math.ceil(totalItems / pageSize)

      render(
        <DataGrid
          columns={columns}
          data={largeData.slice(
            (currentPage - 1) * pageSize,
            currentPage * pageSize
          )}
          showRowsPerPageItemRange
          manualPagination
          pagination={{
            pageIndex: currentPage - 1,
            pageSize,
          }}
          pageCount={pageCount}
          totalCount={totalItems}
          onPaginationChange={jest.fn()}
        />
      )

      // Should show 26 to 50 of 134 with totalCount prop
      expect(screen.getByText(/Showing/)).toBeInTheDocument()
      expect(screen.getByText('26')).toBeInTheDocument()
      expect(screen.getByText('50')).toBeInTheDocument()
      expect(screen.getByText('134')).toBeInTheDocument()
    })
  })
})
