import React, { Fragment } from 'react'

import Links from '../Links'
import MonoLogo from './logo.svg'

const defaultFooterLinks = [
  {
    label: 'Privacy policy',
    href: '/privacy',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
  {
    label: 'Feedback',
    href: '/feedback',
  },
]

interface FooterProps {
  links?: any[]
}

const Footer: React.FC<FooterProps> = ({
  children,
  links = defaultFooterLinks,
}) => (
  <div className="rn-footer">
    <MonoLogo />
    <Links links={links} size="small" />
    <hr className="rn-footer__divider" />
    <div className="rn-footer__meta">
      <p className="rn-footer__message">
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
)

export default Footer
