import React from 'react'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Alert, ALERT_VARIANT } from '.'

describe('Alert', () => {
  describe('when minimal props are provided', () => {
    beforeEach(() => {
      render(<Alert>Description</Alert>)
    })

    it('should not set the `aria-labelledby` attribute', () => {
      expect(screen.getByRole('alert')).not.toHaveAttribute('aria-labelledby')
    })

    it('should set the `role` attribute to `alert`', () => {
      expect(screen.getByRole('alert')).toBeInTheDocument()
    })

    it('should render the close button', () => {
      expect(
        screen.getByRole('button', { name: /dismiss/i })
      ).toBeInTheDocument()
    })

    it('should not render the content title', () => {
      expect(screen.queryByRole('heading')).not.toBeInTheDocument()
    })

    it('should render the state icon', () => {
      const alert = screen.getByRole('alert')
      expect(within(alert).getByTestId('state-icon')).toBeInTheDocument()
    })

    it('should render the default info icon', () => {
      const alert = screen.getByRole('alert')
      const stateIcon = within(alert).getByTestId('state-icon')
      expect(within(stateIcon).getByTestId('icon-info')).toBeInTheDocument()
    })

    it('should render the content description', () => {
      expect(screen.getByText('Description')).toBeInTheDocument()
    })

    describe('when the close button is clicked', () => {
      beforeEach(async () => {
        await userEvent.click(screen.getByRole('button', { name: /dismiss/i }))
      })

      it('should hide the alert', () => {
        expect(screen.queryByRole('alert')).not.toBeInTheDocument()
      })
    })
  })

  describe('when composing with different variants', () => {
    it.each`
      variant
      ${ALERT_VARIANT.DANGER}
      ${ALERT_VARIANT.INFO}
      ${ALERT_VARIANT.SUCCESS}
      ${ALERT_VARIANT.WARNING}
    `('should render the $variant icon', ({ variant }) => {
      render(
        <Alert title="Title" variant={variant}>
          Description
        </Alert>
      )

      const alert = screen.getByRole('alert')
      const stateIcon = within(alert).getByTestId('state-icon')
      expect(
        within(stateIcon).getByTestId(`icon-${variant}`)
      ).toBeInTheDocument()
    })
  })

  describe('when all props are provided', () => {
    let onCloseSpy: (event: React.FormEvent<HTMLButtonElement>) => void

    beforeEach(() => {
      onCloseSpy = jest.fn()

      render(
        <Alert
          data-arbitrary="arbitrary"
          onClose={onCloseSpy}
          title="Title"
          variant={ALERT_VARIANT.DANGER}
        >
          Description
        </Alert>
      )
    })

    it('should spread arbitrary props', () => {
      expect(screen.getByRole('alert')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary'
      )
    })

    it('should set the `aria-labelledby` attribute to the ID of the title', () => {
      const alert = screen.getByRole('alert')
      const title = screen.getByRole('heading')
      expect(alert).toHaveAttribute('aria-labelledby', title.id)
    })

    it('should render the state icon', () => {
      const alert = screen.getByRole('alert')
      expect(within(alert).getByTestId('state-icon')).toBeInTheDocument()
    })

    it('should render the danger icon', () => {
      const alert = screen.getByRole('alert')
      const stateIcon = within(alert).getByTestId('state-icon')
      expect(
        within(stateIcon).getByTestId(`icon-${ALERT_VARIANT.DANGER}`)
      ).toBeInTheDocument()
    })

    it('should render the content title', () => {
      expect(screen.getByRole('heading', { name: 'Title' })).toBeInTheDocument()
    })

    it('should render the content description', () => {
      expect(screen.getByText('Description')).toBeInTheDocument()
    })

    describe('when the close button is clicked', () => {
      beforeEach(async () => {
        await userEvent.click(screen.getByRole('button', { name: /dismiss/i }))
      })

      it('should call the callback once', () => {
        expect(onCloseSpy).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('when the Alert content changes', () => {
    const ExampleAlert = ({ content }: { content: string }) => (
      <Alert title="Example title">{content}</Alert>
    )

    it('does not generate new ids when content changes', () => {
      const { rerender } = render(<ExampleAlert content="initial content" />)

      const initialAlert = screen.getByRole('alert')
      const initialTitle = screen.getByRole('heading')
      const initialTitleId = initialTitle.id
      const initialLabelledBy = initialAlert.getAttribute('aria-labelledby')

      rerender(<ExampleAlert content="new content" />)

      const updatedAlert = screen.getByRole('alert')
      const updatedTitle = screen.getByRole('heading')

      expect(updatedTitle.id).toBe(initialTitleId)
      expect(updatedAlert.getAttribute('aria-labelledby')).toBe(
        initialLabelledBy
      )
    })
  })

  describe('Arbitrary Markup', () => {
    it('renders the arbitrary JSX in the correct place', () => {
      render(
        <Alert>
          <div>Arbitrary JSX</div>
        </Alert>
      )

      const alert = screen.getByRole('alert')
      const content = within(alert).getByText('Arbitrary JSX')

      expect(content).toBeInTheDocument()
      expect(content.closest('div')).toContainHTML('<div>Arbitrary JSX</div>')
    })
  })

  describe('when hideDismiss prop is provided', () => {
    beforeEach(() => {
      render(<Alert hideDismiss>Description</Alert>)
    })

    it('should not render the close button', () => {
      expect(
        screen.queryByRole('button', { name: /dismiss/i })
      ).not.toBeInTheDocument()
    })

    it('should still render the alert content', () => {
      expect(screen.getByText('Description')).toBeInTheDocument()
    })

    it('should render the state icon', () => {
      const alert = screen.getByRole('alert')
      expect(within(alert).getByTestId('state-icon')).toBeInTheDocument()
    })
  })

  describe('when hideBorder prop is provided', () => {
    beforeEach(() => {
      render(<Alert hideBorder>Description</Alert>)
    })

    it('should not render the border', () => {
      const alert = screen.getByRole('alert')
      expect(alert).toHaveStyle('border: none')
    })
  })
})
