import React from 'react'

import { AnchorLinkProps } from '../../common/Link'

export const Link = ({
  children,
  className = '',
  href,
  ...rest
}: AnchorLinkProps) => (
  <a className={className} href={href} data-testid="link" {...rest}>
    {children}
  </a>
)

Link.displayName = 'Link'
