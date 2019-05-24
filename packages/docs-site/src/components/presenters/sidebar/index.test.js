import React from 'react'
import renderer from 'react-test-renderer'

import Sidebar from './index'

/* eslint-disable react/no-children-prop */

const navigation = [
  {
    node: {
      id: 'bc54746a-2d34-534b-bdd8-86c1d13d95bb',
      fields: {
        slug: '/',
      },
      frontmatter: {
        title: 'Home',
        status: '',
        index: 0,
      },
    },
    children: [],
  },
]

describe('Sidebar', () => {
  it('snapshot: has same HTML structure', () => {
    const tree = renderer.create(<Sidebar navigation={navigation} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
