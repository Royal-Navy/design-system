import PropTypes from 'prop-types'
import React from 'react'

import WithLegend from './WithLegend'
import WithoutLegend from './WithoutLegend'

function getOptionsWithState({ name, options, value }) {
  const result = options.map(option => ({
    ...option,
    name,
    checked: value === option.value,
  }))
  return result
}

const Radios = ({ legend, name, onChange, options, value }) => {
  const optionsWithState = getOptionsWithState({ name, options, value })

  if (legend) {
    return (
      <WithLegend
        legend={legend}
        name={name}
        onChange={onChange}
        optionsWithState={optionsWithState}
      />
    )
  }

  return (
    <WithoutLegend
      legend={legend}
      name={name}
      onChange={onChange}
      optionsWithState={optionsWithState}
    />
  )
}

Radios.propTypes = {
  /** The legend to be used for the radio group */
  legend: PropTypes.string,
  /** The name of the radio group */
  name: PropTypes.string.isRequired,
  /** The action to perform if the value of the radio group changes */
  onChange: PropTypes.func,
  /** The radio buttons to use within the radio group */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  /** The value of the radio group */
  value: PropTypes.string,
}

Radios.defaultProps = {
  legend: null,
  onChange: () => {},
  value: null,
}

export default Radios
