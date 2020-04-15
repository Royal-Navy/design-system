// @ts-nocheck
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { renderToStaticMarkup } from 'react-dom/server'
import {
  render,
  RenderResult,
  fireEvent,
  waitFor,
} from '@testing-library/react'

import { Popover, POPOVER_PLACEMENT } from '.'

const HOVER_ON_ME = 'Hover on me!'

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
            {HOVER_ON_ME}
          </div>
        </Popover>
      )
    })

    describe('and the user hovers on the target element', () => {
      beforeEach(() => {
        fireEvent.mouseEnter(wrapper.getByText(HOVER_ON_ME))
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

      describe('and the user unhovers from the target element', () => {
        beforeEach(() => {
          fireEvent.mouseOut(wrapper.getByText(HOVER_ON_ME))
        })

        it('to not be visible to the end user', async () => {
          await waitFor(() => {
            expect(wrapper.getByTestId('floating-box').classList).not.toContain(
              'is-visible'
            )
          })
        })
      })
    })
  })
})
