import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import '@testing-library/jest-dom/extend-expect'
import {
  render,
  RenderResult,
  fireEvent,
  cleanup,
} from '@testing-library/react'

import { Drawer } from '.'

describe('Drawer', () => {
  let wrapper: RenderResult
  let onCloseSpy: (event: React.FormEvent<HTMLButtonElement>) => void
  let children: React.ReactElement

  describe('default props', () => {
    beforeEach(() => {
      children = <h1>Arbitrary JSX</h1>

      wrapper = render(<Drawer>{children}</Drawer>)
    })

    it('does not apply the `is-open` class', () => {
      expect(wrapper.getByTestId('drawer-wrapper').classList).not.toContain(
        'is-open'
      )
    })

    it('renders the arbitrary JSX in the correct place', () => {
      expect(wrapper.getByTestId('drawer-content').innerHTML).toContain(
        renderToStaticMarkup(children)
      )
    })

    describe('and the `isOpen` attribute and `onClose` callback are provided', () => {
      beforeEach(() => {
        cleanup()
        onCloseSpy = jest.fn()

        wrapper = render(
          <Drawer isOpen onClose={onCloseSpy}>
            {children}
          </Drawer>
        )
      })

      it('applies the `is-open` class', () => {
        expect(wrapper.getByTestId('drawer-wrapper').classList).toContain(
          'is-open'
        )
      })

      describe('and a user clicks on the close button', () => {
        beforeEach(() => {
          fireEvent(
            wrapper.getByTestId('drawer-close'),
            new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
            })
          )
        })

        it('invokes the `onClose` callback', () => {
          expect(onCloseSpy).toHaveBeenCalled()
        })

        it('removes the `is-open` class', () => {
          expect(wrapper.getByTestId('drawer-wrapper').classList).not.toContain(
            'is-open'
          )
        })
      })
    })
  })
})
