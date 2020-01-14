import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult, fireEvent } from '@testing-library/react'

import { Dialog } from './Dialog'

describe('Modal', () => {
  let wrapper: RenderResult
  let title: string
  let description: string
  let onConfirm: (event: React.FormEvent<HTMLButtonElement>) => void
  let onCancel: (event: React.FormEvent<HTMLButtonElement>) => void
  let isOpen: boolean

  beforeEach(() => {
    title = 'Dialog Title'
    description = 'Dialog description.'
    isOpen = true
    onConfirm = jest.fn()
    onCancel = jest.fn()
  })

  describe('when props are provided for a standard dialog component', () => {
    describe('and it is set to be initially open', () => {
      beforeEach(() => {
        wrapper = render(
          <Dialog
            title={title}
            description={description}
            onConfirm={onConfirm}
            onCancel={onCancel}
            isOpen={isOpen}
          />
        )
      })

      it('should render the title', () => {
        expect(wrapper.queryByTestId('rn-dialog-title')).toHaveTextContent(
          title
        )
      })

      it('should render the description', () => {
        expect(
          wrapper.queryByTestId('rn-dialog-description')
        ).toHaveTextContent(description)
      })

      it('should apply the `rn-dialog` class', () => {
        expect(wrapper.queryByTestId('rn-modal-wrapper')).toHaveClass(
          'rn-dialog'
        )
      })

      describe('and the primary button is clicked', () => {
        beforeEach(() => {
          fireEvent(
            wrapper.getByTestId('rn-modal-btn-primary'),
            new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
            })
          )
        })

        it('should invoke the onConfirm callback', () => {
          expect(onConfirm).toHaveBeenCalled()
        })
      })

      describe('and the secondary button is clicked', () => {
        beforeEach(() => {
          fireEvent(
            wrapper.getByTestId('rn-modal-btn-secondary'),
            new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
            })
          )
        })

        it('should invoke the onCancel callback', () => {
          expect(onCancel).toHaveBeenCalled()
        })
      })
    })
  })

  describe('when props are provided for a danger dialog component', () => {
    beforeEach(() => {
      wrapper = render(
        <Dialog
          title={title}
          description={description}
          onConfirm={onConfirm}
          onCancel={onCancel}
          isOpen={isOpen}
          isDanger
        />
      )
    })

    it('should apply the correct modifier class to the wrapper', () => {
      expect(wrapper.queryByTestId('rn-modal-wrapper')).toHaveClass(
        'rn-dialog--danger'
      )
    })

    it('should apply the correct modifier to the primary button', () => {
      expect(wrapper.queryByTestId('rn-modal-btn-primary')).toHaveClass(
        'rn-btn--danger'
      )
    })
  })
})
