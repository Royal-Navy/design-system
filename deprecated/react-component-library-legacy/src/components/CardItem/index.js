import React from 'react'
import PropTypes from 'prop-types'

const CardItem = ({ children }) => <div className="carditem">{children}</div>

CardItem.propTypes = {
  /** The component content */
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.node,
  ]).isRequired,
}

export default CardItem
