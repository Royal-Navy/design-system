import React, { useState } from 'react'
import {
  render,
  screen,
  within,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { ColumnDef } from '@tanstack/react-table'
import { userEvent, PointerEventsCheckLevel } from '@testing-library/user-event'
import { selectors } from '@royalnavy/design-tokens'

import { DataGrid } from './DataGrid'
import { Button } from '../Button'

type DataRow = {
  first: string
  second: string
  third: string
}

const { color } = selectors

async function hackyWaitForHook(customDelay?: number) {
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

    await hackyWaitForHook()

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

    await hackyWaitForHook()

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

    await hackyWaitForHook()

    expect(rows[1]).toHaveStyleRule('background-color', color('neutral', '100'))

    userEvent.click(within(rows[1]).getAllByRole('cell')[1], {
      pointerEventsCheck: PointerEventsCheckLevel.Never,
    })

    await hackyWaitForHook()

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

    await hackyWaitForHook()

    expect(onSelectedRowsChange).toHaveBeenCalledTimes(2)
    expect(onSelectedRowsChange).toHaveBeenNthCalledWith(1, [])
    expect(onSelectedRowsChange).toHaveBeenNthCalledWith(2, [data[0]])
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
        await hackyWaitForHook()
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
        await hackyWaitForHook()
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
          await hackyWaitForHook()
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
            await hackyWaitForHook()
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
        await hackyWaitForHook()
        userEvent.click(screen.getByText('Third'))
        await hackyWaitForHook()
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
})
