import React from 'react'
import renderer from 'react-test-renderer'

import PostArticle from './index'
// Skipping test for now
xdescribe('Post Article', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<PostArticle />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
