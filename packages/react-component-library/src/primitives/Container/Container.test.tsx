import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { renderToStaticMarkup } from 'react-dom/server'
import { render, RenderResult } from '@testing-library/react'

import { Container } from '.'

describe('Container', () => {
  let wrapper: RenderResult
  let children: React.ReactElement

  describe('when provided without a size and arbitrary JSX content', () => {
    beforeEach(() => {
      children = <pre>Arbitrary JSX</pre>
      wrapper = render(<Container>{children}</Container>)
    })

    it('applied the correct style rules based on the size prop', () => {
      expect(wrapper.getByTestId('container')).toHaveStyleRule(
        'padding-left',
        '2rem'
      )

      expect(wrapper.getByTestId('container')).toHaveStyleRule(
        'padding-right',
        '2rem'
      )
    })

    it('renders the content correctly', () => {
      expect(wrapper.getByTestId('container').innerHTML).toContain(
        renderToStaticMarkup(children)
      )
    })
  })

  describe('when provided with a size of small', () => {
    beforeEach(() => {
      wrapper = render(<Container size="small" />)
    })

    it('applied the correct style rules based on the size prop', () => {
      expect(wrapper.getByTestId('container')).toHaveStyleRule(
        'padding-left',
        '2rem'
      )

      expect(wrapper.getByTestId('container')).toHaveStyleRule(
        'padding-right',
        '2rem'
      )
    })
  })

  describe('when provided with a size of large', () => {
    beforeEach(() => {
      wrapper = render(<Container size="large" />)
    })

    it('applied the correct style rules based on the size prop', () => {
      expect(wrapper.getByTestId('container')).toHaveStyleRule(
        'padding-left',
        '2.5rem'
      )

      expect(wrapper.getByTestId('container')).toHaveStyleRule(
        'padding-right',
        '2.5rem'
      )
    })
  })
})
