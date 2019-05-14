import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const IconList = ({ category, icons }) => (
  <section className="icon-list">
    <h1>{category}</h1>
    <ul>
      {icons.map(icon => {
        // eslint-disable-next-line
        const Logo = require(`../../library/icons/${icon.path}`)
        return (
          <li key={icon.id}>
            <img src={Logo} alt={icon.name} />
          </li>
        )
      })}
    </ul>
  </section>
)

IconList.propTypes = {
  category: PropTypes.string.isRequired,
  icons: PropTypes.instanceOf(Array).isRequired,
}

export default IconList
