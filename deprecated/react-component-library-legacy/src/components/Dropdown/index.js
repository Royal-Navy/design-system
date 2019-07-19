import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  selectOption = (option, open) => {
    const { onChange } = this.props
    this.setState({
      open: !open,
    })
    onChange(option.value)
  }

  toggle = () => {
    const { open } = this.state
    this.setState({ open: !open })
  }

  render() {
    const { open } = this.state
    const { options } = open ? this.props : { options: [] }
    const { label, size } = this.props
    const dropdownStyles = `rn-dropdown ${size} ${open ? 'is-open' : ''}`

    return (
      <div className={dropdownStyles} role="listbox">
        <button
          type="button"
          className="rn-dropdown__button"
          onClick={this.toggle}
        >
          <span>{label}</span>
          <svg
            className="h_ml-10 rn-dropdown__arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="7"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M5.66 4.49L9.19.95a1 1 0 1 1 1.42 1.41L6.36 6.61a1 1 0 0 1-1.41 0L.71 2.36A1 1 0 1 1 2.12.95l3.54 3.54z"
            />
          </svg>
        </button>

        <div className="rn-dropdown__sheet">
          {options.map(option => (
            <div
              className="rn-dropdown__option"
              onClick={() => {
                this.selectOption(option, open)
              }}
              onKeypress={() => {
                this.selectOption(option, open)
              }}
              role="option"
              aria-selected="false"
              tabIndex={0}
            >
              <span className="rn-dropdown__option__label">{option.label}</span>
              {option.helper && (
                <span className="rn-dropdown__option__helper">
                  {option.helper}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }
}
Dropdown.propTypes = {
  /** The action to perform when the dropdown value changes */
  onChange: PropTypes.func,
  /** The label to display on the dropdown button */
  label: PropTypes.string,
  /** Sets the size of the Dropdown button, can be one of 'small', 'regular' or 'large' */
  size: PropTypes.string,
}

Dropdown.defaultProps = {
  onChange: () => {},
  label: 'Dropdown',
  size: 'regular',
}

export default Dropdown
