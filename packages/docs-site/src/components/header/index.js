import { Link } from 'gatsby'
import React from 'react'

import PrimaryNavigation from '../primary-navigation'

import pkg from '../../../package.json'

import './header.scss'

const Header = () => (
  <div className="site-header">
    <div className="container">
      <div className="site-header__logo">
        <Link className="site-header__title" to="/">
          <h1 className="site-title">
            NELSON
            <span className="site-title__sub">Toolkit</span>
          </h1>
        </Link>
        <span className="site-header__changelog">
          <span className="site-title__pkg">{pkg.version}</span>
          <span className="site-title__beta">BETA</span>
        </span>
      </div>
      <PrimaryNavigation />
    </div>
  </div>
)

export default Header
