import React from 'react'

import Link from '../Link'

const LinkItem: React.FC<any> = ({ Component = Link, label, ...rest }) => (
  <li className="rn-links__item">
    <Component className="rn-links__link" {...rest}>
      {label}
    </Component>
  </li>
)

LinkItem.displayName = 'LinkItem'

export default LinkItem
