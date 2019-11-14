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

    it('should not render the header', () => {
      expect(wrapper.queryAllByTestId('header')).toHaveLength(0)
    })

    it('should render the content icon', () => {
      expect(wrapper.getByTestId('content-icon')).toBeInTheDocument()
    })

    it('should render the default info icon', () => {
      expect(wrapper.getByTestId('icon-info')).toBeInTheDocument()
    })

    it('should render the content description', () => {
      expect(wrapper.getByTestId('content-description')).toHaveTextContent(
        'Description'
      )
    })
  })

  describe('when the title is specified', () => {
    beforeEach(() => {
      wrapper = render(<Alert title="Title">Description</Alert>)
    })

    it('should render the header icon', () => {
      expect(wrapper.getByTestId('header-icon')).toBeInTheDocument()
    })

    it('should render the default info icon', () => {
      expect(wrapper.getByTestId('icon-info')).toBeInTheDocument()
    })

    it('should render the header title', () => {
      expect(wrapper.getByTestId('header-title')).toHaveTextContent('Title')
    })

    it('should not render the content icon', () => {
      expect(wrapper.queryAllByTestId('content-icon')).toHaveLength(0)
    })

    it('should render the content description', () => {
      expect(wrapper.getByTestId('content-description')).toHaveTextContent(
        'Description'
      )
    })
  })

  describe('when the variant is specified', () => {
    describe('when the variant is INFO', () => {
      beforeEach(() => {
        wrapper = render(
          <Alert title="Title" variant={ALERT_VARIANT.INFO}>
            Description
          </Alert>
        )
      })

      it('should render the info icon', () => {
        expect(wrapper.getByTestId('icon-info')).toBeInTheDocument()
      })
    })
  })
})
