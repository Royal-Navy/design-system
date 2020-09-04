import PropTypes from 'prop-types'
import React from 'react'

import Links from '../Links'
import MonoLogo from './images/Logo'
import GithubLogo from '../images/GithubLogo'

const Footer = ({ children, links }) => (
  <div className="rn-footer">
    <div className="rn-container">
      <div className="rn-footer__content">
        <MonoLogo className="rn-footer__logo" />
        <a
          href="https://github.com/Royal-Navy/design-system"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubLogo className="rn-footer__github" />
        </a>
      </div>
      <Links links={links} />
    </div>

    <div className="rn-footer__meta">
      <div className="rn-container">
        <p data-testid="message" className="rn-footer__message">
          {children || (
            <>
              All content is available under the{' '}
              <a href="https://www.apache.org/licenses/LICENSE-2.0.html">
                Apache 2.0 licence
              </a>
              , except where otherwise stated.
            </>
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
      label: 'Accessibility',
      to: '/accessibility',
    },
  ],
}

export default Footer
