import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, RenderResult } from '@testing-library/react'

import { Searchbar } from './index'

describe('Searchbar', () => {
  let onSearchSpy: (term: string) => void
  let wrapper: RenderResult
  let setShowSearchSpy: (isVisible: boolean) => void

  describe('minimal props', () => {
    beforeEach(() => {
      onSearchSpy = jest.fn()
      setShowSearchSpy = jest.fn()

      const searchButton = {
        current: {
          contains: jest.fn().mockReturnValue(false),
        },
      }

      wrapper = render(
        <Searchbar
          onSearch={onSearchSpy}
          searchButton={searchButton}
          searchPlaceholder="placeholder"
          setShowSearch={setShowSearchSpy}
        />
      )
    })

    it('should render the search bar', () => {
      expect(wrapper.getByTestId('searchbar')).toBeInTheDocument()
    })

    it('should auto focus on the search field', () => {
      expect(wrapper.getByTestId('input')).toHaveFocus()
    })

    it('should render the input with a placeholder', () => {
      expect(wrapper.getByTestId('input')).toHaveAttribute(
        'placeholder',
        'placeholder'
      )
    })

    describe('and the user clicks inside the search field', () => {
      beforeEach(() => {
        fireEvent(
          wrapper.getByTestId('searchbar'),
          new MouseEvent('mousedown', {
            bubbles: true,
            cancelable: true,
          })
        )
      })

      it('should not hide the searchbar', () => {
        expect(setShowSearchSpy).not.toHaveBeenCalled()
      })
    })

    describe('and the user clicks outside the search field', () => {
      beforeEach(() => {
        fireEvent(
          document,
          new MouseEvent('mousedown', {
            bubbles: true,
            cancelable: true,
          })
        )
      })

      it('should hide the searchbar', () => {
        expect(setShowSearchSpy).toHaveBeenCalledTimes(1)
        expect(setShowSearchSpy).toHaveBeenCalledWith(false)
      })
    })

    describe('and the user enters a search term', () => {
      beforeEach(() => {
        fireEvent.change(wrapper.getByTestId('input'), {
          target: {
            value: 'A',
          },
        })
      })

      describe('and the form is submitted', () => {
        beforeEach(() => {
          wrapper.getByTestId('searchbar-submit-button').click()
        })

        it('should call the `onSearch` callback with the search term', () => {
          expect(onSearchSpy).toHaveBeenCalledTimes(1)
          expect(onSearchSpy).toHaveBeenCalledWith('A')
        })
      })
    })
  })

  describe('when the user clicks the search button', () => {
    beforeEach(() => {
      const searchButton = {
        current: {
          contains: jest.fn().mockReturnValue(true),
        },
      }

      wrapper = render(
        <Searchbar
          onSearch={onSearchSpy}
          searchButton={searchButton}
          searchPlaceholder="placeholder"
          setShowSearch={setShowSearchSpy}
        />
      )
    })

    describe('and the user clicks the search open/close button', () => {
      beforeEach(() => {
        onSearchSpy = jest.fn()
        setShowSearchSpy = jest.fn()

        fireEvent(
          document,
          new MouseEvent('mousedown', {
            bubbles: true,
            cancelable: true,
          })
        )
      })

      it('should not hide the searchbar', () => {
        expect(setShowSearchSpy).not.toHaveBeenCalled()
      })
    })
  })
})
