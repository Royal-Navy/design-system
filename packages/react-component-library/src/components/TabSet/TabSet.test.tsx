import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { TabSet, Tab } from '.'

describe('TabSet', () => {
  let wrapper: RenderResult
  let onChangeSpy: jest.SpyInstance

  describe('when the tab set is not scrollable', () => {
    describe('when all props are provided', () => {
      beforeEach(() => {
        const props = {
          className: 'rn-tab-set--modifier',
          onChangeCallback: () => {},
        }

        onChangeSpy = jest.spyOn(props, 'onChangeCallback')

        wrapper = render(
          <TabSet {...props}>
            <Tab title="Title 1">Content 1</Tab>
            <Tab title="Title 2">Content 2</Tab>
          </TabSet>
        )
      })

      it('should add the class name', () => {
        expect(wrapper.getByTestId('tab-set').classList).toContain(
          'rn-tab-set--modifier'
        )
      })

      it('should output the correct number of tabs', () => {
        expect(wrapper.queryAllByTestId('tab').length).toEqual(2)
      })

      it('should output the correct number of content panels', () => {
        expect(wrapper.queryAllByTestId('content').length).toEqual(2)
      })

      describe('when the user clicks on a tab', () => {
        beforeEach(() => {
          wrapper.getByText('Title 2').click()
        })

        it('should apply the `is-active` class to the appropriate tab', () => {
          expect(
            wrapper.getByText('Title 2').parentElement.classList
          ).toContain('is-active')
        })

        it('should invoke the onChangeCallback function', () => {
          expect(onChangeSpy).toHaveBeenCalledTimes(1)
          expect(onChangeSpy).toHaveBeenCalledWith(1)
        })
      })
    })

    describe('when the onChangeCallback is not provided', () => {
      beforeEach(() => {
        wrapper = render(
          <TabSet>
            <Tab title="Title 1">Content 1</Tab>
            <Tab title="Title 2">Content 2</Tab>
          </TabSet>
        )
      })

      describe('when the user clicks on a tab', () => {
        beforeEach(() => {
          wrapper.getByText('Title 2').click()
        })

        it('should apply the `is-active` class to the appropriate tab', () => {
          expect(
            wrapper.getByText('Title 2').parentElement.classList
          ).toContain('is-active')
        })
      })
    })

    describe('when tabs contain elements', () => {
      beforeEach(() => {
        wrapper = render(
          <TabSet>
            <Tab title={<span>Title 1</span>}>
              <p>Content 1</p>
            </Tab>
            <Tab title={<span>Title 2</span>}>
              <p>Content 2</p>
            </Tab>
          </TabSet>
        )
      })

      it('should render the elements', () => {
        expect(wrapper.getByText('Title 1')).toBeInTheDocument()
        expect(wrapper.getByText('Content 1')).toBeInTheDocument()
        expect(wrapper.getByText('Title 2')).toBeInTheDocument()
        expect(wrapper.getByText('Content 2')).toBeInTheDocument()
      })
    })
  })

  describe('when the tab set is scrollable', () => {
    let scrollToSpy: jest.SpyInstance

    beforeEach(() => {
      wrapper = render(
        <TabSet scrollable>
          <Tab title="Title 1">Content 1</Tab>
          <Tab title="Title 2">Content 2</Tab>
          <Tab title="Title 3">Content 3</Tab>
        </TabSet>
      )

      const tabs = wrapper.getByTestId('tabs')
      tabs.scrollTo = () => {}
      scrollToSpy = jest.spyOn(tabs, 'scrollTo').mockImplementation(x => {
        Object.defineProperty(tabs, 'scrollLeft', {
          configurable: true,
          value: x,
        })
      })

      Object.defineProperty(tabs, 'offsetLeft', { value: 50 })

      Object.defineProperty(
        wrapper.getByText('Title 1').parentElement.parentElement,
        'offsetLeft',
        { value: 150 }
      )
      Object.defineProperty(
        wrapper.getByText('Title 2').parentElement.parentElement,
        'offsetLeft',
        { value: 250 }
      )
      Object.defineProperty(
        wrapper.getByText('Title 3').parentElement.parentElement,
        'offsetLeft',
        { value: 350 }
      )
    })

    it('should present a scroll left button', () => {
      expect(wrapper.getByTestId('scroll-left')).toBeInTheDocument()
    })

    it('should present a scroll right button', () => {
      expect(wrapper.getByTestId('scroll-right')).toBeInTheDocument()
    })

    describe('when scrolling right', () => {
      describe('when the scroll right button is clicked twice', () => {
        beforeEach(() => {
          wrapper.getByTestId('scroll-right').click()
          wrapper.getByTestId('scroll-right').click()
        })

        it('should scroll the tabs twice', () => {
          expect(scrollToSpy).toHaveBeenCalledTimes(2)
          expect(scrollToSpy).toHaveBeenCalledWith(200, 0)
          expect(scrollToSpy).toHaveBeenCalledWith(300, 0)
        })
      })

      describe('when the scroll right button is clicked three times (once more than available tabs)', () => {
        beforeEach(() => {
          wrapper.getByTestId('scroll-right').click()
          wrapper.getByTestId('scroll-right').click()
          wrapper.getByTestId('scroll-right').click()
        })

        it('should scroll the tabs only twice', () => {
          expect(scrollToSpy).toHaveBeenCalledTimes(2)
        })
      })
    })

    describe('when scrolling left', () => {
      describe('when scroll right and scroll left buttons are each clicked once', () => {
        beforeEach(() => {
          wrapper.getByTestId('scroll-right').click()
          wrapper.getByTestId('scroll-left').click()
        })

        it('should scroll the tabs twice', () => {
          expect(scrollToSpy).toHaveBeenCalledTimes(2)
          expect(scrollToSpy).toHaveBeenCalledWith(200, 0)
          expect(scrollToSpy).toHaveBeenCalledWith(100, 0)
        })
      })

      describe('when scroll right button is clicked once and scroll left is clicked twice', () => {
        beforeEach(() => {
          wrapper.getByTestId('scroll-right').click()
          wrapper.getByTestId('scroll-left').click()
          wrapper.getByTestId('scroll-left').click()
        })

        it('should scroll the tabs twice', () => {
          expect(scrollToSpy).toHaveBeenCalledTimes(2)
          expect(scrollToSpy).toHaveBeenCalledWith(200, 0)
          expect(scrollToSpy).toHaveBeenCalledWith(100, 0)
        })
      })
    })
  })
})
