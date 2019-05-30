import React from 'react'
import renderer from 'react-test-renderer'

import HeroBanner from './index'

/* eslint-disable react/no-children-prop */

describe('HeroBanner', () => {
  it('snapshot: has same HTML structure', () => {
    const tree = renderer
      .create(<HeroBanner children={['Content goes here']} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
