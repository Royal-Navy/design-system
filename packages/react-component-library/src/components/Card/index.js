import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ children, padding, size, title, ...rest }) => {
  const cardStyle = `rn-card ${padding} ${size}`

  return (
    <div className={cardStyle} {...rest}>
      {title && <div className="rn-card__header">{title}</div>}
      {children}
    </div>
  )
}

Card.propTypes = {
  /** The component content */
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.node,
  ]).isRequired,
  /** The padding to be set inside the component */
  padding: PropTypes.string,
  /** The size of the card */
  size: PropTypes.string,
  /** The card's title, can be one of 'small','regular' or 'large' */
  title: PropTypes.string,
}

Card.defaultProps = {
  padding: null,
  size: null,
  title: null,
}

export default Card
