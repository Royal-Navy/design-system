import React from 'react'
import renderer from 'react-test-renderer'

import PrimaryNavigation from './index'

describe('Primary Naviation', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<PrimaryNavigation />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
