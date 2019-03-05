import PropTypes from 'prop-types'
import React from 'react'

import Radio from '../Radio'

const WithoutLabel = ({ name, onChange, optionsWithState }) => (
  <div className="rn-check">
    {optionsWithState.map(option => (
      <Radio key={option.value} name={name} onChange={onChange} {...option} />
    ))}
  </div>
)

WithoutLabel.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  optionsWithState: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
}

WithoutLabel.defaultProps = {
  onChange: () => {},
}

export default WithoutLabel
