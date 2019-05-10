import { Link } from 'gatsby'
import React from 'react'

import './primary-navigation.scss'

const PrimaryNavigation = () => (
  <nav className="primary-navigation">
    <Link className="primary-navigation__link" to="/">
      Home
    </Link>
    <Link className="primary-navigation__link" to="/design">
      Design
    </Link>
    <Link className="primary-navigation__link" to="/develop">
      Develop
    </Link>
    <Link className="primary-navigation__link" to="/contact-us">
      Contact Us
    </Link>
  </nav>
)

export default PrimaryNavigation
