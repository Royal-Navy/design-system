import React from 'react'
import renderer from 'react-test-renderer'

import InfoBox from './index'

/* eslint-disable react/no-children-prop */

describe('Info Box', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<InfoBox children={['Content goes here']} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
