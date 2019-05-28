import React from 'react'

import Link from './Link'

const LinkItem: React.FC<any> = ({ Component = Link, ...rest }) => (
  <li className="rn-links__item">
    <Component classNav="rn-links__link" {...rest} />
  </li>
)

export default LinkItem
