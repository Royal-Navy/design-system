import React from 'react'
import PropTypes from 'prop-types'

import './sketch-widget.scss'

import SketchLogo from './sketch-logo.svg'
import DownloadIcon from './download-icon.svg'

const SketchWidget = ({ name, href }) => {
  return (
    <article className="sketch-widget">
      <div className="sketch-widget__head">
        <span className="sketch-widget__title">Name in Sketch toolkit</span>

        <a
          className="sketch-widget__link"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DownloadIcon />
          Download Sketch toolkit
        </a>
      </div>
      <div className="sketch-widget__body">
        <SketchLogo className="sketch-widget__sketch-logo" />
        <span data-testid="name" className="sketch-widget__name">
          {name}
        </span>
      </div>
    </article>
  )
}

SketchWidget.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
}

SketchWidget.defaultProps = {
  name: 'Component name undefined',
  href: '#',
}

export default SketchWidget
