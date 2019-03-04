import React from 'react'
import ReactDOM from 'react-dom'

import Button from './index'

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Button>Hello World</Button>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
