import React from 'react'
import { render, fireEvent, RenderResult } from '@testing-library/react'

import Pagination from './index'

describe('Pagination', () => {
  let pagination: RenderResult
  let onChangeCallback: () => void

  describe('when the Pagination is generated with only 2 records and pageSize is 10', () => {
    onChangeCallback = jest.fn()

    beforeEach(() => {
      pagination = render(
        <Pagination
          onChangeCallback={onChangeCallback}
          pageSize={10}
          total={2}
        />
      )
    })

    it('should output a single page', () => {
      expect(pagination.queryAllByTestId('page').length).toEqual(1)
    })

    it('should disable both the left and right buttons', () => {
      expect(
        pagination.getByTestId('button-previous').hasAttribute('disabled')
      ).toBeTruthy()

      expect(
        pagination.getByTestId('button-next').hasAttribute('disabled')
      ).toBeTruthy()
    })
  })

  describe('when the Pagination is generated with 20 records and pageSize is 10', () => {
    onChangeCallback = jest.fn()

    beforeEach(() => {
      pagination = render(
        <Pagination
          onChangeCallback={onChangeCallback}
          pageSize={10}
          total={20}
        />
      )
    })

    it('should output the correct number of pages', () => {
      expect(pagination.queryAllByTestId('page').length).toEqual(2)
    })
  })

  describe('when the Pagination is generated with pageSize, total and onChangeCallback props', () => {
    onChangeCallback = jest.fn()

    beforeEach(() => {
      pagination = render(
        <Pagination
          onChangeCallback={onChangeCallback}
          pageSize={10}
          total={1000}
        />
      )
    })

    it('should output the correct number of pages', () => {
      expect(pagination.queryAllByTestId('page').length).toEqual(6)
    })

    describe('when the user clicks on a page', () => {
      beforeEach(() => {
        fireEvent(
          pagination.getByTestId('select-page-5'),
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
          })
        )
      })

      it('should apply the `is-active` class to the appropriate page', () => {
        expect(
          pagination
            .getByTestId('select-page-5')
            .classList.contains('is-active')
        ).toBe(true)
      })

      it('should invoke the onChangeCallback function', () => {
        expect(onChangeCallback).toHaveBeenCalledWith(5, 100)
      })
    })
  })
})
