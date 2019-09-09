import 'jest-dom/extend-expect'
import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { OptionType } from '../../types/Switch'

import ResponsiveSwitch from './index'
import Switch from './Switch'

describe('Switch', () => {
  let label: string
  let className: string
  let onChange: (previous: OptionType, active: OptionType) => void
  let options: OptionType[]
  let component: RenderResult

  describe('when the component is provided label, onChange and options props', () => {
    beforeEach(() => {
      label = 'Example label'
      onChange = jest.fn()
      options = [
        { name: 'Example 1', value: '1' },
        { name: 'Example 2', value: '2' },
        { name: 'Example 3', value: '3' },
      ]
    })

    it('renders successfully', () => {
      component = render(
        <Switch label={label} onChange={onChange} options={options} />
      )
    })
  })
})

describe('ResponsiveSwitch', () => {
  //
})
