import PropTypes from 'prop-types'
import React from 'react'

/**
 * The input component is a generic styled input component that
 * can be used hand in hand with redux forms. The component creates a form
 * control complete with label and icon, if specified.
 */
const Input = ({ id, label, onChange, name, type, value }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>

    <input
      className="form-control"
      id={id}
      name={name}
      onChange={onChange}
      type={type}
      value={value}
    />
  </div>
)

Input.propTypes = {
  /**
   * ID that will be used for the input component, allows a
   * label to be linked to an input.
   */
  id: PropTypes.string.isRequired,
  /**
   * The label to be used with the input. All inputs require an input
   */
  label: PropTypes.string.isRequired,
  /**
   * The name to use for the input element.
   */
  name: PropTypes.string.isRequired,
  /**
   * When a function to handle changes to the value, normally providfed by
   * redux forms
   */
  onChange: PropTypes.func.isRequired,
  /**
   * The type of input
   */
  type: PropTypes.string,
  /**
   * The value for the input
   */
  value: PropTypes.string.isRequired,
}

Input.defaultProps = {
  type: 'text',
}

export default Input
