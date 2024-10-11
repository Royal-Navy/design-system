import React, { useState } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/react'

import { Button } from '../Button'
import { Drawer } from '.'
import { useOpenClose } from '../../hooks'

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

    it('applies the correct open state style', () => {
      expect(wrapper.getByTestId('drawer-wrapper')).toHaveStyleRule(
        'margin-right',
        '0'
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

      it('applies the correct closed state style', () => {
        expect(wrapper.getByTestId('drawer-wrapper')).toHaveStyleRule(
          'margin-right',
          '-280px'
        )
      })
    })
  })

  describe('when the state is being updated externally', () => {
    describe('and the drawer is instantiated as closed', () => {
      beforeEach(() => {
        const DrawerWithUpdate = () => {
          const { open, toggle } = useOpenClose(false)

          return (
            <>
              <Button onClick={toggle}>{open ? 'Hide' : 'Show'}</Button>
              <Drawer isOpen={open} onClose={onCloseSpy}>
                {children}
              </Drawer>
            </>
          )
        }

        wrapper = render(<DrawerWithUpdate />)
      })

      it('applies the correct closed state style', () => {
        expect(wrapper.getByTestId('drawer-wrapper')).toHaveStyleRule(
          'margin-right',
          '-280px'
        )
      })

      describe('and the button is clicked', () => {
        beforeEach(() => {
          wrapper.getByText('Show').click()

          return waitFor(() => wrapper.queryAllByText('Hide'))
        })

        it('applies the correct open state style', () => {
          expect(wrapper.getByTestId('drawer-wrapper')).toHaveStyleRule(
            'margin-right',
            '0'
          )
        })

        describe('and the button is clicked again', () => {
          beforeEach(() => {
            wrapper.getByText('Hide').click()

            return waitFor(() => wrapper.queryAllByText('Show'))
          })

          it('applies the correct closed state style', () => {
            expect(wrapper.getByTestId('drawer-wrapper')).not.toHaveStyleRule(
              'margin-right',
              '0'
            )
          })
        })
      })
    })
  })

  describe('when a `ref` prop is specified', () => {
    beforeEach(() => {
      const DrawerWithRef = () => {
        const [content, setContent] = useState<string | null>('Not set')

        return (
          <Drawer
            ref={(el) => {
              if (el) {
                setContent(el.getAttribute('data-testid'))
              }
            }}
          >
            {content}
          </Drawer>
        )
      }

      wrapper = render(<DrawerWithRef />)
    })

    it('has set the `ref` on the wrapper', () => {
      expect(wrapper.getByTestId('drawer-content')).toHaveTextContent(
        'drawer-wrapper'
      )
    })
  })

  describe('when drawer contents are taller than container height', () => {
    beforeEach(() => {
      children = <div style={{ height: '300px' }}>Arbitrary JSX</div>

      wrapper = render(
        <div style={{ height: '100px', overflow: 'hidden' }}>
          <Drawer>{children}</Drawer>
        </div>
      )
    })

    it('should have 100% height', () => {
      const inner = wrapper.getByTestId('drawer-inner')
      expect(inner).toHaveStyleRule('height', '100%')
    })
  })

  describe('when an arbitrary prop is specified', () => {
    beforeEach(() => {
      children = <h1>Arbitrary JSX</h1>

      wrapper = render(<Drawer data-arbitrary="arbitrary">{children}</Drawer>)
    })

    it('should spread arbitrary props', () => {
      expect(wrapper.getByTestId('drawer-wrapper')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary'
      )
    })
  })
})
