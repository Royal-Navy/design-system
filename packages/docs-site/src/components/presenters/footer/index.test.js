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

    it('should explain the licence for the project', () => {
      expect(footer.getByTestId('message')).toHaveTextContent(
        'All content is available under the Apache 2.0 licence, except where otherwise stated'
      )
    })
  })
})
