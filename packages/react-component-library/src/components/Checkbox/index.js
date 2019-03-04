import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({ checked, label, name, onChange, value }) => (
  <div className="rn-checkbox">
    <label className="rn-checkbox__label">
      <span className="rn-checkbox__label-inner">{label}</span>
      <input
        checked={checked}
        className="rn-checkbox__input"
        name={name}
        onChange={onChange}
        type="checkbox"
        value={value}
      />
    </label>
  </div>
)

Checkbox.propTypes = {
  /** Determines if the checkbox should be checked or not */
  checked: PropTypes.bool,
  /** The label for the checkbox */
  label: PropTypes.string.isRequired,
  /** The name for the checkbox */
  name: PropTypes.string.isRequired,
  /** The action to perform when the checkbox is updated */
  onChange: PropTypes.func,
  /** The value of the checkbox */
  value: PropTypes.string,
}

Checkbox.defaultProps = {
  value: null,
  checked: false,
  onChange: () => {},
}

export default Checkbox
