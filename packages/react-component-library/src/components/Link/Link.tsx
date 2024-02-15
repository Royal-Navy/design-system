import React from 'react'

import { AnchorType } from '../../common/Link'

export const Link = ({
  children,
  className = '',
  href,
  ...rest
}: AnchorType) => (
  <a className={className} href={href} data-testid="link" {...rest}>
    {children}
  </a>
)

Link.displayName = 'Link'
