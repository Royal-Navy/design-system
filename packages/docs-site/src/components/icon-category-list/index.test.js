import React from 'react'
import renderer from 'react-test-renderer'

import ICL from './index'

const icons = {
  allIcons: {
    edges: [
      {
        node: {
          id: 'a2599ceb-0465-5632-ac77-76fe8e0a538d',
          category: 'additional',
          name: 'add-circle-outline',
          path: 'additional/add-circle-outline.svg',
        },
      },
      {
        node: {
          id: '91ad58fd-af30-5533-a358-19c08977e063',
          category: 'additional',
          name: 'add-circle',
          path: 'additional/add-circle.svg',
        },
      },
    ],
  },
}

describe('Icon Category List', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ICL icons={icons} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
