import React from 'react'
import { shallow } from 'enzyme'

import PhaseBanner from '.'

describe('PhaseBanner', () => {
  let onChangeStub
  let wrapper

  beforeAll(() => {
    onChangeStub = jest.fn()
  })

  afterEach(() => {
    onChangeStub.mockReset()
  })

  describe('text', () => {
    beforeEach(() => {
      wrapper = shallow(<PhaseBanner />)
    })

    it('should render correctly render the AutoSuggest component', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
