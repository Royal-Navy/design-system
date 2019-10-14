import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
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
      wrapper = render(
        <State store={store}>
          <input data-testid="input" name="colour" value="red" />
        </State>
      )
    })

    it('should subscribe to changes in the store', () => {
      expect(store.subscribe).toBeCalled()
    })

    it('should populate the store with the initial values.', () => {
      expect(store.set).toHaveBeenCalledWith({ colour: 'red' })
    })

    describe('when the component is unmounted', () => {
      beforeEach(() => {
        wrapper.unmount()
      })

      it('should unsubscribe from the store', () => {
        expect(store.unSubscribe).toHaveBeenCalledWith(123)
      })
    })

    describe('when the value in an input is changed', () => {
      beforeEach(() => {
        const input = wrapper.queryByTestId('input')
        fireEvent.change(input, { target: { name: 'colour', value: 'green' } })
      })

      it('should update the store with the value', () => {
        expect(store.set).toHaveBeenCalledWith({ colour: 'green' })
      })
    })
  })

  describe('when state is created with a store and multiple inputs', () => {
    beforeEach(() => {
      wrapper = render(
        <State store={store}>
          <input data-testid="colour" name="colour" value="red" />
          <input data-testid="size" name="size" value="small" />
        </State>
      )
    })

    it('should populate the store with the initial values.', () => {
      expect(store.set).toHaveBeenCalledWith({
        colour: 'red',
        size: 'small',
      })
    })

    describe('when the value in an input is changed', () => {
      beforeEach(() => {
        const input = wrapper.queryByTestId('colour')
        fireEvent.change(input, { target: { name: 'colour', value: 'green' } })
      })

      it('should update the store with the value', () => {
        expect(store.set).toHaveBeenCalledWith({ colour: 'green' })
      })
    })
  })

  describe('when state is created with an input that already has an onChange', () => {
    let onChange

    beforeEach(() => {
      onChange = jest.fn()

      wrapper = render(
        <State store={store}>
          <input
            data-testid="input"
            name="colour"
            onChange={onChange}
            value="red"
          />
        </State>
      )
    })

    describe('when the value in an input is changed', () => {
      beforeEach(() => {
        const input = wrapper.queryByTestId('input')
        fireEvent.change(input, { target: { name: 'colour', value: 'green' } })
      })

      it('should update the store with the value', () => {
        expect(store.set).toHaveBeenCalledWith({ colour: 'green' })
      })

      it('should call the original onChange with the event', () => {
        expect(onChange).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('when the input is nested', () => {
    let onChange

    beforeEach(() => {
      onChange = jest.fn()

      wrapper = render(
        <State store={store}>
          <form>
            <div>
              <input
                data-testid="input"
                name="colour"
                onChange={onChange}
                value="red"
              />
            </div>
          </form>
        </State>
      )
    })

    describe('when the value in an input is changed', () => {
      beforeEach(() => {
        const input = wrapper.queryByTestId('input')
        fireEvent.change(input, { target: { name: 'colour', value: 'green' } })
      })

      it('should update the store with the value', () => {
        expect(store.set).toHaveBeenCalledWith({ colour: 'green' })
      })
    })
  })

  describe('when a store is not provided', () => {
    beforeEach(() => {
      wrapper = render(
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
