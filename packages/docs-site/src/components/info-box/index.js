import PropTypes from 'prop-types'
import React from 'react'

import './info-box.scss'
import { Link } from 'gatsby'

// import './develop-docs.svg'

const InfoBox = ({ children, className, link, linktext, linktype }) => {
  return (
    <Link className={`info-box ${className} ${linktype}`} to={link}>
      {children}
      {link && (
        <span className="info-box__link">
          {linktext}
          <svg
            className="info-box__arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="8"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M6.6 5H1a1 1 0 1 1 0-2h5.59L5.46 1.87A1 1 0 1 1 6.87.46L9.7 3.29a1 1 0 0 1 .19 1.17 1 1 0 0 1-.19.26L6.87 7.55a1 1 0 1 1-1.41-1.41L6.59 5z"
            />
          </svg>
        </span>
      )}
    </Link>
  )
}

InfoBox.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  linktext: PropTypes.string,
  linktype: PropTypes.string,
  children: PropTypes.instanceOf(Array).isRequired,
}

InfoBox.defaultProps = {
  className: '',
  link: null,
  linktext: 'Open Link',
  linktype: 'link',
}

export default InfoBox
