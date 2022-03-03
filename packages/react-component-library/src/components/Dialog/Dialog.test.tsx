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

      describe('and the secondary button is clicked', () => {
        beforeEach(() => {
          fireEvent(
            wrapper.getByTestId('modal-secondary'),
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

  describe('when the Dialog description changes', () => {
    let initialTitleId: string
    let initialDescriptionId: string

    const ExampleDialog = ({
      exampleDescription,
    }: {
      exampleDescription: string
    }) => (
      <Dialog title="Example title" description={exampleDescription} isOpen />
    )

    beforeEach(() => {
      wrapper = render(<ExampleDialog exampleDescription="initial content" />)
      initialTitleId = wrapper.getByTestId('dialog-title').id
      initialDescriptionId = wrapper.getByTestId('modal-body').id

      wrapper.rerender(<ExampleDialog exampleDescription="new content" />)
    })

    it('does not generate new a new title `id`', () => {
      expect(wrapper.getByTestId('dialog-title')).toHaveAttribute(
        'id',
        initialTitleId
      )
    })

    it('does not generate new a new description `id`', () => {
      expect(wrapper.getByTestId('modal-body')).toHaveAttribute(
        'id',
        initialDescriptionId
      )
    })
  })
})
