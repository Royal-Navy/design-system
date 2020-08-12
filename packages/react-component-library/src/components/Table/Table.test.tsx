import '@testing-library/jest-dom/extend-expect'
import React, { useState } from 'react'
import {
  render,
  RenderResult,
  waitForElementToBeRemoved,
} from '@testing-library/react'

import { Button } from '../Button'
import { TableColumn, Table } from '.'

describe('Table', () => {
  let wrapper: RenderResult

  describe('default props', () => {
    beforeEach(() => {
      const tableDataMock = [
        {
          id: 'a',
          first: 'a1',
          second: 'a2',
          third: 'a3',
        },
        {
          id: 'b',
          first: 'b1',
          second: 'b2',
          third: 'b3',
        },
        {
          id: 'c',
          first: 'c1',
          second: 'c2',
          third: 'c3',
        },
      ]

      wrapper = render(
        <Table data={tableDataMock}>
          <TableColumn field="first">First</TableColumn>
          <TableColumn field="second">Second</TableColumn>
          <TableColumn field="third">Third</TableColumn>
        </Table>
      )
    })

    it('should not display the caption', () => {
      expect(wrapper.queryByTestId('table-caption')).not.toBeInTheDocument()
    })

    it('should set the `role` attribute to `grid`', () => {
      expect(wrapper.getByTestId('table')).toHaveAttribute('role', 'grid')
    })

    it('should render three table header cells', () => {
      expect(wrapper.queryAllByTestId('table-header')).toHaveLength(3)
    })

    it('should not set an `aria-sort` attribute on any table header cells', () => {
      const tableHeaderCells = wrapper.queryAllByTestId('table-header')

      tableHeaderCells.forEach((tableHeaderCell) => {
        expect(tableHeaderCell).not.toHaveAttribute('aria-sort')
      })
    })

    it('should render three rows', () => {
      expect(wrapper.queryAllByTestId('table-row')).toHaveLength(3)
    })
  })

  describe('when columns are sortable', () => {
    beforeEach(() => {
      const tableDataMock = [
        {
          id: 'b',
          first: 'b1',
          second: 'b2',
          third: 'c6',
        },
        {
          id: 'a',
          first: 'a1',
          second: 'a2',
          third: 'c5',
        },
        {
          id: 'c',
          first: 'c1',
          second: 'c2',
          third: 'c4',
        },
      ]

      wrapper = render(
        <Table data={tableDataMock}>
          <TableColumn field="first" isSortable>
            First
          </TableColumn>
          <TableColumn field="second">Second</TableColumn>
          <TableColumn field="third" isSortable>
            Third
          </TableColumn>
        </Table>
      )
    })

    it('should have sort icons', () => {
      expect(wrapper.queryAllByTestId('unsorted').length).toEqual(2)
      expect(wrapper.queryAllByTestId('descending').length).toEqual(0)
      expect(wrapper.queryAllByTestId('ascending').length).toEqual(0)
    })

    it('should set the `aria-sort` attribute on the table header cells', () => {
      const tableHeaderCells = wrapper.queryAllByTestId('table-header')

      expect(tableHeaderCells[0]).toHaveAttribute('aria-sort', 'none')
      expect(tableHeaderCells[1]).not.toHaveAttribute('aria-sort')
      expect(tableHeaderCells[2]).toHaveAttribute('aria-sort', 'none')
    })

    describe('when the second cell header is clicked', () => {
      beforeEach(() => {
        wrapper.getByText('Second').click()
      })

      it('should have sort icons', () => {
        expect(wrapper.queryAllByTestId('unsorted').length).toEqual(2)
        expect(wrapper.queryAllByTestId('descending').length).toEqual(0)
        expect(wrapper.queryAllByTestId('ascending').length).toEqual(0)
      })

      it('should set the `aria-sort` attribute on the table header cells', () => {
        const tableHeaderCells = wrapper.queryAllByTestId('table-header')

        expect(tableHeaderCells[0]).toHaveAttribute('aria-sort', 'none')
        expect(tableHeaderCells[1]).not.toHaveAttribute('aria-sort')
        expect(tableHeaderCells[2]).toHaveAttribute('aria-sort', 'none')
      })

      it('should not change the order of the rows', () => {
        const rows = wrapper.getAllByTestId('table-row')
        expect(rows[0].children[0].textContent).toEqual('b1')
        expect(rows[1].children[0].textContent).toEqual('a1')
        expect(rows[2].children[0].textContent).toEqual('c1')
      })
    })

    describe('when the first cell header is clicked for the first time', () => {
      beforeEach(() => {
        wrapper.getByText('First').click()
      })

      it('should have sort icons', () => {
        expect(wrapper.queryAllByTestId('unsorted').length).toEqual(1)
        expect(wrapper.queryAllByTestId('descending').length).toEqual(1)
        expect(wrapper.queryAllByTestId('ascending').length).toEqual(0)
      })

      it('should set the `aria-sort` attribute on the table header cells', () => {
        const tableHeaderCells = wrapper.queryAllByTestId('table-header')

        expect(tableHeaderCells[0]).toHaveAttribute('aria-sort', 'descending')
        expect(tableHeaderCells[1]).not.toHaveAttribute('aria-sort')
        expect(tableHeaderCells[2]).toHaveAttribute('aria-sort', 'none')
      })

      it('should sort the data in descending order of the first column', () => {
        const rows = wrapper.getAllByTestId('table-row')
        expect(rows[0].children[0].textContent).toEqual('c1')
        expect(rows[1].children[0].textContent).toEqual('b1')
        expect(rows[2].children[0].textContent).toEqual('a1')
      })

      describe('when the first cell header is clicked for the second time', () => {
        beforeEach(() => {
          wrapper.getByText('First').click()
        })

        it('should have sort icons', () => {
          expect(wrapper.queryAllByTestId('unsorted').length).toEqual(1)
          expect(wrapper.queryAllByTestId('descending').length).toEqual(0)
          expect(wrapper.queryAllByTestId('ascending').length).toEqual(1)
        })

        it('should set the `aria-sort` attribute on the table header cells', () => {
          const tableHeaderCells = wrapper.queryAllByTestId('table-header')

          expect(tableHeaderCells[0]).toHaveAttribute('aria-sort', 'ascending')
          expect(tableHeaderCells[1]).not.toHaveAttribute('aria-sort')
          expect(tableHeaderCells[2]).toHaveAttribute('aria-sort', 'none')
        })

        it('should sort the data in ascending order of the first column', () => {
          const rows = wrapper.getAllByTestId('table-row')
          expect(rows[0].children[0].textContent).toEqual('a1')
          expect(rows[1].children[0].textContent).toEqual('b1')
          expect(rows[2].children[0].textContent).toEqual('c1')
        })

        describe('when the first cell header is clicked for the third time', () => {
          beforeEach(() => {
            wrapper.getByText('First').click()
          })

          it('should have sort icons', () => {
            expect(wrapper.queryAllByTestId('unsorted').length).toEqual(2)
            expect(wrapper.queryAllByTestId('descending').length).toEqual(0)
            expect(wrapper.queryAllByTestId('ascending').length).toEqual(0)
          })

          it('should set the `aria-sort` attribute on the table header cells', () => {
            const tableHeaderCells = wrapper.queryAllByTestId('table-header')

            expect(tableHeaderCells[0]).toHaveAttribute('aria-sort', 'none')
            expect(tableHeaderCells[1]).not.toHaveAttribute('aria-sort')
            expect(tableHeaderCells[2]).toHaveAttribute('aria-sort', 'none')
          })

          it('should unsort the data in the first column', () => {
            const rows = wrapper.getAllByTestId('table-row')
            expect(rows[0].children[0].textContent).toEqual('b1')
            expect(rows[1].children[0].textContent).toEqual('a1')
            expect(rows[2].children[0].textContent).toEqual('c1')
          })
        })
      })
    })

    describe('when the first cell header is clicked once and then the third cell header is clicked', () => {
      beforeEach(() => {
        wrapper.getByText('First').click()
        wrapper.getByText('Third').click()
      })

      it('should have sort icons', () => {
        expect(wrapper.queryAllByTestId('unsorted').length).toEqual(1)
        expect(wrapper.queryAllByTestId('descending').length).toEqual(1)
        expect(wrapper.queryAllByTestId('ascending').length).toEqual(0)
      })

      it('should set the `aria-sort` attribute on the table header cells', () => {
        const tableHeaderCells = wrapper.queryAllByTestId('table-header')

        expect(tableHeaderCells[0]).toHaveAttribute('aria-sort', 'none')
        expect(tableHeaderCells[1]).not.toHaveAttribute('aria-sort')
        expect(tableHeaderCells[2]).toHaveAttribute('aria-sort', 'descending')
      })

      it('should sort the data in descending order of the third column', () => {
        const rows = wrapper.getAllByTestId('table-row')
        expect(rows[0].children[2].textContent).toEqual('c6')
        expect(rows[1].children[2].textContent).toEqual('c5')
        expect(rows[2].children[2].textContent).toEqual('c4')
      })
    })
  })

  describe('when the data updates externally', () => {
    beforeEach(() => {
      const initialMock = [
        {
          id: 'a',
          first: 'a1',
          second: 'a2',
          third: 'a3',
        },
        {
          id: 'b',
          first: 'b1',
          second: 'b2',
          third: 'b3',
        },
        {
          id: 'c',
          first: 'c1',
          second: 'c2',
          third: 'c3',
        },
      ]
      const updatedMock = [initialMock[0], initialMock[1]]

      const TableWithUpdate = () => {
        const [tableData, updateTableData] = useState(initialMock)

        return (
          <>
            <Button onClick={() => updateTableData(updatedMock)}>Update</Button>
            <Table data={tableData}>
              <TableColumn field="first">First</TableColumn>
              <TableColumn field="second">Second</TableColumn>
              <TableColumn field="third">Third</TableColumn>
            </Table>
          </>
        )
      }

      wrapper = render(<TableWithUpdate />)

      wrapper.getByText('Update').click()

      return waitForElementToBeRemoved(() => wrapper.queryAllByText('c1'))
    })

    it('should update the table data', () => {
      const rows = wrapper.queryAllByTestId('table-row')
      expect(rows).toHaveLength(2)
    })
  })

  describe('when caption is provided', () => {
    beforeEach(() => {
      const tableDataMock = [
        {
          id: 'a',
          first: 'a1',
          second: 'a2',
          third: 'a3',
        },
        {
          id: 'b',
          first: 'b1',
          second: 'b2',
          third: 'b3',
        },
        {
          id: 'c',
          first: 'c1',
          second: 'c2',
          third: 'c3',
        },
      ]

      wrapper = render(
        <Table data={tableDataMock} caption="Hello, World!">
          <TableColumn field="first">First</TableColumn>
          <TableColumn field="second">Second</TableColumn>
          <TableColumn field="third">Third</TableColumn>
        </Table>
      )
    })

    it('should display the caption', () => {
      expect(wrapper.queryByTestId('table-caption')).toBeInTheDocument()
      expect(wrapper.getByTestId('table-caption').innerHTML).toEqual(
        'Hello, World!'
      )
    })
  })
})
