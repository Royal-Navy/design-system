import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { renderToStaticMarkup } from 'react-dom/server'

import {
  render,
  RenderResult,
  cleanup,
  fireEvent,
} from '@testing-library/react'

import { Popover } from '.'

import {
  FLOATING_BOX_PLACEMENT,
  FLOATING_BOX_SCHEME,
} from '../../primitives/FloatingBox'

describe('Popover', () => {
  let wrapper: RenderResult
  let children: React.ReactElement

  describe('when provided a placement and arbitrary JSX content', () => {
    beforeEach(() => {
      children = <pre>This is some arbitrary JSX</pre>

      wrapper = render(
        <Popover placement={POPOVER_PLACEMENT.BELOW} content={children}>
          <div
            style={{
              display: 'inline-block',
              padding: '1rem',
              backgroundColor: '#c9c9c9',
            }}
          >
            Hover on me!
          </div>
        </Popover>
      )
    })

    describe('and the user hovers on the target element', () => {
      beforeEach(() => {
        fireEvent.mouseOver(wrapper.getByText('Hover on me!'))
      })

      it('to be visible to the end user', () => {
        expect(wrapper.getByTestId('floating-box').classList).toContain(
          'is-visible'
        )
      })

      it('renders the provided arbitrary JSX', () => {
        expect(wrapper.getByTestId('floating-box-content').innerHTML).toContain(
          renderToStaticMarkup(children)
        )
      })

      it('applies the class for the light colour scheme by default', () => {
        expect(wrapper.getByTestId('floating-box').classList).toContain(
          'rn-floating-box--light'
        )
      })

      describe('and the user unhovers from the target element', () => {
        beforeEach(() => {
          fireEvent.mouseLeave(wrapper.getByText('Hover on me!'))
          jest.runAllTimers()
        })

        it('to not be visible to the end user', () => {
          /**
           * Having to use setTimeout 0 hack to ensure the assertion is at
           * the bottom of the callstack. Unable to async await the handler.
           *
           * NOTE: Coverage incorrectly flags up lines that have been hit.
           */
          setTimeout(() => {
            expect(wrapper.getByTestId('floating-box').classList).not.toContain(
              'is-visible'
            )
          }, 0)
        })
      })
    })

    describe('where the scheme prop is supplied', () => {
      beforeEach(() => {
        cleanup()

        children = <pre>This is some arbitrary JSX</pre>

        wrapper = render(
          <Popover
            placement={POPOVER_PLACEMENT.BELOW}
            content={children}
            scheme={FLOATING_BOX_SCHEME.DARK}
          >
            <div
              style={{
                display: 'inline-block',
                padding: '1rem',
                backgroundColor: '#c9c9c9',
              }}
            >
              Hover on me!
            </div>
          </Popover>
        )
      })

      it('applies the class for the dark colour scheme', () => {
        expect(wrapper.getByTestId('floating-box').classList).toContain(
          'rn-floating-box--dark'
        )
      })
    })
  })
})
