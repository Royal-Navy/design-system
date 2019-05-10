import React from 'react'
import renderer from 'react-test-renderer'

import NoteBlock from './index'

/* eslint-disable react/no-children-prop */

describe('Note Block', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<NoteBlock children={['Content goes here']} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
