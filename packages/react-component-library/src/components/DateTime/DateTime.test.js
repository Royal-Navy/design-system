import React from 'react'
import ReactDOM from 'react-dom'

import DateTime from './index'

describe('DateTime', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<DateTime />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
