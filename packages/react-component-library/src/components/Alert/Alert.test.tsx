import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { Alert, ALERT_VARIANT } from '.'

describe('Alert', () => {
  let wrapper: RenderResult

  describe('when only the description is specified', () => {
    beforeEach(() => {
      wrapper = render(<Alert>Description</Alert>)
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

  describe('when the title is specified', () => {
    beforeEach(() => {
      wrapper = render(<Alert title="Title">Description</Alert>)
    })

    it('should render the state icon', () => {
      expect(wrapper.getByTestId('state-icon')).toBeInTheDocument()
    })

    it('should render the default info icon', () => {
      expect(wrapper.getByTestId('icon-info')).toBeInTheDocument()
    })

    it('should render the content title', () => {
      expect(wrapper.getByTestId('content-title')).toHaveTextContent('Title')
    })

    it('should render the content description', () => {
      expect(wrapper.getByTestId('content-description')).toHaveTextContent(
        'Description'
      )
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

  describe('when the onClose callback is specified', () => {
    let onCloseSpy: (event: React.FormEvent<HTMLButtonElement>) => void

    beforeEach(() => {
      onCloseSpy = jest.fn()

      wrapper = render(<Alert onClose={onCloseSpy}>Description</Alert>)
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
