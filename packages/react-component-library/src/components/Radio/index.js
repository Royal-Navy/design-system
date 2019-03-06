import React from 'react'
import PropTypes from 'prop-types'

const Radio = ({ checked, label, name, onChange, value }) => (
  <div className="rn-check">
    <label className="rn-check__label">
      <span className="rn-check__label-inner">{label}</span>
      <input
        checked={checked}
        className="rn-check__input"
        name={name}
        onChange={onChange}
        type="radio"
        value={value}
      />
    </label>
  </div>
)

Radio.propTypes = {
  /** Specifies if the radio button is checked or not */
  checked: PropTypes.bool,
  /** The label of the radio button */
  label: PropTypes.string.isRequired,
  /** The name of the radio button */
  name: PropTypes.string.isRequired,
  /** The action to perform if the radio button value changes */
  onChange: PropTypes.func,
  /** The value of the radio button */
  value: PropTypes.string,
}

Radio.defaultProps = {
  value: null,
  checked: false,
  onChange: () => {},
}

export default Radio
