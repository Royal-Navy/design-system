import React from 'react'
import PropTypes from 'prop-types'

import './border-card.scss'

import ArrowRightIcon from './arrow-right-icon.svg'

const BorderCard = ({ title, text, linkText, linkHref }) => {
  return (
    <article className="border-card">
      <header className="border-card__head">
        <span className="border-card__title" data-testid="title">
          {title}
        </span>
      </header>
      <section className="border-card__body">
        <p className="border-card__text" data-testid="text">
          {text}
        </p>
        {linkHref && linkText && (
          <a className="border-card__link" href={linkHref}>
            {linkText}
            <ArrowRightIcon />
          </a>
        )}
      </section>
    </article>
  )
}

BorderCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  linkText: PropTypes.string,
  linkHref: PropTypes.string,
}

BorderCard.defaultProps = {
  title: '',
  text: '',
  linkText: '',
  linkHref: '#',
}

export default BorderCard
