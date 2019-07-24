import PropTypes from 'prop-types'
import React from 'react'

import './hero-banner.scss'

const HeroBanner = ({
  children,
  className,
  title,
  text,
  ctaLink,
  ctaText,
  footnote,
}) => (
  <section className={`hero-banner ${className}`} data-testid="hero-banner">
    {children || (
      <>
        <div className="hero-banner__main">
          {title && (
            <h1 className="hero-banner__title" data-testid="hero-banner-title">
              {title}
            </h1>
          )}
          {text && (
            <p className="hero-banner__text" data-testid="hero-banner-text">
              {text}
            </p>
          )}
          {ctaText && ctaLink && (
            <a className="rn-btn" href={ctaLink} data-testid="hero-banner-cta">
              {ctaText}
            </a>
          )}
        </div>
        {footnote && (
          <>
            <hr className="hero-banner__rule" />
            <p className="hero-banner__stakeholder-message">
              Are you a Navy Product Owner or Stakeholder{' '}
              <a className="hero-banner__link" href="/about">
                Find out how Standards relates to you.
              </a>{' '}
            </p>
          </>
        )}
      </>
    )}
  </section>
)

HeroBanner.propTypes = {
  className: PropTypes.string,
  children: PropTypes.instanceOf(Array),
  title: PropTypes.string,
  text: PropTypes.string,
  ctaLink: PropTypes.string,
  ctaText: PropTypes.string,
  footnote: PropTypes.bool,
}

HeroBanner.defaultProps = {
  className: '',
  children: null,
  title: null,
  text: null,
  ctaLink: null,
  ctaText: null,
  footnote: true,
}

export default HeroBanner
