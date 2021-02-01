import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { PhaseBanner } from '.'

describe('PhaseBanner', () => {
  let wrapper: RenderResult
  let content: React.ReactElement

  describe('with custom content', () => {
    beforeEach(() => {
      content = (
        <p>
          Custom html can go here. <strong>This part is in bold!</strong>
        </p>
      )

      wrapper = render(
        <PhaseBanner data-arbitrary="arbitrary">{content}</PhaseBanner>
      )
    })

    it('renders the custom content', () => {
      expect(wrapper.getByTestId('phase-banner-content').innerHTML).toContain(
        renderToStaticMarkup(content)
      )
    })

    it('should spread arbitrary props', () => {
      expect(wrapper.getByTestId('phase-banner')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary'
      )
    })
  })
})
