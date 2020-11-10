// @ts-nocheck
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { renderToStaticMarkup } from 'react-dom/server'
import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/react'

import { Popover, POPOVER_PLACEMENT } from '.'

const HOVER_ON_ME = 'Hover on me!'

describe('Popover', () => {
  let wrapper: RenderResult
  let children: React.ReactElement
  let clickSpy: (e: React.MouseEvent) => void

  describe('when provided a placement and arbitrary JSX content', () => {
    beforeEach(() => {
      children = <pre>This is some arbitrary JSX</pre>
      clickSpy = jest.fn()

      wrapper = render(
        <>
          <Popover placement={POPOVER_PLACEMENT.BELOW} content={children}>
            <div
              style={{
                display: 'inline-block',
                padding: '1rem',
                backgroundColor: '#c9c9c9',
              }}
            >
              {HOVER_ON_ME}
            </div>
          </Popover>
          <button onClick={clickSpy} style={{ margin: '2rem' }}>
            Click me!
          </button>
        </>
      )
    })

    it('allows button covered by Popover to be clicked when Popover is hidden', () => {
      wrapper.queryByText('Click me!').click()
      expect(clickSpy).toHaveBeenCalledTimes(1)
    })

    it('should set the `aria-describedby` attribute to the ID of the content', () => {
      const contentId = wrapper
        .getByTestId('floating-box-content')
        .getAttribute('id')

      expect(wrapper.getByTestId('floating-box')).toHaveAttribute(
        'aria-describedby',
        contentId
      )
    })

    describe('and the user hovers on the target element', () => {
      beforeEach(() => {
        fireEvent.mouseEnter(wrapper.getByText(HOVER_ON_ME))
      })

      it('to be visible to the end user', () => {
        expect(wrapper.getByTestId('floating-box')).toHaveStyleRule(
          'opacity',
          '1'
        )
      })

      it('renders the provided arbitrary JSX', () => {
        expect(wrapper.getByTestId('floating-box-content').innerHTML).toContain(
          renderToStaticMarkup(children)
        )
      })

      describe('and the user unhovers from the target element', () => {
        beforeEach(() => {
          fireEvent.mouseOut(wrapper.getByText(HOVER_ON_ME))
        })

        it('to not be visible to the end user', () => {
          return waitFor(() => {
            expect(wrapper.getByTestId('floating-box')).toHaveStyleRule(
              'opacity',
              '0'
            )
          })
        })
      })
    })
  })

  describe('when the `Popover` uses the click mouse event', () => {
    beforeEach(() => {
      wrapper = render(
        <Popover
          content={<pre>This is some arbitrary JSX</pre>}
          isClick
          placement={POPOVER_PLACEMENT.BELOW}
        >
          <div>Click on me</div>
        </Popover>
      )
    })

    describe('and the user clicks on the target', () => {
      beforeEach(() => {
        fireEvent(
          wrapper.getByText('Click on me'),
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
          })
        )
      })

      it('to be visible to the end user', () => {
        expect(wrapper.getByTestId('floating-box')).toHaveStyleRule(
          'opacity',
          '1'
        )
      })

      describe('and the user clicks on the target again', () => {
        beforeEach(() => {
          fireEvent(
            wrapper.getByText('Click on me'),
            new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
            })
          )
        })

        it('to not be visible to the end user', () => {
          return waitFor(() => {
            expect(wrapper.getByTestId('floating-box')).toHaveStyleRule(
              'opacity',
              '0'
            )
          })
        })
      })

      describe('and the user clicks elsewhere in the document', () => {
        beforeEach(() => {
          fireEvent(
            document,
            new MouseEvent('mousedown', {
              bubbles: true,
              cancelable: true,
            })
          )
        })

        it('to not be visible to the end user', () => {
          return waitFor(() => {
            expect(wrapper.getByTestId('floating-box')).toHaveStyleRule(
              'opacity',
              '0'
            )
          })
        })
      })
    })
  })
})
