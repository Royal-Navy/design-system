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
})
