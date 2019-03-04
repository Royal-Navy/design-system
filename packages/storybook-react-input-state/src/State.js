/* eslint react/forbid-prop-types: 0 */
import castArray from 'lodash/castArray'
import get from 'lodash/get'
import PropTypes from 'prop-types'
import { Component, cloneElement } from 'react'

import Store from './Store'

class State extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    store: PropTypes.object,
  }

  static defaultProps = {
    children: [],
    store: new Store({}),
  }

  static displayName = 'State'

  constructor(props) {
    super(props)
    this.store = this.props.store
  }

  componentDidMount() {
    this.subscription = this.store.subscribe(state => this.setState(state))
    const mutation = {}

    castArray(this.props.children).forEach(child => {
      const { name, value } = child.props
      mutation[name] = value
    })

    this.store.set(mutation)
  }

  componentWillUnmount() {
    this.store.unSubscribe(this.subscription)
  }

  onChange = event => {
    const { name, value } = event.target
    const mutation = {}
    mutation[name] = value
    this.store.set(mutation)
  }

  cloneWithName = (child, index = 1) => {
    const { state } = this
    const key = get(child, 'props.key', index)
    const name = get(child, 'props.name')
    const value = get(state, name, '')

    const onChange = child.props.onChange
      ? event => {
          child.props.onChange(event)
          this.onChange(event)
        }
      : this.onChange

    return cloneElement(child, { key, onChange, value })
  }

  render() {
    return castArray(this.props.children).map((child, index) =>
      this.cloneWithName(child, index)
    )
  }
}

export default State
