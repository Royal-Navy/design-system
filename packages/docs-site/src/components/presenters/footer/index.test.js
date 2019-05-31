import React from 'react'
import { render } from '@testing-library/react'

import Footer from './index'

describe('Footer', () => {
  let footer

  describe('when the footer is generated with default values', () => {
    beforeEach(() => {
      footer = render(<Footer />)
    })

    it('should provide a privacy link', () => {
      const privacyLink = footer.getByText('Privacy policy')
      expect(privacyLink.getAttribute('href')).toContain('/privacy')
    })

    it('should provide a contact link', () => {
      const privacyLink = footer.getByText('Contact')
      expect(privacyLink.getAttribute('href')).toContain('/contact')
    })

    it('should provide a feedback link', () => {
      const privacyLink = footer.getByText('Feedback')
      expect(privacyLink.getAttribute('href')).toContain('/feedback')
    })

    it('should explain the licence for the project', () => {
      expect(footer.getByTestId('message')).toHaveTextContent(
        'All content is available under the Apache 2.0 licence, except where otherwise stated'
      )
    })
  })

  describe('when the footer is generated with custom content', () => {
    beforeEach(() => {
      const customLinks = [
        {
          label: 'Shop',
          href: '/shop',
        },
      ]

      footer = render(<Footer links={customLinks}>Test Message</Footer>)
    })

    it('should use the custom link', () => {
      const customLink = footer.getByText('Shop')
      expect(customLink.getAttribute('href')).toContain('/shop')
    })

    it('should not render the default links', () => {
      expect(footer.queryByText('Contact')).toBeNull()
    })

    it('should use the custom message', () => {
      expect(footer.getByTestId('message')).toHaveTextContent('Test Message')
    })
  })
})
