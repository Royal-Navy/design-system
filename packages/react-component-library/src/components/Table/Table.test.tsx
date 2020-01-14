import '@testing-library/jest-dom/extend-expect'
import React, { useState } from 'react'
import { render, RenderResult, waitForElementToBeRemoved } from '@testing-library/react'

import { Badge, Button } from '..'
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

    it('should style the table wrapper', () => {
      expect(wrapper.getByTestId('table-wrapper').classList).toContain('rn-table__wrapper')
    })

    it('should style the table', () => {
      expect(wrapper.getByTestId('table').classList).toContain('rn-table')
    })

    it('should render three table header cells', () => {
      expect(wrapper.queryAllByTestId('table-header')).toHaveLength(3)
    })

    it('should render TH for header cells', () => {
      const firstHeaderCell = wrapper.getByText('First')
      expect(firstHeaderCell.tagName).toEqual('TH')
    })

    it('should render three rows', () => {
      expect(wrapper.queryAllByTestId('table-row')).toHaveLength(3)
    })

    it('should render TD for data cells', () => {
      const firstDataCell = wrapper.getByText('a1')
      expect(firstDataCell.tagName).toEqual('TD')
    })
  })

  describe('when a cell contains arbitrary cell content', () => {
    beforeEach(() => {
      const tableDataMock = [
        {
          id: 'a',
          first: 'a1',
          second: <Badge>a2</Badge>,
        },
        {
          id: 'b',
          first: 'b1',
          second: <Badge>b2</Badge>,
        },
      ]

      wrapper = render(
        <Table data={tableDataMock}>
          <TableColumn field="first">First</TableColumn>
          <TableColumn field="second">Second</TableColumn>
        </Table>
      )
    })

    it('should render the arbitrary cell content', () => {
      const firstDataCell = wrapper.getByText('a2')
      expect(firstDataCell.tagName).toEqual('SPAN')
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

    it('should give the sortable table headers the "sortable" class', () => {
      expect(wrapper.getByText('First').classList).toContain('is-sortable')
      expect(wrapper.getByText('Third').classList).toContain('is-sortable')
    })

    it('should not give the unsortable table headers the "sortable" class', () => {
      expect(wrapper.getByText('Second').classList).not.toContain('sortable')
    })

    it('should have sort icons', () => {
      expect(wrapper.queryAllByTestId('unsorted').length).toEqual(2)
      expect(wrapper.queryAllByTestId('descending').length).toEqual(0)
      expect(wrapper.queryAllByTestId('ascending').length).toEqual(0)
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

      return waitForElementToBeRemoved(() =>
        wrapper.queryAllByText('c1')
      )
    })

    it('should update the table data', () => {
      const rows = wrapper.queryAllByTestId('table-row')
      expect(rows).toHaveLength(2)
    })
  })
})
