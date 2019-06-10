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

  describe('when the Card is generated as a coloured card with meta', () => {
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

  describe('when the Card is generated as a borderless card with an image', () => {
    beforeEach(() => {
      card = render(
        <Card
          type="borderless"
          title="Example card"
          text="Laboris eiusmod cupidatat qui velit adipisicing culpa sunt exercitation laboris aliquip pariatur est aute. Ut irure sunt nulla anim fugiat mollit nisi ea duis exercitation eu minim. Officia anim consequat eiusmod elit esse magna aliquip enim ad sint enim consectetur. Occaecat cillum velit exercitation laborum aute nostrud qui ipsum est aute mollit eiusmod. Anim officia commodo sint cupidatat officia. Sint quis nulla minim consectetur enim commodo duis sit velit amet ullamco tempor veniam anim. Esse aute sunt enim sit id enim enim enim non proident est sunt cillum anim."
          imageSrc="https://via.placeholder.com/400"
          imagePosition="left"
          linkText="More"
          linkHref="http://test.url"
        />
      )
    })

    it('should display the image', () => {
      expect(card.queryByTestId('image')).not.toBeNull()
    })

    it('should output the image alt text accordingly', () => {
      expect(card.getByTestId('image').getAttribute('alt')).toContain(
        'Example card'
      )
    })

    it('should output the appropriate imagePosition modifier class', () => {
      expect(card.getByTestId('image').getAttribute('class')).toContain(
        'card__image--position-left'
      )
    })
  })
})
