import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import { render, RenderResult } from '@testing-library/react'

import { Alert, ALERT_VARIANT } from '.'

describe('Alert', () => {
  let wrapper: RenderResult

  describe('when minimal props are provided', () => {
    beforeEach(() => {
      wrapper = render(<Alert>Description</Alert>)
    })

    it('should not set the `aria-labelledby` attribute', () => {
      expect(wrapper.getByTestId('alert')).not.toHaveAttribute(
        'aria-labelledby'
      )
    })

    it('should set the `role` attribute to `alert`', () => {
      expect(wrapper.getByTestId('alert')).toHaveAttribute('role', 'alert')
    })

    it('should render the close button', () => {
      expect(wrapper.getByTestId('close')).toBeInTheDocument()
    })

    it('should not render the content title', () => {
      expect(wrapper.queryAllByTestId('content-title')).toHaveLength(0)
    })

    it('should render the state icon', () => {
      expect(wrapper.getByTestId('state-icon')).toBeInTheDocument()
    })

    it('should render the default info icon', () => {
      expect(wrapper.getByTestId('icon-info')).toBeInTheDocument()
    })

    it('should render the content description', () => {
      expect(wrapper.getByTestId('content-description')).toHaveTextContent(
        'Description'
      )
    })

    describe('when the close button is clicked', () => {
      beforeEach(() => {
        wrapper.getByTestId('close').click()
      })

      it('should hide the alert', () => {
        expect(wrapper.queryAllByTestId('alert')).toHaveLength(0)
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
      wrapper = render(
        <Alert title="Title" variant={variant}>
          Description
        </Alert>
      )

      expect(wrapper.getByTestId(`icon-${variant}`)).toBeInTheDocument()
    })
  })

  describe('when all props are provided', () => {
    let onCloseSpy: (event: React.FormEvent<HTMLButtonElement>) => void

    beforeEach(() => {
      onCloseSpy = jest.fn()

      wrapper = render(
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
      expect(wrapper.getByTestId('alert')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary'
      )
    })

    it('should set the `aria-labelledby` attribute to the ID of the title', () => {
      const titleId = wrapper.getByTestId('content-title').getAttribute('id')

      expect(wrapper.getByTestId('alert')).toHaveAttribute(
        'aria-labelledby',
        titleId
      )
    })

    it('should set the `aria-describedby` attribute to the ID of the content', () => {
      const contentId = wrapper
        .getByTestId('content-description')
        .getAttribute('id')

      expect(wrapper.getByTestId('alert')).toHaveAttribute(
        'aria-describedby',
        contentId
      )
    })

    it('should render the state icon', () => {
      expect(wrapper.getByTestId('state-icon')).toBeInTheDocument()
    })

    it('should set the `aria-hidden` attribute on the state icon', () => {
      expect(wrapper.getByTestId('state-icon')).toHaveAttribute(
        'aria-hidden',
        'true'
      )
    })

    it('should render the danger icon', () => {
      expect(
        wrapper.getByTestId(`icon-${ALERT_VARIANT.DANGER}`)
      ).toBeInTheDocument()
    })

    it('should render the content title', () => {
      expect(wrapper.getByTestId('content-title')).toHaveTextContent('Title')
    })

    it('should render the content description', () => {
      expect(wrapper.getByTestId('content-description')).toHaveTextContent(
        'Description'
      )
    })

    describe('when the close button is clicked', () => {
      beforeEach(() => {
        wrapper.getByTestId('close').click()
      })

      it('should call the callback once', () => {
        expect(onCloseSpy).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('when the Alert content changes', () => {
    let initialContentId: string
    let initialTitleId: string | null

    const ExampleAlert = ({ content }: { content: string }) => (
      <Alert title="Example title">{content}</Alert>
    )

    beforeEach(() => {
      wrapper = render(<ExampleAlert content="initial content" />)
      initialContentId = wrapper.getByTestId('content-description').id
      initialTitleId = wrapper.getByTestId('content-title').id

      wrapper.rerender(<ExampleAlert content="new content" />)
    })

    it('does not generate a new content `id`', () => {
      expect(wrapper.getByTestId('content-description')).toHaveAttribute(
        'id',
        initialContentId
      )
    })

    it('does not generate a new title `id`', () => {
      expect(wrapper.getByTestId('content-title')).toHaveAttribute(
        'id',
        initialTitleId
      )
    })
  })

  describe('Arbitrary Markup', () => {
    let children: React.ReactElement

    beforeEach(() => {
      children = <div>Arbitrary JSX</div>

      wrapper = render(<Alert>{children}</Alert>)
    })

    it('renders the arbitrary JSX in the correct place', () => {
      expect(wrapper.getByTestId('content-description').innerHTML).toContain(
        renderToStaticMarkup(children)
      )
    })
  })

  describe('when hideDismiss prop is provided', () => {
    beforeEach(() => {
      wrapper = render(<Alert hideDismiss>Description</Alert>)
    })

    it('should not render the close button', () => {
      expect(wrapper.queryByTestId('close')).not.toBeInTheDocument()
    })

    it('should still render the alert content', () => {
      expect(wrapper.getByTestId('content-description')).toHaveTextContent(
        'Description'
      )
    })
  })
})
