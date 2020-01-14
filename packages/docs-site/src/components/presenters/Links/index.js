import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import uuid from 'uuid'

const Links = ({ links }) => (
  <ul className="rn-links">
    {links.map(({ label, to }) => (
      <li className="rn-links__item" key={uuid()}>
        <Link className="rn-links__link" to={to}>
          {label}
        </Link>
      </li>
    ))}
  </ul>
)

Links.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      to: PropTypes.string,
    })
  ).isRequired,
}

Links.displayName = 'Links'

export default Links
