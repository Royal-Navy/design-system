import React from 'react'
import { render } from '@testing-library/react'

import CodeHighlighter from './index'

describe('CodeHighlighter', () => {
  let codehighlighter
  let queryCommandSupported

  describe('when the CodeHighlighter is generated with language, example and source props', () => {
    beforeEach(() => {
      queryCommandSupported = jest.fn(() => true)
      document.queryCommandSupported = queryCommandSupported

      codehighlighter = render(
        <CodeHighlighter
          language="javascript"
          example="This is some example JSX"
          source="function restructureNodes(nodes) { return nodes.map(node => {}) }"
        />
      )
    })

    it('should output the example JSX', () => {
      expect(codehighlighter.getByTestId('example')).toHaveTextContent(
        'This is some example JSX'
      )
    })

    it('should check that browser copy functionality is supported', () => {
      expect(queryCommandSupported).toHaveBeenCalledWith('copy')
    })
  })
})
