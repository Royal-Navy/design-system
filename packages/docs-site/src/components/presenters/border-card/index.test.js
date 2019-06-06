import React from 'react'
import { render } from '@testing-library/react'

import BorderCard from './index'

describe('BorderCard', () => {
  let bordercard

  describe('when the BorderCard is generated with name, text, linkText and linkHref props', () => {
    beforeEach(() => {
      bordercard = render(
        <BorderCard
          title="Example card"
          text="Example text"
          linkText="Example link"
          linkHref="http://test.url"
        />
      )
    })

    it('should link to provided uri', () => {
      const link = bordercard.getByText('Example link')
      expect(link.getAttribute('href')).toContain('http://test.url')
    })

    it('should display the component name', () => {
      expect(bordercard.getByTestId('title')).toHaveTextContent('Example card')
    })

    it('should display the component name', () => {
      expect(bordercard.getByTestId('text')).toHaveTextContent('Example text')
    })
  })
})
