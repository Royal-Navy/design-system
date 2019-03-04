import React from 'react'
import PropTypes from 'prop-types'

function getStyle(max, min, value) {
  const percent = (value / (max - min)) * 100

  return {
    width: `${percent}%`,
  }
}

const Progress = ({ max, min, size, state, label, value }) => (
  <div className={`rn-progress ${size} ${state}`}>
    <div className="rn-progress__bar" style={getStyle(max, min, value)}>
      {label}
    </div>
  </div>
)

Progress.propTypes = {
  label: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  size: PropTypes.string,
  state: PropTypes.string,
  value: PropTypes.number,
}

Progress.defaultProps = {
  label: '',
  max: 100,
  min: 0,
  size: '',
  state: 'neutral',
  value: 50,
}

export default Progress
