import PropTypes from 'prop-types'
import React from 'react'

const ContentBox = ({ children, className }) => (
  <section className={`content-box ${className}`}>{children}</section>
)

ContentBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.instanceOf(Array).isRequired,
}

ContentBox.defaultProps = {
  className: '',
}

export default ContentBox
