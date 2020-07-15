// @ts-nocheck
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/react'

import { Tab, TabSet } from '.'
import { SCROLL_DIRECTION } from './constants'

function flushPromises() {
  return new Promise((resolve) => setImmediate(resolve))
}

describe('TabSet', () => {
  let wrapper: RenderResult
  let onChangeSpy: jest.SpyInstance

  describe('when the tab set is not scrollable', () => {
    describe('when all props are provided', () => {
      beforeEach(() => {
        const props = {
          className: 'rn-tab-set--modifier',
          onChange: () => {
            return true
          },
        }

        onChangeSpy = jest.spyOn(props, 'onChange')

        wrapper = render(
          <TabSet {...props}>
            <Tab title="Title 1">Content 1</Tab>
            <Tab title="Title 2">Content 2</Tab>
          </TabSet>
        )
      })

      it('should apply the correct roles', () => {
        expect(wrapper.getByTestId('tab-set-list')).toHaveAttribute(
          'role',
          'tablist'
        )

        expect(wrapper.getAllByTestId('tab-set-tab')[0]).toHaveAttribute(
          'role',
          'tab'
        )

        expect(wrapper.getAllByTestId('tab-set-content')[0]).toHaveAttribute(
          'role',
          'tabpanel'
        )
      })

      it('should set the `aria-labelledby` attribute to the ID of the tab', () => {
        const tabId0 = wrapper
          .getAllByTestId('tab-set-tab')[0]
          .getAttribute('aria-controls')

        expect(wrapper.getAllByTestId('tab-set-content')[0]).toHaveAttribute(
          'aria-labelledby',
          tabId0
        )

        const tabId1 = wrapper
          .getAllByTestId('tab-set-tab')[1]
          .getAttribute('aria-controls')

        expect(wrapper.getAllByTestId('tab-set-content')[1]).toHaveAttribute(
          'aria-labelledby',
          tabId1
        )
      })

      it('should add the class name', () => {
        expect(wrapper.getByTestId('tab-set').classList).toContain(
          'rn-tab-set--modifier'
        )
      })

      it('should output the correct number of tabs', () => {
        expect(wrapper.queryAllByTestId('tab-set-tab').length).toEqual(2)
      })

      it('should output the correct number of content panels', () => {
        expect(wrapper.queryAllByTestId('tab-set-content').length).toEqual(2)
      })

      it('should set the `tabIndex` values correctly', () => {
        expect(wrapper.getAllByTestId('tab-set-tab')[0]).toHaveAttribute(
          'tabIndex',
          '0'
        )

        expect(wrapper.getAllByTestId('tab-set-tab')[1]).toHaveAttribute(
          'tabIndex',
          '-1'
        )
      })

      it('should set the `aria-hidden` attributes correctly', () => {
        expect(wrapper.getAllByTestId('tab-set-content')[0]).toHaveAttribute(
          'aria-hidden',
          'false'
        )

        expect(wrapper.getAllByTestId('tab-set-content')[1]).toHaveAttribute(
          'aria-hidden',
          'true'
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

        it('should invoke the onChange function', () => {
          expect(onChangeSpy).toHaveBeenCalledTimes(1)
          expect(onChangeSpy).toHaveBeenCalledWith(1)
        })

        it('should set the first tab `tabIndex` to -1', () => {
          expect(wrapper.getAllByTestId('tab-set-tab')[0]).toHaveAttribute(
            'tabIndex',
            '-1'
          )

          expect(wrapper.getAllByTestId('tab-set-tab')[1]).toHaveAttribute(
            'tabIndex',
            '0'
          )
        })

        it('should set the `aria-hidden` attributes correctly', () => {
          expect(wrapper.getAllByTestId('tab-set-content')[0]).toHaveAttribute(
            'aria-hidden',
            'true'
          )

          expect(wrapper.getAllByTestId('tab-set-content')[1]).toHaveAttribute(
            'aria-hidden',
            'false'
          )
        })
      })
    })

    describe('when the onChange is not provided', () => {
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

    describe('when the TabSet is wrapped in a form', () => {
      let clickEventSpy: MouseEvent

      beforeEach(() => {
        wrapper = render(
          <form>
            <TabSet>
              <Tab title="Title 1">Content 1</Tab>
              <Tab title="Title 2">Content 2</Tab>
            </TabSet>
          </form>
        )
      })

      describe('when the user clicks on a tab', () => {
        beforeEach(() => {
          clickEventSpy = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
          })

          Object.assign(clickEventSpy, { preventDefault: jest.fn() })

          fireEvent(wrapper.getByText('Title 2').parentElement, clickEventSpy)
        })

        it('should invoke preventDefault', () => {
          expect(clickEventSpy.preventDefault).toHaveBeenCalledTimes(1)
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

    async function scroll(
      direction: typeof SCROLL_DIRECTION.LEFT | typeof SCROLL_DIRECTION.RIGHT
    ) {
      wrapper.getByTestId(`scroll-${direction}`).click()

      await waitFor(flushPromises)
    }

    beforeEach(() => {
      wrapper = render(
        <TabSet isScrollable>
          <Tab title="Title 1">Content 1</Tab>
          <Tab title="Title 2">Content 2</Tab>
          <Tab title="Title 3">Content 3</Tab>
        </TabSet>
      )

      const tabs = wrapper.getByTestId('tabs')
      tabs.scrollTo = () => {
        return true
      }

      scrollToSpy = jest
        .spyOn(tabs, 'scrollTo')
        // @ts-ignore
        .mockImplementation(({ left }) => {
          Object.defineProperty(tabs, 'scrollLeft', {
            configurable: true,
            value: left,
          })
          fireEvent.scroll(tabs)
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

    it('should add the `aria-hidden` attribute', () => {
      expect(wrapper.getByTestId('scroll-left')).toHaveAttribute('aria-hidden')
      expect(wrapper.getByTestId('scroll-right')).toHaveAttribute('aria-hidden')
    })

    it('should present a scroll left button', () => {
      expect(wrapper.getByTestId('scroll-left')).toBeInTheDocument()
    })

    it('should present a scroll right button', () => {
      expect(wrapper.getByTestId('scroll-right')).toBeInTheDocument()
    })

    describe('when scrolling right', () => {
      describe('when the scroll right button is clicked twice', () => {
        beforeEach(async () => {
          await scroll(SCROLL_DIRECTION.RIGHT)
          await scroll(SCROLL_DIRECTION.RIGHT)
        })

        it('should scroll the tabs twice', () => {
          expect(scrollToSpy).toHaveBeenCalledWith({
            left: 200,
            behavior: 'smooth',
          })
          expect(scrollToSpy).toHaveBeenCalledWith({
            left: 300,
            behavior: 'smooth',
          })
        })
      })

      describe('when the scroll right button is clicked three times (once more than available tabs)', () => {
        beforeEach(async () => {
          await scroll(SCROLL_DIRECTION.RIGHT)
          await scroll(SCROLL_DIRECTION.RIGHT)
          await scroll(SCROLL_DIRECTION.RIGHT)
        })

        it('should scroll the tabs only twice', () => {
          expect(scrollToSpy).toHaveBeenCalledTimes(2)
        })
      })
    })

    describe('when scrolling left', () => {
      describe('when scroll right and scroll left buttons are each clicked once', () => {
        beforeEach(async () => {
          await scroll(SCROLL_DIRECTION.RIGHT)
          await scroll(SCROLL_DIRECTION.LEFT)
        })

        it('should scroll the tabs twice', () => {
          expect(scrollToSpy).toHaveBeenCalledTimes(2)
          expect(scrollToSpy).toHaveBeenCalledWith({
            left: 200,
            behavior: 'smooth',
          })
          expect(scrollToSpy).toHaveBeenCalledWith({
            left: 100,
            behavior: 'smooth',
          })
        })
      })

      describe('when scroll right button is clicked once and scroll left is clicked twice', () => {
        beforeEach(async () => {
          await scroll(SCROLL_DIRECTION.RIGHT)
          await scroll(SCROLL_DIRECTION.LEFT)
          await scroll(SCROLL_DIRECTION.LEFT)
        })

        it('should scroll the tabs twice', () => {
          expect(scrollToSpy).toHaveBeenCalledTimes(2)
          expect(scrollToSpy).toHaveBeenCalledWith({
            left: 200,
            behavior: 'smooth',
          })
          expect(scrollToSpy).toHaveBeenCalledWith({
            left: 100,
            behavior: 'smooth',
          })
        })
      })
    })
  })
})
