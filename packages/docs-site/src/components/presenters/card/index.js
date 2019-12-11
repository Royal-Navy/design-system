import React from 'react'
import PropTypes from 'prop-types'

import './card.scss'

import ArrowRightIcon from './images/ArrowRightIcon'

const Card = ({
  type,
  title,
  meta,
  text,
  imageSrc,
  imagePosition,
  linkText,
  linkHref,
  className,
}) => {
  const Element = linkHref ? 'a' : 'article'

  return (
    <Element
      className={`card card--${type} ${className}`}
      href={linkHref}
      data-testid="root-element"
    >
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
            data-testid="image"
          />
        )}

        <p className="card__text" data-testid="text">
          {text}
        </p>

        {linkHref && linkText && type !== 'coloured' && (
          <span className="card__link">
            {linkText}
            <ArrowRightIcon />
          </span>
        )}
      </section>
    </Element>
  )
}

Card.propTypes = {
  type: PropTypes.oneOf(['borderless', 'border', 'coloured']),
  title: PropTypes.string,
  meta: PropTypes.string,
  text: PropTypes.string,
  imageSrc: PropTypes.string,
  imagePosition: PropTypes.oneOf(['left', 'right']),
  linkText: PropTypes.string,
  linkHref: PropTypes.string,
  className: PropTypes.string,
}

Card.defaultProps = {
  type: 'borderless',
  title: '',
  meta: '',
  text: '',
  imageSrc: '',
  imagePosition: 'left',
  linkText: '',
  linkHref: null,
  className: '',
}

export default Card
