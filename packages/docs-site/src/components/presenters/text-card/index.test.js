import React from 'react'
import { render } from '@testing-library/react'

import TextCard from './index'

describe('TextCard', () => {
  let textcard

  describe('when the TextCard is generated with name, text, linkText and linkHref props', () => {
    beforeEach(() => {
      textcard = render(
        <TextCard
          title="Example card"
          text="Example text"
          linkText="Example link"
          linkHref="http://test.url"
        />
      )
    })

    it('should link to provided uri', () => {
      const link = textcard.getByText('Example link')
      expect(link.getAttribute('href')).toContain('http://test.url')
    })

    it('should display the component name', () => {
      expect(textcard.getByTestId('title')).toHaveTextContent('Example card')
    })

    it('should display the component name', () => {
      expect(textcard.getByTestId('text')).toHaveTextContent('Example text')
    })

    it('should not display meta content', () => {
      expect(textcard.queryByTestId('meta')).toBeNull()
    })
  })

  describe('when the TextCard is generated with as a coloured card with meta', () => {
    beforeEach(() => {
      textcard = render(
        <TextCard
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
      expect(textcard.getByTestId('meta')).toHaveTextContent('Example meta')
    })
  })
})
