import React, { useState } from 'react'
import {
  render,
  screen,
  within,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { ColumnDef } from '@tanstack/react-table'
import { userEvent, PointerEventsCheckLevel } from '@testing-library/user-event'
import { color } from '@royalnavy/design-tokens'

import { DataGrid } from './DataGrid'
import { Button } from '../Button'

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

describe('DataGrid', () => {
  const columns: ColumnDef<DataRow>[] = [
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
    {
      accessorKey: 'third',
      header: 'Third',
      cell: (info) => info.getValue(),
      enableSorting: true,
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

  it('should set the `role` attribute to `grid`', () => {
    render(<DataGrid data={data} columns={columns} />)

    expect(screen.getByRole('grid')).toHaveAttribute('role', 'grid')
  })

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

    describe('when the second cell header is clicked', () => {
      beforeEach(async () => {
        userEvent.click(screen.getByText('Second'))
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

      it('should not change the order of the rows', () => {
        const rows = screen.getAllByRole('row')

        expect(rows[1].children[0].textContent).toEqual('b1')
        expect(rows[2].children[0].textContent).toEqual('a1')
        expect(rows[3].children[0].textContent).toEqual('c1')
      })
    })

    describe('when the first cell header is clicked for the first time', () => {
      beforeEach(async () => {
        userEvent.click(screen.getByText('First'))
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

      describe('when the first cell header is clicked for the second time', () => {
        beforeEach(async () => {
          userEvent.click(screen.getByText('First'))
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

        describe('when the first cell header is clicked for the third time', () => {
          beforeEach(async () => {
            userEvent.click(screen.getByText('First'))
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

    describe('when the first cell header is clicked once and then the third cell header is clicked', () => {
      beforeEach(async () => {
        userEvent.click(screen.getByText('First'))
        await hackyWaitFor()
        userEvent.click(screen.getByText('Third'))
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

      it('should sort the data in descending order of the third column', () => {
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
    const paginatedData = Array.from({ length: 1000 }, (_, i) => ({
      first: `a${i + 1}`,
      second: `b${i + 1}`,
      third: `c${i + 1}`,
    }))

    it('should render the correct rows on initial render', async () => {
      render(<DataGrid data={paginatedData} columns={columns} pageSize={10} />)

      expect(screen.getAllByRole('row')).toHaveLength(11)
      expect(screen.getByText('a1')).toBeVisible()
    })

    it('should render the correct rows when the page is changed', async () => {
      const onPageChangeSpy = jest.fn()

      render(
        <DataGrid
          data={paginatedData}
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

      expect(screen.getAllByRole('row')).toHaveLength(11)

      expect(screen.queryByText('a1')).not.toBeInTheDocument()
      expect(screen.getByText('a11')).toBeVisible()

      expect(onPageChangeSpy).toHaveBeenCalledTimes(1)
      expect(onPageChangeSpy).toHaveBeenCalledWith(expect.any(Object), 2, 100)
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
})
