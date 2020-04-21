import React from 'react'
import { render, fireEvent, RenderResult } from '@testing-library/react'

import Pagination from './index'

describe('Pagination', () => {
  let wrapper: RenderResult
  let onChangeSpy: () => void

  describe('when the Pagination is generated with only 2 records and pageSize is 10', () => {
    onChangeSpy = jest.fn()

    beforeEach(() => {
      wrapper = render(
        <Pagination onChange={onChangeSpy} pageSize={10} total={2} />
      )
    })

    it('should output a single page', () => {
      expect(wrapper.queryAllByTestId('page').length).toBe(1)
    })

    it('should disable both the left and right buttons', () => {
      expect(
        wrapper.getByTestId('button-previous').hasAttribute('disabled')
      ).toBeTruthy()

      expect(
        wrapper.getByTestId('button-next').hasAttribute('disabled')
      ).toBeTruthy()
    })
  })

  describe('when the Pagination is generated with 20 records and pageSize is 10', () => {
    onChangeSpy = jest.fn()

    beforeEach(() => {
      wrapper = render(
        <Pagination onChange={onChangeSpy} pageSize={10} total={20} />
      )
    })

    it('should output the correct number of pages', () => {
      expect(wrapper.queryAllByTestId('page').length).toBe(2)
    })
  })

  describe('when the Pagination is generated with pageSize, total and onChange props', () => {
    onChangeSpy = jest.fn()

    beforeEach(() => {
      wrapper = render(
        <Pagination onChange={onChangeSpy} pageSize={10} total={1000} />
      )
    })

    it('should output the correct number of pages', () => {
      expect(wrapper.queryAllByTestId('page').length).toBe(7)
    })

    describe('handle: (1) ... {5 6} [7] {8 9} (10)', () => {
      beforeEach(() => {
        fireEvent(
          wrapper.getByTestId('select-page-100'),
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
          })
        )
      })

      it('should render the three dots in the correct place', () => {
        expect(wrapper.getAllByTestId('page')[1].innerHTML).toContain('...')
        expect(wrapper.queryAllByText('...').length).toBe(1)
      })
    })

    describe('handle: (1) ... {4 5} [6] {7 8} ... (10)', () => {
      beforeEach(() => {
        fireEvent(
          wrapper.getByTestId('select-page-4'),
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
          })
        )
      })

      it('should render the three dots in the correct places', () => {
        expect(wrapper.getAllByTestId('page')[1].innerHTML).toContain('...')
        expect(wrapper.getAllByTestId('page')[5].innerHTML).toContain('...')
        expect(wrapper.queryAllByText('...').length).toBe(2)
      })
    })

    describe('when the user clicks on the right button then the left button', () => {
      beforeEach(() => {
        fireEvent(
          wrapper.getByTestId('button-next'),
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
          })
        )

        fireEvent(
          wrapper.getByTestId('button-previous'),
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
          })
        )
      })

      it('should apply the `is-active` class to the appropriate page', () => {
        expect(
          wrapper.getByTestId('select-page-1').classList.contains('is-active')
        ).toBe(true)
      })

      it('should invoke the onChange function', () => {
        expect(onChangeSpy).toHaveBeenCalledWith(1, 100)
      })
    })

    describe('when the user clicks on the right button', () => {
      beforeEach(() => {
        fireEvent(
          wrapper.getByTestId('button-next'),
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
          })
        )
      })

      it('should apply the `is-active` class to the appropriate page', () => {
        expect(
          wrapper.getByTestId('select-page-2').classList.contains('is-active')
        ).toBe(true)
      })

      it('should invoke the onChange function', () => {
        expect(onChangeSpy).toHaveBeenCalledWith(2, 100)
      })
    })

    describe('when the user clicks on a page', () => {
      beforeEach(() => {
        fireEvent(
          wrapper.getByTestId('select-page-5'),
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
          })
        )
      })

      it('should apply the `is-active` class to the appropriate page', () => {
        expect(
          wrapper.getByTestId('select-page-5').classList.contains('is-active')
        ).toBe(true)
      })

      it('should invoke the onChange function', () => {
        expect(onChangeSpy).toHaveBeenCalledWith(5, 100)
      })
    })
  })
})
