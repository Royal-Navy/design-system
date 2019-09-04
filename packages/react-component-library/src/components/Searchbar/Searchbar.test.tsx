import 'jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import React from 'react'
import { fireEvent, render, RenderResult, wait } from '@testing-library/react'

import { Searchbar, SearchbarProps } from './index'

const globalAny: any = global

describe('Searchbar', () => {
  let wrapper: RenderResult
  let props: SearchbarProps
  let searchButton

  beforeEach(() => {
    const dom = new JSDOM()
    globalAny.document = dom.window.document
    globalAny.window = dom.window

    searchButton = {
      current: {
        contains: jest.fn().mockReturnValue(false),
      },
    }

    props = {
      onSearch: jest.fn(),
      searchButton,
      searchPlaceholder: 'placeholder',
      setShowSearch: jest.fn(),
    }

    wrapper = render(
      <div>
        <button type="button" data-testid="test-button">
          test
        </button>
        <Searchbar {...props} />
      </div>
    )
  })

  it('should render a search bar', () => {
    expect(wrapper.queryByTestId('searchbar-form')).toBeInTheDocument()
  })

  describe('when the user clicks somewhere on the page', () => {
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
      expect(props.setShowSearch).toBeCalledTimes(1)
      expect(props.setShowSearch).toBeCalledWith(false)
    })
  })

  describe('when then user clicks on the search open/close button', () => {
    beforeEach(() => {
      props.searchButton.current.contains.mockReturnValue(true)

      fireEvent(
        wrapper.queryByTestId('test-button'),
        new MouseEvent('mousedown', {
          bubbles: true,
          cancelable: true,
        })
      )
    })

    it('should not try to hide the searchbar', () => {
      expect(props.setShowSearch).not.toHaveBeenCalled()
    })
  })

  describe('when the user clicks in the searchbar', () => {
    beforeEach(() => {
      fireEvent(
        wrapper.queryByTestId('searchbar-form'),
        new MouseEvent('mousedown', {
          bubbles: true,
          cancelable: true,
        })
      )
    })

    it('should not hide the searchbar', () => {
      expect(props.setShowSearch).not.toHaveBeenCalled()
    })
  })
})
