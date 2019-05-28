import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Alert extends Component {
  static propTypes = {
    /** The component content */
    children: PropTypes.node.isRequired,
    /** Determines the action to be completed when the alert is closed */
    onClose: PropTypes.func,
    /** The title of the alert */
    title: PropTypes.string,
    /** Sets the state of the alert, can be one of 'neutral', 'primary', 'warning', 'success' or 'danger' */
    state: PropTypes.string,
    /** Allows a custom class name to be set on the component */
    className: PropTypes.string,
  }

  static defaultProps = {
    onClose: () => {},
    title: null,
    state: 'neutral',
    className: '',
  }

  constructor(props) {
    super(props)
    this.state = {
      open: true,
    }
  }

  onClick = () => {
    const { onClose } = this.props

    this.setState({ open: false })
    onClose()
  }

  render() {
    const { open } = this.state

    if (!open) {
      return null
    }

    const { children, state, title, className } = this.props

    return (
      <div className={`rn-alert ${state} ${className}`}>
        {title && <h4 className="rn-alert__title">{title}</h4>}
        <p className="rn-alert__message">{children}</p>
        <button
          type="button"
          className="rn-alert__close"
          onClick={this.onClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path
              fill="currentColor"
              fillRule="evenod"
              d="M8.09 6l3.48 3.48a1.48 1.48 0 1 1-2.09 2.09L6 8.09l-3.48 3.48A1.48 1.48 0 0 1 .43 9.48L3.91 6 .43 2.52A1.48 1.48 0 1 1 2.52.43L6 3.91 9.48.43a1.48 1.48 0 0 1 2.09 2.09L8.09 6z"
            />
          </svg>
        </button>
      </div>
    )
  }
}

export default Alert
