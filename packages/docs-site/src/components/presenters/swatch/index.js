import PropTypes from 'prop-types'
import React from 'react'

const Swatch = ({ color, label }) => (
  <div className="swatch-container">
    <div className="swatch" style={{ backgroundColor: color }} />
    <span className="swatch-label">{label}</span>
  </div>
)

Swatch.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default Swatch
