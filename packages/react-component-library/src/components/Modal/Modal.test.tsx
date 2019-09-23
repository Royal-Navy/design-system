import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult, fireEvent } from '@testing-library/react'

import { ButtonProps } from '../Button'
import { Modal } from './Modal'

const primaryButton: ButtonProps = {
  onClick: event => console.log('primary'),
  children: 'Primary',
}

const secondaryButton: ButtonProps = {
  onClick: event => console.log('secondary'),
  children: 'Secondary',
}

const tertiaryButton: ButtonProps = {
  onClick: event => console.log('tertiary'),
  children: 'Tertiary',
}

describe('Modal', () => {
  let wrapper: RenderResult
  let title: string
  let onClose: (event: any) => void
  let isOpen: boolean
  let children: any

  beforeEach(() => {
    isOpen = true
  })

  describe('when the component is provided no title or buttons', () => {
    describe('and it is set to be initially open', () => {
      beforeEach(() => {
        wrapper = render(<Modal isOpen={isOpen} children={children} />)
      })
    })

    it('should apply the `is-open` class', () => {
      expect(wrapper.queryByTestId('wrapper')).toHaveClass('is-open')
    })

    it('should not render the Header component', () => {
      //
    })

    it('should not render the Footer component', () => {
      //
    })
  })

  describe('when the component is provided a title', () => {
    beforeEach(() => {
      title = 'Modal Header'
    })

    describe('and the onClose callback is provided', () => {
      beforeEach(() => {
        onClose = jest.fn()

        wrapper = render(
          <Modal isOpen={isOpen} title={title} onClose={onClose}>
            <span>Example child JSX</span>
          </Modal>
        )
      })
      it('should render the Header component', () => {
        //
      })

      it('should render the child JSX', () => {
        //
      })

      describe('and the close button is clicked', () => {
        beforeEach(() => {
          fireEvent(
            wrapper.getByTestId('close-button'),
            new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
            })
          )
        })
        it('should invoke the onClose callback', () => {
          //
        })

        it('should apply the `is-closed` stateful class', () => {
          //
        })
      })

      describe('and buttons are provided', () => {
        beforeEach(() => {
          wrapper = render(
            <Modal
              isOpen={isOpen}
              title={title}
              onClose={onClose}
              primaryButton={primaryButton}
              secondaryButton={secondaryButton}
              tertiaryButton={tertiaryButton}
            >
              <span>Example child JSX</span>
            </Modal>
          )
        })

        it('should render the Footer component', () => {
          //
        })

        it('should render primary button with an icon', () => {
          //
        })

        it('should render primary button as primary variant', () => {
          //
        })

        it('should render secondary button as secondary variant', () => {
          //
        })

        it('should render tertiary button as secondary variant', () => {
          //
        })
      })
    })
  })
})
