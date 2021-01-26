import React from 'react'
import '@testing-library/jest-dom/extend-expect'
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
          onClose={onCloseSpy}
          title="Title"
          variant={ALERT_VARIANT.DANGER}
        >
          Description
        </Alert>
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
        expect(onCloseSpy).toBeCalledTimes(1)
      })
    })
  })
})
