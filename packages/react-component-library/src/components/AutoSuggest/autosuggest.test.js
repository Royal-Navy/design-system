import React from 'react'
import { shallow } from 'enzyme'

import AutoSuggest from './index'

import { suggestions } from './autosuggest.stories'

describe('AutoSuggest', () => {
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
      wrapper = shallow(<AutoSuggest suggestions={suggestions} />)
    })

    it('should render correctly render the AutoSuggest component', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
