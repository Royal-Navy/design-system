import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const camelize = function camelize(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
}

const Swatch = ({ property, value, label }) => {
  const styleToString = {
    [camelize(property)]: value,
  }
  return (
    <div className="swatch">
      <div className="swatch-block" style={styleToString} />
      <h1 className="label">{label}</h1>
    </div>
  )
}

Swatch.propTypes = {
  property: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default Swatch
