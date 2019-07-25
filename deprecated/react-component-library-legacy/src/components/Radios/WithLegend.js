import PropTypes from 'prop-types'
import React from 'react'

import Radio from '../Radio'

const WithLegend = ({ legend, name, onChange, optionsWithState }) => (
  <fieldset className="rn-check rn-check--has-legend">
    <legend className="rn-check__legend">{legend}</legend>
    {optionsWithState.map(option => (
      <Radio {...option} key={option.value} name={name} onChange={onChange} />
    ))}
  </fieldset>
)

WithLegend.propTypes = {
  legend: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  optionsWithState: PropTypes.arrayOf(
    PropTypes.shape({
      checked: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
}

WithLegend.defaultProps = {
  onChange: () => {},
}

export default WithLegend
