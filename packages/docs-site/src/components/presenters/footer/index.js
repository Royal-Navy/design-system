import { Links } from '@royalnavy/react-component-library'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import './footer.scss'

import MonoLogo from './logo.svg'

const Footer = ({ children, links }) => (
  <div className="rn-footer">
    <div className="rn-pagecontainer">
      <MonoLogo />
      <Links links={links} size="small" />
      <hr className="rn-footer__divider" />
      <div className="rn-footer__meta">
        <p data-testid="message" className="rn-footer__message">
          {children || (
            <Fragment>
              All content is available under the{' '}
              <a href="https://www.apache.org/licenses/LICENSE-2.0.html">
                Apache 2.0 licence
              </a>
              , except where otherwise stated.
            </Fragment>
          )}
        </p>
        <p className="rn-footer__copyright">&copy; Crown copyright</p>
      </div>
    </div>
  </div>
)

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.node,
  ]),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    })
  ),
}

Footer.defaultProps = {
  children: null,
  links: [
    {
      Component: Link,
      label: 'Privacy policy',
      to: '/privacy',
    },
    {
      Component: Link,
      label: 'Contact',
      to: '/contact',
    },
    {
      Component: Link,
      label: 'Feedback',
      to: '/feedback',
    },
  ],
}

export default Footer
