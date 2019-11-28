import PropTypes from 'prop-types'
import React from 'react'

const Swatch = ({ color, name, hex, theme }) => (
  <div className={'swatch ' + theme} style={{ backgroundColor: color }}>
    <span className="swatch-label">{name}</span>
    <span className="swatch-label">{color}</span>
  </div>
)

Swatch.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  theme: PropTypes.string,
}

Swatch.defaultProps = {
  theme: 'light',
}

export default Swatch
