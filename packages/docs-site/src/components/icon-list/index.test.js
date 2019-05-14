import React from 'react'
import renderer from 'react-test-renderer'

import IconList from './index'

const category = 'additional'

const icons = [
  {
    id: 'a2599ceb-0465-5632-ac77-76fe8e0a538d',
    category: 'additional',
    name: 'add-circle-outline',
    path: './add-circle-outline.svg',
  },
  {
    id: '91ad58fd-af30-5533-a358-19c08977e063',
    category: 'additional',
    name: 'add-circle',
    path: './add-circle-outline.svg',
  },
]

describe('Icon List', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<IconList category={category} icons={icons} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
