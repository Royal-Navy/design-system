import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Link } from 'gatsby'
import {
  Badge,
  Button,
  Icons,
  Nav,
  PhaseBanner,
} from '@royalnavy/react-component-library'

import packageJson from '../../../../package'
import SiteLogo from './images/SiteLogo'

const { TriangleDown, TriangleUp } = Icons

const MastHead = ({ navItems }) => {
  const [open, setOpen] = useState(false)

  const hasNavItems = navItems.length > 0

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div className="masthead">
      <Link
        to="/get-started/development/v2-migration"
        className="masthead__banner"
      >
        <div className="rn-container">
          There&apos;s a new version of the Standards Toolkit.
          <strong>Read the migration docs.</strong>
        </div>
      </Link>
      <div className="masthead__container rn-container">
        <a href="/">
          <SiteLogo className="masthead__logo" />
        </a>

        <div className="masthead__version">
          <a href="/versions">
            <Badge color="action">v{packageJson.version}</Badge>
          </a>
        </div>

        {hasNavItems && (
          <Button
            className="masthead__button"
            data-testid="primary-nav-button"
            onClick={toggle}
            icon={open ? <TriangleDown /> : <TriangleUp />}
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
