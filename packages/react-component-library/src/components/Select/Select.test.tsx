import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Select } from './Select'

const options = [{ value: 'example', label: 'Example', badge: 100 }]

describe('Select', () => {
  let wrapper: RenderResult

  describe('when passed a prop from `react-select` extended interface', () => {
    beforeEach(() => {
      wrapper = render(
        <Select options={options} label="Example Label" isDisabled />
      )
    })

    it('drills the prop down to wrapped component', () => {
      expect(wrapper.container.querySelector('.rn-select').classList).toContain(
        'rn-select--is-disabled'
      )
    })
  })
})
