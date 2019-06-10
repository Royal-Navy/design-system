import React from 'react'
import PropTypes from 'prop-types'

import './card.scss'

import ArrowRightIcon from './arrow-right-icon.svg'

const Card = ({
  type,
  title,
  meta,
  text,
  imageSrc,
  imagePosition,
  linkText,
  linkHref,
}) => {
  return (
    <article className={`card card--${type}`}>
      <header className="card__head">
        {meta && type === 'coloured' && (
          <span className="card__meta" data-testid="meta">
            {meta}
          </span>
        )}

        <span className="card__title" data-testid="title">
          {title}
        </span>
      </header>
      <section className="card__body">
        {imageSrc && type === 'borderless' && (
          <img
            className={`card__image card__image--position-${imagePosition}`}
            src={imageSrc}
            alt={title}
          />
        )}

        <p className="card__text" data-testid="text">
          {text}
        </p>

        {linkHref && linkText && type !== 'coloured' && (
          <a className="card__link" href={linkHref}>
            {linkText}
            <ArrowRightIcon />
          </a>
        )}
      </section>
    </article>
  )
}

Card.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  meta: PropTypes.string,
  text: PropTypes.string,
  imageSrc: PropTypes.string,
  imagePosition: PropTypes.string,
  linkText: PropTypes.string,
  linkHref: PropTypes.string,
}

Card.defaultProps = {
  type: 'borderless',
  title: '',
  meta: '',
  text: '',
  imageSrc: '',
  imagePosition: 'left',
  linkText: '',
  linkHref: '#',
}

export default Card
