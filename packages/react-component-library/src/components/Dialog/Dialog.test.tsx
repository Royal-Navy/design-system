import React from 'react'

import {
  render,
  RenderResult,
  fireEvent,
  waitFor,
} from '@testing-library/react'
import { renderToStaticMarkup } from 'react-dom/server'

import { Dialog } from '.'

describe('Dialog', () => {
  let wrapper: RenderResult
  let title: string
  let description: React.ReactElement
  let onConfirm: (event: React.FormEvent<HTMLButtonElement>) => void
  let onCancel: (event: React.FormEvent<HTMLButtonElement>) => void

  beforeEach(() => {
    title = 'Dialog Title'
    description = <span>Dialog description.</span>
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
            isOpen
          />
        )
      })

      it('should spread arbitrary props', () => {
        expect(wrapper.getByRole('dialog')).toHaveAttribute(
          'data-arbitrary',
          'arbitrary'
        )
      })

      it('should set the `aria-labelledby` attribute to the ID of the title', () => {
        const titleId = wrapper.getByTestId('dialog-title').getAttribute('id')

        expect(wrapper.getByRole('dialog')).toHaveAttribute(
          'aria-labelledby',
          titleId
        )
      })

      it('should render the title', () => {
        expect(wrapper.getByTestId('dialog-title')).toHaveTextContent(title)
      })

      it('should render the description', () => {
        expect(wrapper.getByTestId('dialog-description').innerHTML).toContain(
          renderToStaticMarkup(description)
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

  describe('when aria-label but no title is set', () => {
    beforeEach(() => {
      wrapper = render(
        <Dialog
          aria-label="Accessible name"
          data-arbitrary="arbitrary"
          description={description}
          onConfirm={onConfirm}
          onCancel={onCancel}
          isOpen
        />
      )
    })

    it('does not set the `aria-labelledby` attribute', () => {
      expect(wrapper.getByRole('dialog')).not.toHaveAttribute('aria-labelledby')
    })

    it('sets the `aria-label` attribute', () => {
      expect(wrapper.getByRole('dialog')).toHaveAttribute(
        'aria-label',
        'Accessible name'
      )
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

  describe('when onConfirm is async and the Confirm button is clicked', () => {
    let resolvePromise: () => void

    const onConfirmMock: (
      event: React.MouseEvent<HTMLButtonElement>
    ) => Promise<void> = jest.fn(
      () =>
        new Promise((resolve) => {
          resolvePromise = resolve
        })
    )

    beforeEach(() => {
      wrapper = render(
        <Dialog
          title={title}
          description={description}
          onConfirm={onConfirmMock}
          onCancel={onCancel}
          isOpen
        />
      )

      fireEvent(
        wrapper.getByTestId('modal-primary'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        })
      )
    })

    it('renders the buttons', async () => {
      expect(await wrapper.findByTestId('loading-icon')).toBeInTheDocument()

      const buttons = wrapper.getAllByRole('button')
      expect(buttons[0]).toBeDisabled()
      expect(buttons[1]).toBeDisabled()

      resolvePromise()

      await waitFor(() => {
        expect(wrapper.queryByTestId('loading-icon')).not.toBeInTheDocument()
        expect(buttons[0]).toBeEnabled()
        expect(buttons[1]).toBeEnabled()
      })
    })
  })
})
