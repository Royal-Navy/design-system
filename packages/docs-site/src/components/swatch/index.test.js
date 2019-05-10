import React from 'react'
import renderer from 'react-test-renderer'

import Swatch from './index'

describe('Swatch', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Swatch property="test" value="test" label="test" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
