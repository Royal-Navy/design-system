import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import './hero-banner.scss'


const HeroBanner = ({ children, className, title, text, ctaLink, ctaText }) => (
  <section className={`hero-banner ${className}`}>
    {children || <Fragment>
      <div className="hero-banner__main">
        <h1 className="hero-banner__title">{title}</h1>
        <p className="hero-banner__text">{text}</p>
        <a className="rn-btn" href={ctaLink}>{ctaText}</a>
      </div>
      <hr className="hero-banner__rule"/>
      <p className="hero-banner__stakeholder-message">Are you a Navy Product Owner or Stakeholder <a className="hero-banner__link" href="">Find out how Standards relates to you.</a> </p>
    </Fragment>}
  </section>
)

HeroBanner.propTypes = {
  className: PropTypes.string,
  children: PropTypes.instanceOf(Array).isRequired,
}

HeroBanner.defaultProps = {
  className: '',
}

export default HeroBanner
