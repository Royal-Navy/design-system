import { color } from '@royalnavy/design-tokens'
import React from 'react'

import { fireEvent, render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { TabSet, TabSetItem } from '.'

describe('TabSet', () => {
  let wrapper: RenderResult
  let onChangeSpy: jest.SpyInstance

  describe('when the tab set is not scrollable', () => {
    describe('when all props are provided', () => {
      beforeEach(() => {
        const props = {
          className: 'rn-tab-set--modifier',
          'data-arbitrary': 'arbitrary',
          onChange: () => {
            return true
          },
        }

        onChangeSpy = jest.spyOn(props, 'onChange')

        wrapper = render(
          <TabSet {...props}>
            <TabSetItem data-arbitrary="arbitrary-tab" title="Title 1">
              Content 1
            </TabSetItem>
            <TabSetItem title="Title 2">Content 2</TabSetItem>
          </TabSet>
        )
      })

      it('should spread arbitrary props on the tab set', () => {
        expect(wrapper.getByTestId('tab-set')).toHaveAttribute(
          'data-arbitrary',
          'arbitrary'
        )
      })

      it('should spread arbitrary props on the tab', () => {
        expect(wrapper.getAllByTestId('tab-set-content')[0]).toHaveAttribute(
          'data-arbitrary',
          'arbitrary-tab'
        )
      })

      it('should give tabs an appropriate accessible name', () => {
        expect(
          wrapper.getByRole('tab', { name: 'Title 1' })
        ).toBeInTheDocument()
      })

      it('should apply the correct roles', () => {
        expect(wrapper.getByTestId('tab-set-list')).toHaveAttribute(
          'role',
          'tablist'
        )

        expect(wrapper.getAllByTestId('tab-set-tab')[0]).toHaveAttribute(
          'role',
          'presentation'
        )

        expect(wrapper.getAllByTestId('tab-set-tab-button')[0]).toHaveAttribute(
          'role',
          'tab'
        )

        expect(wrapper.getAllByTestId('tab-set-content')[0]).toHaveAttribute(
          'role',
          'tabpanel'
        )
      })

      it('should set the `aria-labelledby` and `id` attributes to the ID of the tab', () => {
        const tabButton0 = wrapper.getAllByTestId('tab-set-tab-button')[0]
        const tabButtonId0 = tabButton0.getAttribute('id')
        const tabContentId0 = tabButton0.getAttribute('aria-controls')

        expect(wrapper.getAllByTestId('tab-set-content')[0]).toHaveAttribute(
          'aria-labelledby',
          tabButtonId0
        )

        expect(wrapper.getAllByTestId('tab-set-content')[0]).toHaveAttribute(
          'id',
          tabContentId0
        )

        const tabButton1 = wrapper.getAllByTestId('tab-set-tab-button')[1]
        const tabButtonId1 = tabButton1.getAttribute('id')
        const tabContentId1 = tabButton1.getAttribute('aria-controls')

        expect(wrapper.getAllByTestId('tab-set-content')[1]).toHaveAttribute(
          'aria-labelledby',
          tabButtonId1
        )

        expect(wrapper.getAllByTestId('tab-set-content')[1]).toHaveAttribute(
          'id',
          tabContentId1
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
        expect(wrapper.getAllByTestId('tab-set-tab-button')[0]).toHaveAttribute(
          'tabIndex',
          '0'
        )

        expect(wrapper.getAllByTestId('tab-set-tab-button')[1]).toHaveAttribute(
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
          return userEvent.click(wrapper.getAllByText('Title 2')[0])
        })

        it('should display the tab as active', () => {
          const tab = wrapper.getAllByText('Title 2')[0].parentElement
          expect(tab).toHaveStyleRule(
            'background-color',
            color('neutral', 'white')
          )
        })

        it('should invoke the onChange function', () => {
          expect(onChangeSpy).toHaveBeenCalledTimes(1)
          expect(onChangeSpy).toHaveBeenCalledWith(
            expect.objectContaining({ _reactName: 'onClick' }),
            1
          )
        })

        it('should set the first tab `tabIndex` to -1', () => {
          expect(
            wrapper.getAllByTestId('tab-set-tab-button')[0]
          ).toHaveAttribute('tabIndex', '-1')

          expect(
            wrapper.getAllByTestId('tab-set-tab-button')[1]
          ).toHaveAttribute('tabIndex', '0')
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

        describe('and the user presses the left arrow key', () => {
          beforeEach(() => {
            return userEvent.keyboard('[ArrowLeft]')
          })

          it('sets the previous tab to active', () => {
            const tab = wrapper.getAllByText('Title 1')[0].parentElement
            expect(tab).toHaveStyleRule(
              'background-color',
              color('neutral', 'white')
            )
          })

          describe('and the user presses the right arrow key', () => {
            beforeEach(() => {
              return userEvent.keyboard('[ArrowRight]')
            })

            it('sets the next tab to active', () => {
              const tab = wrapper.getAllByText('Title 2')[0].parentElement
              expect(tab).toHaveStyleRule(
                'background-color',
                color('neutral', 'white')
              )
            })
          })
        })
      })
    })

    describe('when the onChange is not provided', () => {
      beforeEach(() => {
        wrapper = render(
          <TabSet>
            <TabSetItem title="Title 1">Content 1</TabSetItem>
            <TabSetItem title="Title 2">Content 2</TabSetItem>
          </TabSet>
        )
      })

      describe('when the user clicks on a tab', () => {
        beforeEach(() => {
          return userEvent.click(wrapper.getAllByText('Title 2')[0])
        })

        it('should make the appropriate tab active', () => {
          const tab = wrapper.getAllByText('Title 2')[0].parentElement
          expect(tab).toHaveStyleRule(
            'background-color',
            color('neutral', 'white')
          )
        })
      })
    })

    describe('when the initialActiveTab is set', () => {
      beforeEach(() => {
        wrapper = render(
          <TabSet>
            <TabSetItem title="Title 1">Content 1</TabSetItem>
            <TabSetItem title="Title 2" isActive>
              Content 2
            </TabSetItem>
          </TabSet>
        )
      })

      it('should make the appropriate tab active', () => {
        const tab1 = wrapper.getAllByText('Title 1')[0].parentElement
        const tab2 = wrapper.getAllByText('Title 2')[0].parentElement
        expect(tab1).toHaveStyleRule(
          'background-color',
          color('neutral', '100')
        )
        expect(tab2).toHaveStyleRule(
          'background-color',
          color('neutral', 'white')
        )
      })

      describe('when the user clicks on a tab', () => {
        beforeEach(() => {
          return userEvent.click(wrapper.getAllByText('Title 1')[0])
        })

        it('should make the appropriate tab active', () => {
          const tab1 = wrapper.getAllByText('Title 1')[0].parentElement
          const tab2 = wrapper.getAllByText('Title 2')[0].parentElement
          expect(tab1).toHaveStyleRule(
            'background-color',
            color('neutral', 'white')
          )
          expect(tab2).toHaveStyleRule(
            'background-color',
            color('neutral', '100')
          )
        })
      })
    })

    describe('when the TabSet is wrapped in a form', () => {
      let clickEventSpy: MouseEvent

      beforeEach(() => {
        wrapper = render(
          <form>
            <TabSet>
              <TabSetItem title="Title 1">Content 1</TabSetItem>
              <TabSetItem title="Title 2">Content 2</TabSetItem>
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

          fireEvent(
            wrapper.getAllByText('Title 2')[0].parentElement as HTMLElement,
            clickEventSpy
          )
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
            <TabSetItem title={<span>Title 1</span>}>
              <p>Content 1</p>
            </TabSetItem>
            <TabSetItem title={<span>Title 2</span>}>
              <p>Content 2</p>
            </TabSetItem>
          </TabSet>
        )
      })

      it('should render the elements', () => {
        expect(wrapper.getAllByText('Title 1')[0]).toBeInTheDocument()
        expect(wrapper.getByText('Content 1')).toBeInTheDocument()
        expect(wrapper.getAllByText('Title 2')[0]).toBeInTheDocument()
        expect(wrapper.getByText('Content 2')).toBeInTheDocument()
      })
    })
  })

  describe('when the tab set is scrollable', () => {
    beforeEach(() => {
      wrapper = render(
        <TabSet isScrollable>
          <TabSetItem title="Title 1">Content 1</TabSetItem>
          <TabSetItem title="Title 2">Content 2</TabSetItem>
          <TabSetItem title="Title 3">Content 3</TabSetItem>
        </TabSet>
      )
    })

    it('displays a left scroll button', () => {
      expect(wrapper.getByTestId('scroll-left')).toBeInTheDocument()
    })

    it('displays a right scroll button', () => {
      expect(wrapper.getByTestId('scroll-right')).toBeInTheDocument()
    })
  })
})
