import React from 'react'
import renderer from 'react-test-renderer'

import ContentBox from './index'

/* eslint-disable react/no-children-prop */

describe('Content Box', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ContentBox children={['Content goes here']} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
