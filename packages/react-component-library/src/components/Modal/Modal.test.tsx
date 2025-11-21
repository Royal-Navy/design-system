import React from 'react'

import {
  render,
  RenderResult,
  fireEvent,
  waitFor,
  screen,
} from '@testing-library/react'

import { ButtonProps } from '../Button'
import { Modal } from './Modal'

const primaryButton: ButtonProps = {
  onClick: jest.fn(),
  children: 'Primary',
}

const secondaryButton: ButtonProps = {
  onClick: jest.fn(),
  children: 'Secondary',
}

const tertiaryButton: ButtonProps = {
  onClick: jest.fn(),
  children: 'Tertiary',
}

describe('Modal', () => {
  let wrapper: RenderResult
  let title: string
  let onClose: () => void

  describe('when the component is provided no title or buttons', () => {
    describe('and it is set to be initially open', () => {
      beforeEach(() => {
        wrapper = render(
          <Modal aria-label="Accessible name" isOpen>
            <span>Example child JSX</span>
          </Modal>
        )
      })

      it('does not set the `aria-labelledby` attribute', () => {
        expect(wrapper.getByRole('dialog')).not.toHaveAttribute(
          'aria-labelledby'
        )
      })

      it('sets the `aria-label` attribute', () => {
        expect(wrapper.getByRole('dialog')).toHaveAttribute(
          'aria-label',
          'Accessible name'
        )
      })

      it('should apply the `role` attribute', () => {
        expect(wrapper.getByRole('dialog')).toHaveAttribute('role', 'dialog')
      })

      it('should apply the `aria-modal` attribute', () => {
        expect(wrapper.getByRole('dialog')).toHaveAttribute(
          'aria-modal',
          'true'
        )
      })

      it('should set the `aria-describedby` attribute to the ID of the content', () => {
        const descriptionId = wrapper
          .getByTestId('modal-body')
          .getAttribute('id')

        expect(wrapper.getByRole('dialog')).toHaveAttribute(
          'aria-describedby',
          descriptionId
        )
      })

      it('should open the modal', () => {
        expect(wrapper.getByRole('dialog')).toHaveAttribute('open')
      })

      it('should scroll on lower resolution screens', () => {
        expect(wrapper.getByTestId('modal-main')).toHaveStyleRule(
          'max-height',
          '95vh'
        )
        expect(wrapper.getByTestId('modal-main')).toHaveStyleRule(
          'overflow-y',
          'auto'
        )
      })

      it('should not render the Header component', () => {
        expect(wrapper.queryByTestId('modal-header')).toBeNull()
      })

      it('should not render the Footer component', () => {
        expect(wrapper.queryByTestId('modal-footer')).toBeNull()
      })
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
          <Modal isOpen title={title} onClose={onClose}>
            <span>Example child JSX</span>
          </Modal>
        )
      })

      it('should set the `aria-labelledby` attribute to the ID of the title', () => {
        const titleId = wrapper
          .getByTestId('modal-header-text')
          .getAttribute('id')

        expect(wrapper.getByRole('dialog')).toHaveAttribute(
          'aria-labelledby',
          titleId
        )
      })

      it('should render the Header component', () => {
        expect(wrapper.queryByTestId('modal-header')).toBeInTheDocument()
      })

      it('should render the child JSX', () => {
        expect(wrapper.queryByTestId('modal-body')).toHaveTextContent(
          'Example child JSX'
        )
      })

      describe('and the close button is clicked', () => {
        beforeEach(() => {
          fireEvent(
            wrapper.getByTestId('modal-close'),
            new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
            })
          )
        })

        it('should invoke the onClose callback', () => {
          expect(onClose).toHaveBeenCalled()
        })
      })

      describe('and buttons are provided', () => {
        beforeEach(() => {
          wrapper = render(
            <Modal
              isOpen
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
          expect(wrapper.queryByTestId('modal-footer')).toBeInTheDocument()
        })

        it('should render all the buttons', () => {
          expect(wrapper.queryByTestId('modal-primary')).toBeInTheDocument()
          expect(wrapper.queryByTestId('modal-secondary')).toBeInTheDocument()
          expect(wrapper.queryByTestId('modal-tertiary')).toBeInTheDocument()
        })

        it('should render the primary button with an icon', () => {
          expect(
            wrapper.queryByTestId('modal-primary-confirm')
          ).toBeInTheDocument()
        })
      })

      describe('and no primary button icon is specified', () => {
        beforeEach(() => {
          wrapper = render(
            <Modal
              isOpen
              title={title}
              onClose={onClose}
              primaryButton={{ ...primaryButton, icon: undefined }}
            >
              <span>Example child JSX</span>
            </Modal>
          )
        })

        it('does not render an icon for the primary button', () => {
          expect(wrapper.queryByTestId('modal-primary-confirm')).toBeNull()
        })
      })
    })
  })

  describe('when both title and aria-label are set', () => {
    beforeEach(() => {
      onClose = jest.fn()

      wrapper = render(
        <Modal isOpen title="Title" aria-label="Accessible name">
          <span>Example child JSX</span>
        </Modal>
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

  describe('when the component has arbitrary props', () => {
    beforeEach(() => {
      wrapper = render(
        <Modal data-arbitrary="arbitrary">
          <span>Example child JSX</span>
        </Modal>
      )
    })

    it('should spread arbitrary props', () => {
      expect(wrapper.getByRole('dialog', { hidden: true })).toHaveAttribute(
        'data-arbitrary',
        'arbitrary'
      )
    })
  })

  describe('when the Modal content changes', () => {
    let initialIds: Record<string, string | null>

    const ExampleModal = ({ content }: { content: string }) => (
      <Modal title="Example title">
        <span>{content}</span>
      </Modal>
    )

    function getIds() {
      return {
        titleId: wrapper.getByTestId('modal-header-text').id,
        descriptionId: wrapper.getByTestId('modal-body').id,
        labelledBy: wrapper
          .getByRole('dialog', { hidden: true })
          .getAttribute('aria-labelledby'),
        describedBy: wrapper
          .getByRole('dialog', { hidden: true })
          .getAttribute('aria-describedby'),
      }
    }

    beforeEach(() => {
      wrapper = render(<ExampleModal content="initial content" />)
      initialIds = getIds()

      wrapper.rerender(<ExampleModal content="new content" />)
    })

    it('does not generate new IDs', () => {
      expect(getIds()).toEqual(initialIds)
    })
  })

  it('disables the buttons when `primaryButton.onClick` is async and primary is clicked', async () => {
    let resolvePromise: () => void = () => {}

    const onClickMock: (
      event: React.MouseEvent<HTMLButtonElement>
    ) => Promise<void> = jest.fn(
      () =>
        new Promise((resolve) => {
          resolvePromise = resolve
        })
    )

    const asyncPrimaryButton: ButtonProps = {
      onClick: onClickMock,
      children: 'Confirm',
    }

    render(
      <Modal
        isOpen
        title="Modal Title"
        primaryButton={asyncPrimaryButton}
        secondaryButton={secondaryButton}
        tertiaryButton={tertiaryButton}
      >
        <span>Modal content</span>
      </Modal>
    )

    fireEvent.click(screen.getByTestId('modal-primary'))

    expect(await screen.findByTestId('loading-icon')).toBeInTheDocument()

    const buttons = screen.getAllByRole('button')
    const modalButtons = buttons.slice(1, 4)

    modalButtons.forEach((button) => {
      expect(button).toBeDisabled()
    })

    resolvePromise()

    await waitFor(() => {
      expect(screen.queryByTestId('loading-icon')).not.toBeInTheDocument()
    })

    modalButtons.forEach((button) => {
      expect(button).toBeEnabled()
    })
  })
})
