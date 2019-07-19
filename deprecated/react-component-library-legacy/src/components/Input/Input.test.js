import React from 'react'
import { shallow } from 'enzyme'

import Input from './index'

describe('Input', () => {
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
      wrapper = shallow(
        <Input
          id="user"
          type="text"
          label="test"
          name="user"
          value="1234"
          onChange={onChangeStub}
        />
      )
    })

    it('should render correctly render the input component', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should call the change handler when the user inputs a value', () => {
      const userInput = wrapper.find('input[name="user"]')
      userInput.value = 'correctUsername'
      userInput.simulate('change')
      expect(onChangeStub).toHaveBeenCalled()
    })
  })

  describe('textarea', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Input
          id="user"
          type="textarea"
          label="test"
          name="user"
          value="1234"
          onChange={onChangeStub}
        />
      )
    })

    it('should render correctly render the input component', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should call the change handler when the user inputs a value', () => {
      const userInput = wrapper.find('textarea[name="user"]')
      userInput.value = 'correctUsername'
      userInput.simulate('change')
      expect(onChangeStub).toHaveBeenCalled()
    })
  })
})
