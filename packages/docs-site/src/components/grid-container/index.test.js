import React from 'react'
import renderer from 'react-test-renderer'

import GridContainer from './index'

/* eslint-disable react/no-children-prop */

describe('Grid Container', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<GridContainer children={['Content goes here']} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
