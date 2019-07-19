import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import Nav from './index'
import Button from '../Button'

const stories = storiesOf('Nav', module)

const TriangleDown = () => (
  <svg
    width="11px"
    height="8px"
    viewBox="0 0 11 8"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-2689.000000, -331.000000)" fill="#253b5b">
        <path
          d="M2695.32404,332.198606 L2699.46151,338.216736 C2699.61795,338.444288 2699.5603,338.755578 2699.33275,338.912021 C2699.2494,338.969324 2699.15063,339 2699.04948,339 L2689.95052,339 C2689.67437,339 2689.45052,338.776142 2689.45052,338.5 C2689.45052,338.398853 2689.48119,338.300085 2689.53849,338.216736 L2693.67596,332.198606 C2693.98884,331.743501 2694.61142,331.628208 2695.06653,331.941093 C2695.1674,332.010446 2695.25469,332.09773 2695.32404,332.198606 Z"
          transform="translate(2694.500000, 335.000000) scale(1, -1) translate(-2694.500000, -335.000000) "
        />
      </g>
    </g>
  </svg>
)

const TriangleUp = () => (
  <svg
    width="11px"
    height="8px"
    viewBox="0 0 11 8"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-3365.000000, -331.000000)" fill="#253b5b">
        <path d="M3371.32404,332.198606 L3375.46151,338.216736 C3375.61795,338.444288 3375.5603,338.755578 3375.33275,338.912021 C3375.2494,338.969324 3375.15063,339 3375.04948,339 L3365.95052,339 C3365.67437,339 3365.45052,338.776142 3365.45052,338.5 C3365.45052,338.398853 3365.48119,338.300085 3365.53849,338.216736 L3369.67596,332.198606 C3369.98884,331.743501 3370.61142,331.628208 3371.06653,331.941093 C3371.1674,332.010446 3371.25469,332.09773 3371.32404,332.198606 Z" />
      </g>
    </g>
  </svg>
)

stories.addDecorator(withKnobs)

const navItems = [
  {
    href: 'http://testurl.test',
    label: 'Styles',
  },
  {
    href: 'http://testurl.test',
    label: 'Components',
  },
  {
    href: 'http://testurl.test',
    label: 'Patterns',
    active: true,
  },
  {
    href: 'http://testurl.test',
    label: 'Community',
  },
  {
    href: 'http://testurl.test',
    label: 'About',
  },
]

stories.add('Vertical', () => <Nav navItems={navItems} />)

stories.add('Horizontal', () => (
  <Nav navItems={navItems} orientation="horizontal" />
))

stories.add('Sizes', () => (
  <div>
    <Nav navItems={navItems} orientation="horizontal" size="small" />
    <br />
    <Nav navItems={navItems} orientation="horizontal" />
    <br />
    <Nav navItems={navItems} orientation="horizontal" size="large" />
    <br />
    <Nav navItems={navItems} orientation="horizontal" size="xlarge" />

    <hr />

    <Nav navItems={navItems} orientation="vertical" size="small" />
    <br />
    <Nav navItems={navItems} orientation="vertical" />
    <br />
    <Nav navItems={navItems} orientation="vertical" size="large" />
    <br />
    <Nav navItems={navItems} orientation="vertical" size="xlarge" />
  </div>
))

const CustomLink = ({ className, to, label }) => (
  <div className={className}>
    <a href={to}>{label}</a>
  </div>
)

CustomLink.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

CustomLink.defaultProps = {
  className: 'rn-nav__item',
}

stories.add('Custom Item', () => (
  <Nav
    Component={CustomLink}
    navItems={[
      {
        Component: CustomLink,
        to: 'http://testurl.test',
        label: 'Styles',
      },
      {
        Component: CustomLink,
        to: 'http://testurl.test',
        label: 'Components',
      },
      {
        Component: CustomLink,
        to: 'http://testurl.test',
        label: 'Patterns',
        active: true,
      },
      {
        Component: CustomLink,
        to: 'http://testurl.test',
        label: 'Community',
      },
      {
        Component: CustomLink,
        to: 'http://testurl.test',
        label: 'About',
      },
    ]}
  />
))

const PrimaryNav = () => {
  const [open, setOpen] = useState(true)

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div className="primary-nav">
      <Button
        className="primary-nav--button"
        onClick={toggle}
        icon={open ? <TriangleDown /> : <TriangleUp />}
      >
        Menu
      </Button>
      {open && <Nav navItems={navItems} orientation="horizontal" />}
    </div>
  )
}

stories.add('Primary Navigation', () => <PrimaryNav />)
