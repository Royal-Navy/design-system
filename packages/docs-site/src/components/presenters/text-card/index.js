import React from 'react'
import PropTypes from 'prop-types'

import './text-card.scss'

import ArrowRightIcon from './arrow-right-icon.svg'

const TextCard = ({ type, title, meta, text, linkText, linkHref }) => {
  return (
    <article className={`text-card text-card--${type}`}>
      <header className="text-card__head">
        {meta && type === 'coloured' && (
          <span className="text-card__meta" data-testid="meta">
            {meta}
          </span>
        )}

        <span className="text-card__title" data-testid="title">
          {title}
        </span>
      </header>
      <section className="text-card__body">
        <p className="text-card__text" data-testid="text">
          {text}
        </p>

        {linkHref && linkText && type !== 'coloured' && (
          <a className="text-card__link" href={linkHref}>
            {linkText}
            <ArrowRightIcon />
          </a>
        )}
      </section>
    </article>
  )
}

TextCard.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  meta: PropTypes.string,
  text: PropTypes.string,
  linkText: PropTypes.string,
  linkHref: PropTypes.string,
}

TextCard.defaultProps = {
  type: 'borderless',
  title: '',
  meta: '',
  text: '',
  linkText: '',
  linkHref: '#',
}

export default TextCard
