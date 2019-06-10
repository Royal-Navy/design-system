import React from 'react'
import { render } from '@testing-library/react'

import Sidebar from './index'

const navigation = [
  {
    href: '',
    label: 'Home',
    children: [],
  },
]

describe('Sidebar', () => {
  let sidebar

  describe('when the sidebar is generated with title and navigation props', () => {
    beforeEach(() => {
      sidebar = render(
        <Sidebar navigation={navigation} title="Example title" />
      )
    })

    it('should display the title', () => {
      expect(sidebar.getByTestId('title')).toHaveTextContent('Example title')
    })
  })

  describe('when the sidebar is called with a custom class', () => {
    beforeEach(() => {
      sidebar = render(
        <Sidebar
          className="test"
          navigation={navigation}
          title="Example title"
        />
      )
    })

    it('should add the class name to the wrapper element', () => {
      expect(sidebar.getByTestId('wrapper')).toHaveClass('test')
      expect(sidebar.getByTestId('wrapper')).toHaveClass('sidebar')
    })
  })
})
