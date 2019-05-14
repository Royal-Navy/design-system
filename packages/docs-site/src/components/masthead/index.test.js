import React from 'react'
import renderer from 'react-test-renderer'

import Masthead from './index'

describe('Masthead', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Masthead />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
