// @ts-nocheck
import React, { useState } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import '@testing-library/jest-dom/extend-expect'
import {
  render,
  RenderResult,
  fireEvent,
  waitFor,
} from '@testing-library/react'

import { Button } from '../Button'
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
  })

  describe('and the `isOpen` attribute and `onClose` callback are provided', () => {
    beforeEach(() => {
      children = <h1>Arbitrary JSX</h1>
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

  describe('when the state is being updated externally', () => {
    describe('and the drawer is instantiated as closed', () => {
      beforeEach(() => {
        const DrawerWithUpdate = () => {
          const [isOpen, setIsOpen] = useState(false)

          return (
            <>
              <Button
                onClick={() => {
                  setIsOpen(!isOpen)
                }}
              >
                {isOpen ? 'Hide' : 'Show'}
              </Button>
              <Drawer isOpen={isOpen} onClose={onCloseSpy}>
                {children}
              </Drawer>
            </>
          )
        }

        wrapper = render(<DrawerWithUpdate />)
      })

      it('should not contain the `is-open` class', () => {
        expect(wrapper.getByTestId('drawer-wrapper').classList).not.toContain(
          'is-open'
        )
      })

      describe('and the button is clicked', () => {
        beforeEach(() => {
          wrapper.getByText('Show').click()

          return waitFor(() => wrapper.queryAllByText('Hide'))
        })

        it('should contain the `is-open` class', () => {
          expect(wrapper.getByTestId('drawer-wrapper').classList).toContain(
            'is-open'
          )
        })

        describe('and the button is clicked again', () => {
          beforeEach(() => {
            wrapper.getByText('Hide').click()

            return waitFor(() => wrapper.queryAllByText('Show'))
          })

          it('should not contain the `is-open` class', () => {
            expect(
              wrapper.getByTestId('drawer-wrapper').classList
            ).not.toContain('is-open')
          })
        })
      })
    })
  })
})
