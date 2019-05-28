import PropTypes from 'prop-types'
import React from 'react'
import uuid from 'uuid'

/**
 * The input component is a generic styled input component that
 * can be used hand in hand with redux forms. The component creates a form
 * control complete with label and icon, if specified.
 */
const Input = ({
  cols,
  id,
  label,
  onChange,
  name,
  rows,
  type,
  value,
  ...rest
}) => (
  <div className="rn-inputBlock">
    <label className="inputLabel" htmlFor={id}>
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea
        className={`textarea ${value && value.length ? 'hasContent' : ''}`}
        id={id}
        value={value}
        rows={rows}
        cols={cols}
        name={name}
        onChange={onChange}
        {...rest}
      />
    ) : (
      <input
        className={`input ${value && value.length ? 'hasContent' : ''}`}
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        {...rest}
      />
    )}
  </div>
)

Input.propTypes = {
  /**
   * If the type is a textarea the cols property is used to set the
   * number of columns to display (characters wide)
   */
  cols: PropTypes.string,
  /**
   * Optional ID that will be used for the input component, allows a
   * label to be linked to an input. If one is not provided a unique
   * id will be generated and used
   */
  id: PropTypes.string,
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
   * If the type is a textarea the cols property is used to set the
   * number of columns to display (characters wide)
   */
  rows: PropTypes.string,
  /**
   * The type attribute to use in the input element. If 'textarea' is specified
   * then a textaarea element is used.
   */
  type: PropTypes.string.isRequired,
  /**
   * The value for the input
   */
  value: PropTypes.string.isRequired,
}

Input.defaultProps = {
  cols: '80',
  rows: '5',
  id: uuid(),
}

export default Input
