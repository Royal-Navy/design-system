import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Link } from 'gatsby'
import { IconArrowDropDown, IconArrowDropUp } from '@royalnavy/icon-library'
import {
  Badge,
  Button,
  Nav,
  PhaseBanner,
} from '@royalnavy/react-component-library'

import packageJson from '../../../../package'
import SiteLogo from './images/SiteLogo'
import GithubLogo from '../images/GithubLogo'

const MastHead = ({ navItems }) => {
  const [open, setOpen] = useState(false)

  const hasNavItems = navItems.length > 0

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div className="masthead">
      <Link
        to="https://forms.gle/HCgExKRQacv4T1DbA"
        className="masthead__banner"
      >
        <div className="rn-container">
          Please take our 1-minute survey to help us improve the Royal Navy
          Design System.
        </div>
      </Link>
      <div className="masthead__container rn-container">
        <a href="/">
          <SiteLogo className="masthead__logo" />
        </a>

        <div className="masthead__version">
          <Badge color="action">v{packageJson.version}</Badge>
        </div>

        <a
          href="https://github.com/Royal-Navy/design-system"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubLogo className="masthead__github" />
        </a>

        {hasNavItems && (
          <Button
            className="masthead__button"
            data-testid="primary-nav-button"
            onClick={toggle}
            icon={open ? <IconArrowDropDown /> : <IconArrowDropUp />}
            variant="secondary"
          >
            Menu
          </Button>
        )}
      </div>
      <PhaseBanner className="masthead__phasebanner">
        <span>
          This is a new service - <a href="/contact">your feedback</a> will help
          us to improve it.
        </span>
      </PhaseBanner>

      {hasNavItems && (
        <div
          data-testid="primary-nav"
          className={`rn-container masthead__nav ${
            open ? 'is-open' : 'is-closed'
          }`}
        >
          <Nav orientation="horizontal" navItems={navItems} />
        </div>
      )}
    </div>
  )
}

MastHead.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.boolean,
      href: PropTypes.string,
      label: PropTypes.string,
    })
  ),
}

MastHead.defaultProps = {
  navItems: [],
}

export default MastHead
