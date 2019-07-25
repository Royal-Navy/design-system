import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import Links from '../Links'

import './footer.scss'

import MonoLogo from './logo.svg'

const Footer = ({ children, links }) => (
  <div className="rn-footer">
    <div className="rn-container">
      <div className="rn-footer__content">
        <MonoLogo />
        <Links links={links} />
      </div>
    </div>
    <div className="rn-footer__meta">
      <div className="rn-container">
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
      to: PropTypes.string,
    })
  ),
}

Footer.defaultProps = {
  children: null,
  links: [
    {
      label: 'Privacy policy',
      to: '/privacy',
    },
    {
      label: 'Contact',
      to: '/contact',
    },
    {
      label: 'Feedback',
      to: '/feedback',
    },
  ],
}

export default Footer
