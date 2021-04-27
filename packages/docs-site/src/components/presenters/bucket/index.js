import PropTypes from 'prop-types'
import React from 'react'

import SketchLogo from './images/SketchLogo'
import StorybookLogo from './images/StorybookLogo'

const Bucket = ({ className, type, url }) => (
  <article className={`bucket bucket--${type} ${className}`}>
    {type === 'sketch' && (
      <>
        <SketchLogo />
        <a className="bucket__button" href={url}>
          Download Library
        </a>
      </>
    )}
    {type === 'storybook' && (
      <>
        <StorybookLogo />
        <a className="bucket__button" href={url}>
          Read Docs
        </a>
      </>
    )}
  </article>
)

Bucket.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  url: PropTypes.string,
}

Bucket.defaultProps = {
  className: '',
  type: 'sketch',
  url: '',
}

export default Bucket
