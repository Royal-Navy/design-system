import Store from './Store'

describe('Store', () => {
  let store

  describe('constructor', () => {
    describe('when called with initial state', () => {
      beforeEach(() => {
        store = new Store({ colour: 'red' })
      })

      it('should set the state to the initial state passed to it.', () => {
        expect(store.state).toEqual({ colour: 'red' })
      })
    })

    describe('when called with no initial state', () => {
      beforeEach(() => {
        store = new Store()
      })

      it('should set the state to an empty object', () => {
        expect(store.state).toEqual({})
      })
    })
  })

  describe('when subscribed to store', () => {
    let callback
    let subscription

    beforeEach(() => {
      callback = jest.fn()
      store = new Store({ size: 'large' })
      subscription = store.subscribe(callback)
    })

    it('should return a unique id for the subscription', () => {
      expect(subscription).toBeDefined()
    })

    describe('and a property is set in the store', () => {
      beforeEach(() => {
        store.set({ colour: 'red' })
      })

      it('should update the store state', () => {
        expect(store.state).toEqual({
          colour: 'red',
          size: 'large',
        })
      })

      it('should return the correct value when called with get and a key', () => {
        expect(store.get('colour')).toEqual('red')
      })

      it('should return all state when get is called with no key', () => {
        expect(store.get()).toEqual({
          colour: 'red',
          size: 'large',
        })
      })

      it('should call the callback to notify it of a new state', () => {
        expect(callback).toBeCalledWith({
          colour: 'red',
          size: 'large',
        })
      })
    })

    describe('then we unsubscribe', () => {
      beforeEach(() => {
        store.unSubscribe(subscription)
      })

      it('it should remove the subscription', () => {
        expect(store.callbacks).toEqual([])
      })

      describe('and a property is set in the store', () => {
        beforeEach(() => {
          store.set({ colour: 'red' })
        })

        it('should not call the callback to notify it of a new state', () => {
          expect(callback).not.toBeCalled()
        })
      })
    })
  })
})
