import React from 'react'
import renderer from 'react-test-renderer'

import PostArticle from './index'

describe.skip('Post Article', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<PostArticle />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
