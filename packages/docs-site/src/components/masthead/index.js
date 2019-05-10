import PropTypes from 'prop-types'
import React from 'react'

import './masthead.scss'

const Masthead = ({ title, description, context, className }) => (
  <section className={`${className} masthead`}>
    <div className="container">
      <div className="masthead__content">
        {context && <h2 className="masthead__context">{context}</h2>}
        {title && <h2 className="masthead__title">{title}</h2>}
        {description && <p className="masthead__description">{description}</p>}
      </div>
    </div>
  </section>
)

Masthead.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  description: PropTypes.string,
  context: PropTypes.string,
}

Masthead.defaultProps = {
  title: null,
  className: '',
  description: null,
  context: null,
}

export default Masthead
