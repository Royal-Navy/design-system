import React from 'react'
import { mount } from 'enzyme'

import State from './State'

describe('State', () => {
  let store
  let wrapper

  beforeEach(() => {
    store = {
      set: jest.fn(),
      subscribe: jest.fn().mockReturnValue(123),
      unSubscribe: jest.fn(),
    }
  })

  describe('when state is created with a store and a single input', () => {
    beforeEach(() => {
      wrapper = mount(
        <State store={store}>
          <input name="colour" value="red" />
        </State>
      )
    })

    it('should subscribe to changes in the store', () => {
      expect(store.subscribe).toBeCalled()
    })

    it('should populate the store with the initial values.', () => {
      expect(store.set).toBeCalledWith({ colour: 'red' })
    })

    describe('when the component is unmounted', () => {
      beforeEach(() => {
        wrapper.unmount()
      })

      it('should unsubscribe from the store', () => {
        expect(store.unSubscribe).toBeCalledWith(123)
      })
    })

    describe('when the value in an input is changed', () => {
      beforeEach(() => {
        const input = wrapper.find('input')
        input.instance().value = 'green'
        input.simulate('change')
      })

      it('should update the store with the value', () => {
        expect(store.set).toBeCalledWith({ colour: 'green' })
      })
    })
  })

  describe('when state is created with a store and multiple inputs', () => {
    beforeEach(() => {
      wrapper = mount(
        <State store={store}>
          <input name="colour" value="red" />
          <input name="size" value="small" />
        </State>
      )
    })

    it('should populate the store with the initial values.', () => {
      expect(store.set).toBeCalledWith({
        colour: 'red',
        size: 'small',
      })
    })

    describe('when the value in an input is changed', () => {
      beforeEach(() => {
        const input = wrapper.find('input[name="colour"]')
        input.instance().value = 'green'
        input.simulate('change')
      })

      it('should update the store with the value', () => {
        expect(store.set).toBeCalledWith({ colour: 'green' })
      })
    })
  })

  describe('when state is created with an input that already has an onChange', () => {
    let onChange

    beforeEach(() => {
      onChange = jest.fn()

      wrapper = mount(
        <State store={store}>
          <input name="colour" value="red" onChange={onChange} />
        </State>
      )
    })

    describe('when the value in an input is changed', () => {
      beforeEach(() => {
        const input = wrapper.find('input')
        input.instance().value = 'green'
        input.simulate('change')
      })

      it('should update the store with the value', () => {
        expect(store.set).toBeCalledWith({ colour: 'green' })
      })

      it('should call the original onChange with the event', () => {
        expect(onChange).toBeCalledTimes(1)
      })
    })
  })

  describe('when the input is nested', () => {
    let onChange

    beforeEach(() => {
      onChange = jest.fn()

      wrapper = mount(
        <State store={store}>
          <form>
            <div>
              <input name="colour" value="red" onChange={onChange} />
            </div>
          </form>
        </State>
      )
    })

    describe('when the value in an input is changed', () => {
      beforeEach(() => {
        const input = wrapper.find('input')
        input.instance().value = 'green'
        input.simulate('change')
      })

      it('should update the store with the value', () => {
        expect(store.set).toBeCalledWith({ colour: 'green' })
      })

      it('should call the original onChange with the event', () => {
        expect(onChange).toBeCalledTimes(1)
      })
    })
  })

  describe('when a store is not provided', () => {
    beforeEach(() => {
      wrapper = mount(
        <State>
          <input name="colour" value="red" />
        </State>
      )
    })

    it('should create a store', () => {
      expect(wrapper.store).not.toBeNull()
    })
  })
})
