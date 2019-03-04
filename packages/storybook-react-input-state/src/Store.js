import uuid from 'uuid'

export default class Store {
  constructor(state = {}) {
    this.state = { ...state }
    this.callbacks = []
  }

  set(newState) {
    this.state = { ...this.state, ...newState }
    this.callbacks.forEach(callback => callback.callback(this.state))
  }

  get(key) {
    if (key) {
      return this.state[key]
    }

    return this.state
  }

  subscribe(callback) {
    const subscription = uuid()
    this.callbacks.push({ subscription, callback })
    return subscription
  }

  unSubscribe(subscription) {
    const { callbacks } = this

    callbacks.forEach((callback, index) => {
      if (callback.subscription === subscription) {
        callbacks.splice(index, 1)
      }
    })
  }
}
