import React from 'react'

import { fireEvent, render, RenderResult } from '@testing-library/react'

import { SearchBar } from '.'

describe('Searchbar', () => {
  let onSearchSpy: (
    event: React.FormEvent<HTMLFormElement>,
    term: string
  ) => void
  let wrapper: RenderResult
  let setShowSearchSpy: (isVisible: boolean) => void

  describe('minimal props', () => {
    beforeEach(() => {
      onSearchSpy = jest.fn()
      setShowSearchSpy = jest.fn()

      const searchButton = {
        current: {
          contains: jest.fn().mockReturnValue(false),
        } as unknown as HTMLElement,
      }

      wrapper = render(
        <SearchBar
          containerWidth={100}
          onSearch={onSearchSpy}
          searchButtonRef={searchButton}
          setShowSearch={setShowSearchSpy}
        />
      )
    })

    it('should render the search bar', () => {
      expect(wrapper.getByTestId('searchbar')).toBeInTheDocument()
    })

    it('should auto focus on the search field', () => {
      expect(wrapper.getByTestId('text-input-input')).toHaveFocus()
    })

    it('should set the `aria-label` attribute to `Search` on the search button', () => {
      expect(wrapper.queryByTestId('searchbar-submit-button')).toHaveAttribute(
        'aria-label',
        'Search'
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
        fireEvent.change(wrapper.getByTestId('text-input-input'), {
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
          expect(onSearchSpy).toHaveBeenCalledWith(
            expect.objectContaining({ _reactName: 'onSubmit' }),
            'A'
          )
        })
      })
    })
  })

  describe('when the user clicks the search button', () => {
    beforeEach(() => {
      const searchButton = {
        current: {
          contains: jest.fn().mockReturnValue(true),
        } as unknown as HTMLElement,
      }

      wrapper = render(
        <SearchBar
          containerWidth={100}
          onSearch={onSearchSpy}
          searchButtonRef={searchButton}
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

  describe('when arbitrary props are specified', () => {
    beforeEach(() => {
      const searchButton = {
        current: {
          contains: jest.fn().mockReturnValue(false),
        } as unknown as HTMLElement,
      }

      wrapper = render(
        <SearchBar
          data-arbitrary="arbitrary"
          containerWidth={100}
          onSearch={onSearchSpy}
          searchButtonRef={searchButton}
          setShowSearch={setShowSearchSpy}
        />
      )
    })

    it('should spread arbitrary props', () => {
      expect(wrapper.getByTestId('searchbar')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary'
      )
    })
  })
})
