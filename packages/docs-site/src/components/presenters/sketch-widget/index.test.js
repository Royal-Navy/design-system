import React from 'react'
import { render } from '@testing-library/react'

import SketchWidget from './index'

describe('SketchWidget', () => {
  let sketchwidget

  describe('when the SketchWidget is generated with name and href props', () => {
    beforeEach(() => {
      sketchwidget = render(
        <SketchWidget name="Example component" href="http://test.url" />
      )
    })

    it('should link to provided uri', () => {
      const downloadLink = sketchwidget.getByText('Download Sketch toolkit')
      expect(downloadLink.getAttribute('href')).toContain('http://test.url')
    })

    it('should display the component name', () => {
      expect(sketchwidget.getByTestId('name')).toHaveTextContent(
        'Example component'
      )
    })
  })
})
