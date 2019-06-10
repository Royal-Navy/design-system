import React from 'react'
import { render } from '@testing-library/react'

import Card from './index'

describe('Card', () => {
  let card

  describe('when the Card is generated with name, text, linkText and linkHref props', () => {
    beforeEach(() => {
      card = render(
        <Card
          title="Example card"
          text="Example text"
          linkText="Example link"
          linkHref="http://test.url"
        />
      )
    })

    it('should link to provided uri', () => {
      const link = card.getByText('Example link')
      expect(link.getAttribute('href')).toContain('http://test.url')
    })

    it('should display the component name', () => {
      expect(card.getByTestId('title')).toHaveTextContent('Example card')
    })

    it('should display the component name', () => {
      expect(card.getByTestId('text')).toHaveTextContent('Example text')
    })

    it('should not display meta content', () => {
      expect(card.queryByTestId('meta')).toBeNull()
    })
  })

  describe('when the card is generated with as a coloured card with meta', () => {
    beforeEach(() => {
      card = render(
        <Card
          type="coloured"
          meta="Example meta"
          title="Example card"
          text="Example text"
          linkText="Example link"
          linkHref="http://test.url"
        />
      )
    })

    it('should display meta content', () => {
      expect(card.getByTestId('meta')).toHaveTextContent('Example meta')
    })
  })
})
