import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult, fireEvent } from '@testing-library/react'

import { Dialog } from '.'

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
            data-arbitrary="arbitrary"
            title={title}
            description={description}
            onConfirm={onConfirm}
            onCancel={onCancel}
            isOpen={isOpen}
          />
        )
      })

      it('should spread arbitrary props', () => {
        expect(wrapper.getByTestId('dialog')).toHaveAttribute(
          'data-arbitrary',
          'arbitrary'
        )
      })

      it('should set the `aria-labelledby` attribute to the ID of the title', () => {
        const titleId = wrapper.getByTestId('dialog-title').getAttribute('id')

        expect(wrapper.getByTestId('dialog')).toHaveAttribute(
          'aria-labelledby',
          titleId
        )
      })

      it('should render the title', () => {
        expect(wrapper.getByTestId('dialog-title')).toHaveTextContent(title)
      })

      it('should render the description', () => {
        expect(wrapper.getByTestId('dialog-description')).toHaveTextContent(
          description
        )
      })

      describe('and the primary button is clicked', () => {
        beforeEach(() => {
          fireEvent(
            wrapper.getByTestId('modal-primary'),
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

      describe('and the tertiary button is clicked', () => {
        beforeEach(() => {
          fireEvent(
            wrapper.getByTestId('modal-tertiary'),
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
})
